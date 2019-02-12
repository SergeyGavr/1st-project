let item = document.getElementsByClassName('menu-item'),
    menu = document.querySelector('.menu'),
    li = document.createElement('li'),
    title = document.getElementById('title'),
    del = document.querySelector('.adv'),
    question = document.getElementById('prompt'),
    prom = prompt("Как вы относитесь к технике apple?", "");
    
// Восстановить порядок в меню, добавить пятый пункт
li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт';
menu.insertBefore(item[2], item[1]);
menu.appendChild(li);

// Заменить картинку заднего фона на другую из папки img
document.body.style.background = 'url(img/apple_true.jpg) center no-repeat';
document.body.style.backgroundSize = 'cover';

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
title.innerHTML = 'Мы продаем только подлинную технику Apple';

// Удалить рекламу со страницы
del.remove();

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
question.innerHTML = prom;
