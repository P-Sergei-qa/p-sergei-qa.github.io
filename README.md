# Сайт-визитка

> Ссылка на [сайт-визитку](https://p-sergei-qa.github.io/).

- [Описание](#about)
	- [Как пользоваться](#how-to-use)
	- [Скачайте шаблон сайта-визитки](#download-business-card-website-template)
	- [Добавьте контактные данные](#add-contact-details)
	- [Добавьте аватар](#add-your-avatar)
	- [Изменените фон](#change-background)
	- [Создайте QR-код](#create-qr-code)
	- [Создайте сайт-визитку](#create-digital-business-card-website)
 - [Snowflakes](#Snowflakes)
 - [Создаём свой CI/CD](#CICD)
 - [Создаём кнопку "Войти"](#auth)
 - [Автотесты на UI с помощью JS + Cypress](#Auto)

<a name="about"></a>
## Описание

[Шаблон сайта-визитки](#download-business-card-website-template), который вы можете изменить и разместить на любом хостинге, в том числе на [GitHub Pages](https://docs.github.com/ru/pages), тогда сайт вашей электронной визитки будет доступен по адресу вида `username.github.io`, где `username` имя вашего пользователя.

Файлы в [папке сайта-визитки](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) для базового использования:

- [`vcard.vcf`](#add-contact-details) - файл в текстовом формате [vCard](https://ru.wikipedia.org/wiki/VCard) для заполнения данными вашей электронной визитки. 
- [`avatar.jpg`](#add-your-avatar) - аватар для замены на ваше изображение.
- [`background.jpg`](#change-background) - фоновое изображение для замены на ваше изображение.
- [`qrcode.png`](#create-qr-code) - файл QR-кода, содержащий сылку на онлайн визитку, для замены на ваш файл.

<a name="how-to-use"></a>
## Как пользоваться

<a name="download-business-card-website-template"></a>
### Скачайте шаблон сайта-визитки

Вы можете скачать файлы сайта-визитки перейдя в [папку](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) и скачать ZIP-архив, нажав кнопку `Code` справа над списком файлов, а затем - `Download ZIP`.

<a name="add-contact-details"></a>
### Добавьте контактные данные

Вы можете создать и экспортировать карточку с вашими контактными данными и аватором в [VCF-файл](https://ru.wikipedia.org/wiki/VCard) на вашем устройстве [Android](https://support.google.com/contacts/answer/7199294?hl=ru), [Apple](https://support.apple.com/ru-ru/guide/contacts/adrbdcfd32e6/mac) или с помощью онлайн-сервиса [vCard maker](https://vcardmaker.com/), а затем заменить файл `vcard.vcf` в [папке сайта-визитки](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) на созданный вами с таким же названием.

Затем вы также сможете редактировать ваши контактные данные в файле `vcard.vcf` с помощью текстового редактора на компьютере (в Windows/Блокнот или macOS/TextEdit), а также изменить онлайн после [создания сайта-визитки](#create-digital-business-card-website).

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

Замените файл `avatar.jpg` в [папке сайта-визитки](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) на изображение вашего аватара с таким же названием, шириной и высотой не менее `330px`, если высота будет больше чем ширина, то только по клику аватар будет отображаться полностью.

> Обрезать и преобразовать изображение в `JPG` вы можете, например, с помощью онлайн-сервиса [iLoveImg](https://www.iloveimg.com/ru), а придать художественный стиль вашей фотографии - с помощью приложения [Prisma](https://prisma-ai.com).

Удалите или лучше замените файл `favicon.ico` на изображение вашего значка для отображения его во вкладке браузера.

> Создать значок `favicon.ico` вы можете, например, с помощью онлайн сервиса [Favicon Generator](https://realfavicongenerator.net), загрузив изображение вашего аватара и скачав новый файл значка.

<a name="change-background"></a>
### Изменените фон

Замените файл `background.jpg` в [папке сайта-визитки](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) на изображение вашего фона с таким же названием.

> Вы можете скачать обои на рабочий стол в качестве фона, например, с помощью онлайн-сервиса [Wallpapers.com](https://wallpapers.com).


<a name="create-qr-code"></a>
### Создайте QR-код

Создайте QR-код со ссылкой на сайт вашей визитки, например, с помощью онлайн-сервиса [QRCode Monkey](https://www.qrcode-monkey.com) и замените файл `qrcode.png` в [папке сайта-визитки](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) на изображение вашего QR-кода с таким же названием. 

> Вы можете создать и обновить QR-код после [создания сайта-визитки](#create-digital-business-card-website).

QR-код отображается при клике на соответствующую иконку в правом верхнем углу аватара. В режиме отображения QR-кода фон меняется на белый цвет.

<a name="create-digital-business-card-website"></a>
### Создайте сайт-визитку

[Зарегестрируйтесь бесплатно на GitHub](https://github.com/signup), затем создайте новый репозиторий (место хранения файлов) с именем соответствующем `username.github.io` (где `username` - ваше имя пользователя) и включите в настройках [Github Pages](https://docs.github.com/ru/pages/quickstart).

> После регистрации, нажмите в правом верхнем углу знак `+` и нажмите в открывшемся меню `New repository`. На странице создания репозитория в поле `Owner` выберите ваше имя пользователя и в поле `Repository name` в качестве имени репозитория напишите `username.github.io`, где вместо `username` впишите ваше имя пользователя (маленькими буквами), оставьте галочку в поле `Public`, ничего больше не выбирайте и нажмите кнопку `Create repository`. 
>
> На странице вашего репозитория перейдите по ссылке `uploading an existing file`, перетащите файлы сайта-визитки с вашего компьютера в поле `choose your files` и нажмите кнопку `Commit changes` для загрузки файлов.
> 
> Для включения GitHub Pages перейдите в настройки репозитория, нажав `Settings` в меню под названием вашего репозитория, затем перейдите в раздел `Pages` в меню слева и в поле `Branch` поменяйте значение `none` на главную ветку `main`, оставьте выбранную корневую директорию `/root` и нажмите кнопку `Save`. Через несколько минут ваши файлы опубликуются и в разделе `Pages` на верху отобразиться ссылка на ваш сайт вида `username.github.io`. 

Теперь вы можете [управлять файлами сайта-визитки с помощью GitHub](https://docs.github.com/ru/repositories/working-with-files/managing-files) - редактировать текстовые файлы (например, изменить файл `vcard.vcf` с вашими контактными данными), загружать новые (например, изображение QR-кода `qrcode.png`) и удалять старые (например, удалить директорию `/example`).


<a name="Snowflakes"></a>
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

<a name="CICD"></a>
## Создаём свой CI/CD

CI/CD — Continuous Integration (CI) и Continuous Delivery (CD) - это философия непрерывной интеграции и доставки


### Работа в терминале Visual Studio Code

1. Открыть в терминале папку с сайтом на компьютере и перейти в ветку ​​​​main​​​​ (или ​​​​master​​​​)
2. Скачать все обновления из репозитория: `​​​​git pull​​​​`
3. Добавить в корень проекта папку командой ​​​​`​​mkdir .github​​`. Чтобы её увидеть, можно использовать команду `​​​​​​ls -la​​​​​​`
4. Перейти в папку  `​​​​.github​​​​ ` (команда ​​ `​​cd .github​​​ `)
5. ​Добавить внутри папки ​​​​`.github`​​​​ папку ​​​​`workflows`​​​​ (обязательно с маленькой буквы, команда ​​​​`​​​​mkdir workflows​​​​`​​​​ )
6. Добавить в папку ​​​​`workflows`​​​​ файл ​​ [`cicd.yml`](https://github.com/P-Sergei-qa/p-sergei-qa.github.io/tree/main/.github/workflows) В этом ямл файле и содержится готовая настройка твоего ci/cd
7. Сохранить и запушить изменения:
- ​​​​`git add .`​​​​
- ​​​​`git commit -m "добавил ямл"​​​​`
- `​​​​git push​​`

8. Создать бота в телеграм: @botFather и там команда ​​​​​​​​`/newbot​​​​​​​​`
- Назвать его, например, ​​​​CI CD​​​​1
- Дать ему адрес, например, ​​​​`Name_ci_cd_bot​​​​`
- [`Botfather`](https://t.me/BotFather) пришлёт в ответ ​​​​`​​​​token​​​​`  
- Зайти в аккаунт созданного бота и нажать там ​​​​`​​​​/start​​​​​​​​`

9. В репозитории на GitHub (не общие настройки, а именно конкретного репозитория)  зайти в настройки секретов: Settings -> Secrets and variables -> Actions
10. Создать два секрета (New repository secret):

- Первый секрет:
  
	Name: `​​​​TG_TOKEN​​​​` 

	Secret: скопировать токен из @botFather, который получил при создании бота на шаге #8

- Второй секрет:

	Name: `​​​​TG_ID1​​​​` 

	Secret: прописать айди своего аккаунта (узнай у https://t.me/userinfobot)


	**В итоге должно быть два секрета**

11. Запусти сборку ветки вручную:

	а) Перейди в репозиторий на GitHub

	б) Переходи во вкладку `​​​​Actions​​​​`

	в) Выбирай ​​​​`workflow`​​​​: Telegram и HTML5-Validator

	г) Нажимай `​​​​Run workflow​​​​`

	д) Выбирай ветку в которой есть `​​​​cicd.yaml​​​​ (main)`

	е) Жми ​​​​`Run workflow​​​​`

	ж) Через 5-10 секунд появится новая сборка







<a name="auth"></a>
## Создаём кнопку "Войти"
    
Добавление авторизации для последующего составления [чек-листов](https://miro.com/app/board/uXjVLMrcM5w=/?share_link_id=526891267577 ) и автотестов.

**⚠️ Код никак не изменяет другие файлы и не влияет на работу сайта.
Однако, перед установкой скрипта рекомендуем создать резервную копию базы данных и всех файлов.**


### Загружаем файлы к себе на сервер

1. [Скачать](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) ZIP-архив, нажав кнопку `Code` справа над списком файлов, а затем - `Download ZIP` и распаковать архив.
2. Загрузить папку `auth` с файлами себе на хостинг. В папке `auth` разместите следующие файлы:

	`auth.html`

	`auth.css`

	`auth.js`

	`login.html`

	`success.html`

	`success.js`
3. В файле `index.html` перед закрывающим тегом `</body> ` вставить строки:


```html
<div class="auth-button-container">
  <!-- Кнопка для перехода на страницу авторизации -->
  <button id="open-auth-page" class="button tiny" onclick="window.location.href='auth/auth.html'">Войти</button>
</div>

```

Убедитесь, что путь к файлу авторизации прописан корректно. В моем случае папка `auth` находится в корневой директории рядом с файлом `index.html`, поэтому путь к файлу авторизации: `auth/auth.html`.

6. Логин и пароль для доступа:

	Логин: `Login`

	Пароль: `Password`
	


<a name="Auto"></a>
## Автотесты на UI с помощью JS + Cypress

Этот проект содержит автотесты, написанные с использованием **Cypress и JavaScript**. Работа над проектом включала следующие этапы:

- Составление [чек-листа](https://miro.com/app/board/uXjVLMrcM5w=/?share_link_id=526891267577 ) и применение техники тест-дизайна — Pairwise. 
- Разработка [тест-кейсов](https://miro.com/app/board/uXjVLMrcM5w=/?share_link_id=317306456649 ) в TMS `Test IT` для проверки авторизации на сайте-визитке. 
- Написание [автотестов](https://miro.com/app/board/uXjVLMrcM5w=/?share_link_id=317306456649 ) для этих тест-кейсов с использованием **Cypress и JavaScript**.


### Установка и запуск

1. [Скачайте](https://github.com/P-Sergei-qa/p-sergei-qa.github.io) ZIP-архив, нажав кнопку `Code` справа над списком файлов, а затем - `Download ZIP` и распакуйте архив.
2. Загрузите папку ​​​​`cypress​​​​` с файлами в рабочую зону.
3. Скачайте и установите ​​​​`Node.js​​​​` по ссылке: [Node.js Download.](https://nodejs.org/en/download/)
4. Откройте проект в любой IDE, например, в `Visual Studio Code`.
Перейдите в терминале в папку с репозиторием, используя команду:

```html
    cd путь
```

Все новые автотесты добавляются в папку:

```html
cypress/e2e
```

Новый файл указывается с именем:

```html
название.cy.js
```

5. В терминале в папке с проектом для открытия Cypress выполните:

```html
npx cypress open
```
Появится окно `Cypress`, выберите `E2E Testing`, далее браузер `Chrom`, нажмите `Start E2E Testing`

В разделе `Specs` выберите `Authorization.cy.js` и запустите автотесты кнопкой `Run All Tests`, либо на клавиатуре нажмите `R`

### Для запуска автотестов из терминала выполните:

```html
npx cypress run
```
Для запуска конкретного теста в браузере Chrome:

```html
npx cypress run --spec cypress/e2e/Authorization.cy.js --browser chrome
```

Видео с прогоном автотеста находится в папке [videos](https://github.com/P-Sergei-qa/p-sergei-qa.github.io/tree/main/cypress/cypress/videos ) 


### Полезные действия
**Основные операции с элементами:**


- Клик ​​​​`.click();​​​​`

- Проверка, что элемент содержит текст: ​​​​`.contains('текст');​​​​` 

- Правый клик ​​​​`.rightclick()`​​​​ 

- Эффект наведения `​​​​cy.get('.menu-item').trigger('mouseover')​​​​`

- Написать что-то в инпут ​​​​`.type('как найти работу тестировщиком')​​​​`

- Нажать энтер ​​​​`.type('{enter}')​​​​`

- Проверить css свойство: ​​​​`.should('have.css', 'color', 'rgb(0, 85, 152)');​​​​`

- Проверить, что элемент виден пользователю: ​​​​`.should('be.visible');​​​​`


**Действия со страницей:**

- Перейти на новый сайт ​​​​`.cy.visit('​​​​​​​​https://google.com​​​​​​​​')​​​​`

- Почистить куки `​​​​cy.clearCookies()​​​​`

- Почистить локал сторадж `​​​​cy.clearLocalStorage()​​​​` 

- Подождать ещё 5 секунд  ​​​​`cy.wait(5000)​​​​`

Задать мобильные размеры окна в cypress.config.js:
```html
viewportWidth: 390,  
viewportHeight: 844
```
Полный список доступен в [документации Cypress](https://docs.cypress.io/api/commands/and#Syntax)



