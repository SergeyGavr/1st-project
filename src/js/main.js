let start = document.getElementById('start'),
    budget = document.querySelector('.budget-value'),
    daybudget = document.querySelector('.daybudget-value'),
    level = document.querySelector('.level-value'),
    expenses = document.querySelector('.expenses-value'),
    optionalexpenses = document.querySelector('.optionalexpenses-value'),
    income = document.querySelector('.income-value'),
    monthsavings = document.querySelector('.monthsavings-value'),
    yearsavings = document.querySelector('.yearsavings-value');
    expenses = document.getElementsByClassName('expenses-item'),
    exp_name_1 = expenses[0],
    exp_price_1 = expenses[1],
    exp_name_2 = expenses[2],
    exp_price_2 = expenses[3],
    button = document.getElementsByTagName('button'),
    appr_1 = button[0],
    appr_2 = button[1],
    count = button[2],
    opt_exp = document.querySelectorAll('.optionalexpenses-item'),
    optExp1 = opt_exp[0],
    optExp2 = opt_exp[1],
    optExp3 = opt_exp[2],
    income = document.querySelector('div.choose-income-label'),
    check = document.querySelector('#savings'),
    sum = document.querySelector('.choose-sum'),
    percent = document.querySelector('.choose-percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelector('.day-value');
