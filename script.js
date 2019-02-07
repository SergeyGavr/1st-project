let money = +prompt("Ваш бюджет на месяц?");
let time = prompt("Введите дату в формате YYYY-MM-DD");

let answ_1 = prompt("Введите обязательную статью расходов в этом месяце");
let resp_1 = +prompt("Во сколько обойдется?");
let answ_2 = prompt("Введите обязательную статью расходов в этом месяце");
let resp_2 = +prompt("Во сколько обойдется?");

let appData = {
    moneyData : money,
    timeData : time,
    expences : {
        answ_1 : resp_1,
        answ_2 : resp_2
    },
    optionalExpenses : {

    },
    income : [],
    savings: false
};
alert("Ваш бюджет на 1 день: " + ((money - resp_1 - resp_2) / 30).toFixed(2) + "руб.");