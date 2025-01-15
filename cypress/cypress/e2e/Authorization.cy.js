import * as data from "../helpers/default_data.json"  // Логин и пароль теперь в папке /helpers/default_data.json

describe('Проверка авторизации', function () {

    // Будет повторяться перед каждым автотестом
    beforeEach('Начало теста', function () { 
        cy.visit('/');                             //Зашли на сайт. Выносим baseURL в конфиг, в js указывать '/'
        cy.get('#open-auth-page').click();         // Нашел кнопку Войти и кликаю
          });
    //Будет повторяться после каждого автотеста
    //afterEach('Конец теста', function () {
    // Указать строку JS
      // });

    // Первый автотест
    it('Неверный логин и верный пароль', function () {
        cy.get('#login').type('Login1');            // Нашел логин и указываю его
        cy.get('#password').type(data.password);       // Нашел пароль и указываю его
        cy.get('.button').click();                  // Нажимаю Войти

        // Перехватываем alert с ошибкой авторизации
        cy.on('window:alert', (alertText) => {
         expect(alertText).to.equal('Неверный логин или пароль!');
        });

        // Проверяем, что форма авторизации все еще отображается
        cy.get('#login').should('be.visible');
        cy.get('#password').should('be.visible'); 
         })

// Второй автотест
it('Неверный логин и пустое поле пароля', function () {
    // Заполняем поле логина и оставляем поле пароля пустым
    cy.get('#login').type('Login123');                // Вводим логин
    cy.get('.button').click();                        // Нажимаем кнопку "Войти"

    // Проверяем, что браузер показывает сообщение об ошибке на поле пароля
    cy.get('#password')
      .then(($input) => {
        expect($input[0].validationMessage).to.eq('Заполните это поле.');
      });
});

// Третий автотест
it('Верный логин и неверный пароль', function () {
    cy.get('#login').type(data.login);              // Нашел логин и указываю его
    cy.get('#password').type('Password1');       // Нашел пароль и указываю его
    cy.get('.button').click();                   // Нажимаю Войти

    // Перехватываем alert с ошибкой авторизации
    cy.on('window:alert', (alertText) => {
     expect(alertText).to.equal('Неверный логин или пароль!');
    });

    // Подождем немного, чтобы дать время для обработки
    cy.wait(1000);

    // Проверяем, что форма авторизации все еще отображается
    cy.get('#login').should('be.visible');
    cy.get('#password').should('be.visible');   
     })

// Четвертый автотест
it('Пустое поле логина и верный пароль', function () {
    // Оставляем поле логина пустым и заполняем только пароль
    cy.get('#password').type(data.password);                // Вводим пароль
    cy.get('.button').click();                           // Нажимаем кнопку "Войти"

// Проверяем, что браузер показывает сообщение об ошибке на поле логина
    cy.get('#login')
    .then(($input) => {
    expect($input[0].validationMessage).to.eq('Заполните это поле.');
  });
});

// Пятый автотест
it('Верный логин и пустое значение пароля', function () {
    // Заполняем поле логина и оставляем поле пароля пустым
    cy.get('#login').type(data.login);                     // Вводим логин
    cy.get('.button').click();                          // Нажимаем кнопку "Войти"

    // Проверяем, что браузер показывает сообщение об ошибке на поле пароля
    cy.get('#password')
      .then(($input) => {
        expect($input[0].validationMessage).to.eq('Заполните это поле.');
      });
});

// Шестой автотест
it('Неверный логин и неверный пароль', function () {
    cy.get('#login').type('Login1');               // Нашел логин и указываю его
    cy.get('#password').type('Password1');         // Нашел пароль и указываю его
    cy.get('.button').click();                     // Нажимаю Войти

    // Перехватываем alert с ошибкой авторизации
    cy.on('window:alert', (alertText) => {
     expect(alertText).to.equal('Неверный логин или пароль!');
    });

    // Подождем немного, чтобы дать время для обработки
    cy.wait(1000);

    // Проверяем, что форма авторизации все еще отображается
    cy.get('#login').should('be.visible');
    cy.get('#password').should('be.visible'); 
     })

// Седьмой автотест
it('Оба поля логин и пароль пустые', function () {
    // Нажимаем кнопку "Войти", не заполняя поля
    cy.get('.button').click();

    // Проверяем, что браузер показывает сообщение об ошибке на поле логина
    cy.get('#login')
      .then(($input) => {
        expect($input[0].validationMessage).to.eq('Заполните это поле.');
      });
});

    // Восьмой автотест
    it('Верный логин и верный пароль', function () {
         cy.get('#login').type(data.login);           // Нашел логин и указываю его
         cy.get('#password').type(data.password);     // Нашел пароль и указываю его
         cy.get('.button').click();                // Нажимаю Войти

         cy.get('p').should('have.text', 'Вы успешно вошли в систему.');     // Проверяю, что вижу тест после авто. Чтобы проверка была строгой и текст совпадал полностью (включая точку), использую .should('have.text', 'Вы успешно вошли в систему.')
         cy.get('p').should('be.visible');                                   // Проверяю, что элемент 'Вы успешно вошли в систему.' виден пользователю

         
    })
   
   // Девятый автотест 
    it('Пустое поле логина и верный пароль', function () {
        // Оставляем поле логина пустым и заполняем только пароль
        cy.get('#password').type(data.password); // Вводим пароль
        cy.get('.button').click();            // Нажимаем кнопку "Войти"
        
        // Проверяем, что браузер показывает сообщение об ошибке на поле логина
        cy.get('#login')
          .then(($input) => {
            expect($input[0].validationMessage).to.eq('Заполните это поле.');
            
          });
        });
        
})

    // запуск через теринал: npx cypress run --spec cypress/e2e/Authorization.cy.js --browser chrome