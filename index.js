let money, time;

function start() {
  money = +prompt('Ваш бюджет на месяц?');
  
  while(isNaN(money) || money == '' || money == null) {
    money = +prompt('Ваш бюджет на месяц?');
  }

  time = prompt('Введите дату в формате YYYY-MM-DD');
}

start();


    appData = {
      budgetData: money,
      timeData: time,
      expenses: {},
      optionalExpenses: {},
      income: [],
      savings: false
    };

    function chooseExpenses() {
      for (let i = 0; i < 2; i++) {
        let expensesQuestion = prompt('Введите обязательную статью расходов в этом месяце'),
            expensesAnswer = +prompt('Во сколько обойдется?');
           
            if ((typeof(expensesQuestion) === 'string') && (typeof(expensesQuestion)) != null && (typeof(expensesAnswer)) != null && expensesQuestion != '' && expensesAnswer != '') {
              appData.expenses[expensesQuestion] = expensesAnswer;           
            } else {
  
            }
      }
    }

    chooseExpenses();
    
    function detectDayBudget() {
      appData.budgetDay = (appData.budgetData / 30).toFixed();
      alert("Ваш ежедневный бюджет составляет: " + appData.budgetDay);
    }

    detectDayBudget();

    function detectLevel() {
      if (appData.budgetDay > 0 && appData.budgetDay < 20000) {
        alert('Ваш заработок в ' + appData.budgetDay + ' считается минимальным')
      } else if (appData.budgetDay >= 20000 && appData.budgetDay < 50000) {
        alert('Ваш заработок в ' + appData.budgetDay + ' считается средним')
      } else if (appData.budgetDay >= 50000) {
        alert('Ваш заработок в ' + appData.budgetDay + ' считается большим')
      } else {
        alert('что-то пошло не так')
      }
    }

    detectLevel();  

    function chooseOptExpenses(){
      for (let i = 0; i < 3; i++) {
        let optionalExpensesAnswer = prompt('Статья необязательных расходов?');

            if ((typeof(optionalExpensesAnswer) === 'string') && (typeof(optionalExpensesAnswer)) != null && optionalExpensesAnswer != '') {
              appData.optionalExpenses[i + 1] = optionalExpensesAnswer;           
            } else {
  
            }
      }
    }

    chooseOptExpenses();

    console.log(appData);
