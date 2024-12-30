$(function () {	
	// Change theme by hash from url

	let changeTheme = () => {
		if (window.location.hash) {
			let isChanged = false,
				hashes = window.location.hash.split('.').splice(0, 10),
				classes = [
					'classic', 'dark', 'background', 'condensed', 'mono', 'slab'
			];

			$('body').attr('class', '');
								
			$.each(hashes, function(name, value) {	
				value = value.trim().replace(/^#/, '');
			
				if (classes.includes(value)) {
					$('body').addClass(value);
					
					isChanged = true;
				}
			});
			
			if (hashes.includes('classic')) {
				$('#round').css('width', '');	
			} else {
				$('#round').css('width', '');			
			}
			
			$('#round').css('width', $('#round').width());
			$('#round').css('height', $('#round').width());
			
			if (isChanged && $('.to-index').length) {
				$('.to-index').attr('href', $('.to-index').attr('href').replace(/#.*/, '') +  hashes.join('.'))
			}
			
			return isChanged;
		}
		
		return false;
	};
	
	let isChanged = changeTheme();
	
	window.addEventListener('hashchange', function(e) {
		changeTheme();
	});

	// Make avatar image height equal to width
		
	$('#round').css('width', $('#round').width()).css('height', $('#round').width());
	
	$(window).resize(function() {
		$('#round').css('width', '').css('height', '')
			.css('width', $('#round').width()).css('height', $('#round').width());
	});

	$('#avatar').on('click', function() {
		$('#avatar').toggleClass('full');
	});
	
	    // Show QR code link if it exists Скачать контакты
		$.get($('#vcard-link').attr('href'), function() {
			$('#vcard-link')
				.removeClass('is-hidden') // Сделать ссылку видимой
				.attr('title', 'Скачать контакты') // Добавить всплывающую подсказку
				.css({
					'user-select': 'none',  // Запрещаем выделение текста
					'-webkit-user-drag': 'none',  // Запрещаем перетаскивание
					'pointer-events': 'auto'  // Ссылка должна быть активной
				});
		}).fail(function() {
			$('#vcard-link i').remove();
		});

		$(document).ready(function() {
			// Запрещаем выделение текста и перетаскивание на фотографии
			$('img').css({
				'user-select': 'none',  // Запрещает выделение текста
				'-webkit-user-drag': 'none',  // Запрещает перетаскивание
				'pointer-events': 'none'  // Отключает события для перетаскивания
			});
		});
		
		
	
	// Show QR code link if it exists
	$(function () {
		// Всплывающая подсказка для QR-кода
		if ($('#qrcode').length) {
			$('#qrcode-link')
				.attr('title', 'QR визитки') // Подсказка для QR-кода
				.removeClass('is-hidden'); // Сделать иконку видимой
		}
	});
	

	// Get vCard data
	$.get($('#vcard-link').attr('href'), function( data ) {		
		let vcard = {},
		
			// Social profile IDs 
			socials = [
				'Telegram', 'WhatsApp', 'Viber', 'VK', 'Facebook', 'Instagram', 'Twitter', 'Flickr', 'LinkedIn', 'GitHub', 'YouTube', 'TradingView', 
			],
			
			fields = [
				'FN', 'NICKNAME', 'ORG', 'EMAIL', 'TEL', 'URL', 'NOTE',
			].concat(socials);
			
		// Prepare data				
		$.each(data.split("\n"), function(index, value) {		
			if (value.search(/[:]/) !== -1) {											
				$.each(fields, function(i, name) {	
					if (fields.includes(name)) {		
						let regexp = new RegExp('^(.*[\.,:,;,=,\-]+)?' + name + '([\.,:,;,=,\-]+.*)?:', 'i'),
							key = name.toLowerCase();
					
						if (value.search(regexp) !== -1) {
							if (key === 'note') {
								vcard[key] = value.replace(new RegExp('^(.*[\.,:,;,=,\-]+)?' + name + '([\.,,;,=,\-]+[^:]*)?:', 'i'), '').trim();
							} else {
								value = value.replace(/(https?:\/\/|ftps?:\/\/)/, '').replace(regexp, '').trim().replace(/^[@,\+,#]/, '').replace(/;$/, '');
							
								if (socials.includes(name)) {
									if (vcard.social === undefined) {
										vcard.social = {};
									}
									
									vcard.social[key] = value;
									
								} else {
									vcard[key] = value;
								}
							}
					
							fields.splice(i, 1);
						}
					}
				});
			}
		});
		
		// Get name and organisation
		if (vcard.fn.length || vcard.nickname.length || vcard.org.length) {
			$('#name').removeClass('is-hidden');
			
			if (vcard.fn) {
				$('#fn').text(vcard.fn);

				if (!$('title').text()) {
					$('title').text(vcard.fn);
				}
			}
			
			if (vcard.org) {
				if (!vcard.fn && !vcard.nickname) {
					$('#fn').text(vcard.org);
					
					if (!$('title').text()) {
						$('title').text(vcard.org);
					}
				} else {
					$('#org').text(vcard.org).removeClass('is-hidden');
				}
			}
			
			if (vcard.nickname) {
				if (!vcard.fn) {
					$('#fn').text(vcard.nickname).removeAttr('data-toggle');
					
					if (!$('title').text()) {
						$('title').text(vcard.nickname);
					}
				} else if (!vcard.org) {
					$('#fn').removeAttr('data-toggle');
					$('#org').text(vcard.nickname).removeClass('is-hidden');
				} else {
					$('#nickname').text(vcard.nickname);
				}
			} else {
				$('#fn').removeAttr('data-toggle');
			}
		}
		
		// Get telephone
		if (vcard.tel) {
			$('#tel').removeClass('is-hidden');
			$('#tel a')
				.attr('href', $('#tel a').attr('href') + '+' + vcard.tel.replace(/[^0-9]/g, ''))
				.text('+' + vcard.tel);
				
			$('#name').addClass('name-border');
		}
		
		//Вывести почту на главной старице визитки из vcard - отменил!
		// if (vcard.email) {
		//	$('#email').removeClass('is-hidden');
		//	$('#email a')
		//		.attr('href', $('#email a').attr('href') + '+' + vcard.email)
		//		.text(vcard.email);
		//		
		//	$('#name').addClass('name-border');
		//}

		//Делаю иконку почты
		// Если почта есть в vCard, показываем иконку и ссылку

		
		 // Get url
        // Установить ссылку на GitHub 
        $(document).ready(function() {
            $('#url')
                .attr('href', 'https://github.com/P-Sergei-qa') // Устанавливаем ссылку на GitHub
                .attr('target', '_blank') // Открывать в новой вкладке
                .attr('title', 'Мой GitHub') // Всплывающая подсказка
                .removeClass('is-hidden') // Убираем класс, чтобы сделать ссылку видимой
                .css({
                    'user-select': 'none', // Запрещает выделение текста
                    '-webkit-user-drag': 'none', // Запрещает перетаскивание
                    'pointer-events': 'auto' // Ссылка должна быть активной
                });
        });
		
		// Get note это заметка обо мне!
		if (vcard.note) {
			$('#note-link').removeClass('is-hidden');
		
			// Добавление всплывающей подсказки
			$('#note-link').attr('title', 'QA тропа'); // Текст всплывающей подсказки
		
			let note = [];
		
			vcard.note = vcard.note.replace(/(\\r\\n|\\n\\r|\\r|\\n)/g, '<br/>').replace(/\\(\.|\,|:|;|=|\-)/g, "$1");
		
			// https://ru.stackoverflow.com/questions/746497/
			vcard.note.replace(/((?:https?:\/\/|ftps?:\/\/|\bwww\.)(?:(?![.,?!;:()]*(?:\s|$))[^\s]){2,})|(\n+|(?:(?!(?:https?:\/\/|ftp:\/\/|\bwww\.)(?:(?![.,?!;:()]*(?:\s|$))[^\s]){2,}).)+)/gim, (m, link, text) => {
				note.push(link ? '<a href="' + (link[0] === "w" ? "//" : "") + link + '" target="_blank">' + link.replace(/(https?:\/\/|ftps?:\/\/)/, '') + '</a>' : text)
			});
		
			$('#note').html(note);
		} else {
			$('#note-link i').remove();
		}
		
		
		// Get social profile IDs
		
		if (vcard.social) {
			$('#social').removeClass('is-hidden');
			$('#name').addClass('name-border');
			
			$.each(vcard.social, function(name, url) {	
				let $id = $('#' + name.toLowerCase());
				
				if (url.search(/[\/]/) !== -1) {
					url = '//' + url;
				} else if (url.length) {
					if (name === 'whatsapp' || name === 'viber') {					
						url = url.replace(/[^0-9]/g, '');
						
						if (name === 'viber') {
							url = '%2B' + url;
						}
					}
				
					url = $id.attr('href') + url;
				}
							
				if (url) {
					$id.attr('href', url);
				} else {
					$id.removeAttr('href');
				}	
				
				$id.removeClass('is-hidden');
			});	
		}	
		
		// Example
		
		if (window.location.pathname.search(/\/(about|example)\//) != -1) {
			let isAbout = window.location.pathname.search(/\/about\//) != -1 ? true : false;
		
			$('.vcard').prepend($('<select>', {style: 'margin-bottom: 30px; border-radius: 3px;)'}).on('change', function() {
				window.location.href = this.value;
				
				changeTheme();
			}));
			
			let pathname = window.location.pathname.replace(/^.*\/([^\/]*)/, "$1"),
				files = {
				'Classic': ['index.classic.html', 'index.classic.background.html', 'index.classic.dark.html', 'index.classic.dark.background.html'],
				'Roboto': ['index.html', 'index.background.html', 'index.dark.html', 'index.dark.background.html'],
				'Roboto Condensed': ['index.condensed.html', 'index.condensed.background.html', 'index.condensed.dark.html', 'index.condensed.dark.background.html'],
				'Roboto Mono': ['index.mono.html', 'index.mono.background.html', 'index.mono.dark.html', 'index.mono.dark.background.html'],
				'Roboto Slab': ['index.slab.html', 'index.slab.background.html', 'index.slab.dark.html', 'index.slab.dark.background.html'],
			};

			if (isChanged) {
				pathname = window.location.hash.replace('#', '');
			}
			
			if (!pathname) {
				pathname = (isAbout) ? 'index.condensed.dark.background.html' : 'index.html';
			}

			$.each(files, function(group, values) {	
				let $optgroup = $('<optgroup>', {label: group});
			
				$.each(values, function(index, value) {
					$optgroup.append($('<option>', {value: (isAbout ? '#' : '') + value, text: value, selected: value === pathname ? true : false}));
				});
				
				$('.vcard select').append($optgroup);
			});
		}		
	});
});
