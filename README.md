# Сайт-визитка

> Ссылка на [сайт-визитку](https://p-sergei-qa.github.io/).

- [Описание](#about)
- [Как пользоваться](#how-to-use)
	- [Скачайте шаблон сайта-визитки](#download-business-card-website-template)
	- [Добавьте контактные данные](#add-contact-details)
	- [Добавьте аватар](#add-your-avatar)
	- [Изменените фон](#change-background)
	- [Создайте QR-код](#create-qr-code)
	- [Создайте сайт цифровой визитки](#create-digital-business-card-website)

<a name="about"></a>
## Описание

[Шаблон сайта-визитки](#download-business-card-website-template), который вы можете изменить и разместить на любом хостинге, в том числе на [GitHub Pages](https://docs.github.com/ru/pages), тогда сайт вашей электронной визитки будет доступен по адресу вида `username.github.io`, где `username` имя вашего пользователя.

Файлы в [папке сайта визитки](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) для базового использования:

- [`vcard.vcf`](#add-contact-details) - файл в текстовом формате [vCard](https://ru.wikipedia.org/wiki/VCard) для заполнения данными вашей электронной визитки. 
- [`avatar.jpg`](#add-your-avatar) - аватар для замены на ваше изображение.
- [`background.jpg`](#change-background) - фоновое изображение для замены на ваше изображение.
- [`qrcode.png`](#create-qr-code) - файл QR-кода, содержащий сылку на онлайн визитку, для замены на ваш файл.

<a name="how-to-use"></a>
## Как пользоваться

<a name="download-business-card-website-template"></a>
### Скачайте шаблон сайта-визитки

Вы можете скачать файлы сайта-визитки перейдя в [папку сайта визитки](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) и скачать ZIP-архив, нажав кнопку `Code` справа над списком файлов, а затем - `Download ZIP`.

<a name="add-contact-details"></a>
### Добавьте контактные данные

Вы можете создать и экспортировать карточку с вашими контактными данными и аватором в [VCF-файл](https://ru.wikipedia.org/wiki/VCard) на вашем устройстве [Android](https://support.google.com/contacts/answer/7199294?hl=ru), [Apple](https://support.apple.com/ru-ru/guide/contacts/adrbdcfd32e6/mac) или с помощью онлайн-сервиса [vCard maker](https://vcardmaker.com/), а затем заменить файл `vcard.vcf` в [папке сайта визитки](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) на созданный вами с таким же названием.

Затем вы также сможете редактировать ваши контактные данные в файле `vcard.vcf` с помощью текстового редактора на компьютере (в Windows/Блокнот или macOS/TextEdit), а также изменить онлайн после [создания сайта визитки](#create-digital-business-card-website).

Ссылка на карточку с контактными данными отображается в левом верхнем углу аватара, при клике по которой на мобильном устройстве будет предложено создать новый контакт, заполненный значениями из всех полей файла `vcard.vcf`, а при клике по ссылке на компьютере вы сможете скачать файл и импортировать его в ваши контакты.

> Обязательно добавьте аватар в файл `vcard.vcf`, если хотите чтобы он добавлялся в адресную книгу.

На сайте визитке отображаются только следующие поля из файла `vcard.vcf`:

- **Полное имя** - `FN:Имя Отчество Фамилия` (можно указывать не полностью), которое также содержится в поле `N:Фамилия;Имя;Отчество;Префикс;`.
- **Псевдоним** `NICKNAME:ваш псевдоним`.
- **`Email`** - `EMAIL;type=INTERNET;type=HOME;type=pref:ваш@email.dot`. Если указано несколько email-адресов (домашний, рабочий и т.д.), то отображается значения только первого email-адреса.
- **Заметка** - `NOTE:Краткая информация о себе`. Может содержать дополнительные ссылки, начинающиеся с `https://` или `www.`, а также символ переноса строки `\n`. Отображается при клике на соответствующую иконку в левом нижнем углу аватара.
- **ИД социальных профайлов** - ИД (логин, телефон), полный URL-адрес или пустое значение (для отображения не кликабельной иконки): 
  - `X-SOCIALPROFILE;type=Telegram:@username` - ИД `@username` в `Telegram`.

    Можно добавить и остальное:
  - `X-SOCIALPROFILE;type=WhatsApp:+79999999999` - телефон `+79999999999` в `WhatsApp`.
	- `X-SOCIALPROFILE;type=Viber:+79999999999` - телефон `+79999999999` в `Viber`.
	- `X-SOCIALPROFILE;type=VK:username` - Логин `username` в `VK`.
	- `X-SOCIALPROFILE;type=Facebook:`
	- `X-SOCIALPROFILE;type=Instagram:`
	- `X-SOCIALPROFILE;type=Twitter:`
	- `X-SOCIALPROFILE;type=Flickr:`
	- `X-SOCIALPROFILE;type=LinkedIn:`
	- `X-SOCIALPROFILE;type=GitHub:https://github.com/username` - ссылка `https://github.com/username` на `GitHub`.

> С помощью онлайн-сервиса [vCard maker](https://vcardmaker.com/) вы не сможете добавить все указанные профили социальных сетей, в таком случае необходимо будет добавить их вручную, отредактировав файл `vcard.vcf` после экспорта.

<a name="add-your-avatar"></a>
### Добавьте аватар

Замените файл `avatar.jpg` в [папке сайта визитки](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) на изображение вашего аватара с таким же названием, шириной и высотой не менее `330px`, если высота будет больше чем ширина, то только по клику аватар будет отображаться полностью.

> Обрезать и преобразовать изображение в `JPG` вы можете, например, с помощью онлайн-сервиса [iLoveImg](https://www.iloveimg.com/ru), а придать художественный стиль вашей фотографии - с помощью приложения [Prisma](https://prisma-ai.com).

Удалите или лучше замените файл `favicon.ico` на изображение вашего значка для отображения его во вкладке браузера.

> Создать значок `favicon.ico` вы можете, например, с помощью онлайн сервиса [Favicon Generator](https://realfavicongenerator.net), загрузив изображение вашего аватара и скачав новый файл значка.

<a name="change-background"></a>
### Изменените фон

Замените файл `background.jpg` в [папке сайта визитки](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) на изображение вашего фона с таким же названием.

> Вы можете скачать обои на рабочий стол в качестве фона, например, с помощью онлайн-сервиса [Wallpapers.com](https://wallpapers.com).


<a name="create-qr-code"></a>
### Создайте QR-код

Создайте QR-код со ссылкой на сайт вашей визитки, например, с помощью онлайн-сервиса [QRCode Monkey](https://www.qrcode-monkey.com) и замените файл `qrcode.png` в [папке сайта визитки](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) на изображение вашего QR-кода с таким же названием. 

> Вы можете создать и обновить QR-код после [создания сайта визитки](#create-digital-business-card-website).

QR-код отображается при клике на соответствующую иконку в правом верхнем углу аватара. В режиме отображения QR-кода фон меняется на белый цвет.

<a name="create-digital-business-card-website"></a>
### Создайте сайт-визитку

[Зарегестрируйтесь бесплатно на GitHub](https://github.com/signup), затем создайте новый репозиторий (место хранения файлов) с именем соответствующем `username.github.io` (где `username` - ваше имя пользователя) и включите в настройках [Github Pages](https://docs.github.com/ru/pages/quickstart).

> После регистрации, нажмите в правом верхнем углу знак `+` и нажмите в открывшемся меню `New repository`. На странице создания репозитория в поле `Owner` выберите ваше имя пользователя и в поле `Repository name` в качестве имени репозитория напишите `username.github.io`, где вместо `username` впишите ваше имя пользователя (маленькими буквами), оставьте галочку в поле `Public`, ничего больше не выбирайте и нажмите кнопку `Create repository`. 
>
> На странице вашего репозитория перейдите по ссылке `uploading an existing file`, перетащите файлы сайта визитки с вашего компьютера в поле `choose your files` и нажмите кнопку `Commit changes` для загрузки файлов.
> 
> Для включения GitHub Pages перейдите в настройки репозитория, нажав `Settings` в меню под названием вашего репозитория, затем перейдите в раздел `Pages` в меню слева и в поле `Branch` поменяйте значение `none` на главную ветку `main`, оставьте выбранную корневую директорию `/root` и нажмите кнопку `Save`. Через несколько минут ваши файлы опубликуются и в разделе `Pages` на верху отобразиться ссылка на ваш сайт вида `username.github.io`. 

Теперь вы можете [управлять файлами сайта визитки с помощью GitHub](https://docs.github.com/ru/repositories/working-with-files/managing-files) - редактировать текстовые файлы (например, изменить файл `vcard.vcf` с вашими контактными данными), загружать новые (например, изображение QR-кода `qrcode.png`) и удалять старые (например, удалить директорию `/example`).



## Snowflakes

Добавляет на сайт **новогоднее настроение**, а точнее снегопад, сугробы и машинку, которая их регулярно убирает!

**⚠️ Код никак не изменяет другие файлы и не влияет на работу сайта.
Однако, перед установкой скрипта рекомендуем создать резервную копию базы данных и всех файлов.**

### Установка

### Загружаем файлы к себе на сервер

1. [Скачать](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) ZIP-архив, нажав кнопку `Code` справа над списком файлов, а затем - `Download ZIP` и распаковать архив.
2. Загрузить папку "snowFlakes" с файлами себе на хостинг. Остальные файлы не нужны.
3. Подключить css-стили и js-скрипт:

В HTML ПЕРЕД закрывающим тегом `</head>` вставить строку:

```html
    <link href="snowFlakes/snow.min.css" rel="stylesheet">
```

В HTML ПОСЛЕ открывающего тега `<body>` вставить строки:

```html
    <script src="snowFlakes/Snow.js"></script>
    <script>
        new Snow();
    </script>
```


