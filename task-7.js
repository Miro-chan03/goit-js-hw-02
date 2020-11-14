'use strict';

const logins = ['Mango', 'robotGoogles', 'Poly', 'Aj4x1sBozz', 'qwerty123'];

const isLoginValid = function(allLogins, login) {
  if (login.length >= 4 && login.length <= 16) {
    return true;
  }

  return false;
};

// console.log(isLoginValid(logins, 'Zod'));

const isLoginUnique = function(allLogins, login) {
  if (allLogins.includes(login)) {
    return false;
  }

  return true;
};

// console.log(isLoginUnique(logins, 'Mango'));

const addLogin = function(allLogins, login) {
  if (isLoginValid(allLogins, login) === false) {
    console.log('Ошибка! Логин должен быть от 4 до 16 символов');
    return false;
  } else if (isLoginUnique(allLogins, login) === false) {
    console.log('Такой логин уже используется!');
    return false;
  } else {
    console.log('Логин успешно добавлен!');
    logins.push(login);

    return true;
  }
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(addLogin(logins, 'Ajax')); // 'Логин успешно добавлен!'
console.log(addLogin(logins, 'robotGoogles')); // 'Такой логин уже используется!'
console.log(addLogin(logins, 'Zod')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(addLogin(logins, 'jqueryisextremelyfast')); // 'Ошибка! Логин должен быть от 4 до 16 символов'
console.log(logins);
