// Логин и пароль
const validLogin = 'S';
const validPassword = 'P';

// Показать форму восстановления пароля
document.getElementById('forgot-password').addEventListener('click', function() {
    document.getElementById('password-recovery-form').classList.remove('hidden');
    document.getElementById('forgot-password').classList.add('hidden');  // Скрыть кнопку "Забыли пароль?"
});

// Обработчик формы авторизации
document.getElementById('auth-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const login = document.getElementById('login').value;
    const password = document.getElementById('password').value;

    // Проверяем логин и пароль
    if (login === validLogin && password === validPassword) {
        // Переход на страницу успешной авторизации
        window.location.href = 'success.html';  // Поменяйте путь на вашу страницу
    } else {
        alert('Неверный логин или пароль!');
    }
});

// Обработчик для восстановления пароля
document.getElementById('submit-recovery').addEventListener('click', function() {
    const recoveryLogin = document.getElementById('recovery-login').value;

    if (recoveryLogin === validLogin) {
        alert('Восстановление пароля успешно. Пароль: P');
        document.getElementById('password-recovery-form').classList.add('hidden');
        document.getElementById('forgot-password').classList.remove('hidden'); // Снова показываем кнопку "Забыли пароль?"
    } else {
        alert('Неверный логин для восстановления пароля!');
    }
});
