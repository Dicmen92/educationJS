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
            expensesAnswer = prompt('Во сколько обойдется?');
           
            if ((typeof(expensesQuestion) === 'string') && (typeof(expensesQuestion)) != null && (typeof(expensesAnswer)) != null && expensesQuestion != '' && expensesAnswer != '') {
              appData.expenses[expensesQuestion] = expensesAnswer;           
            } else {
  
            }
      }
    }

    chooseExpenses();
    
    function detectDayBudget() {
      let budgetDay = (appData.budgetData / 30).toFixed();
      alert("Ваш ежедневный бюджет составляет: " + budgetDay);
    }

    detectDayBudget();

    
       

    console.log(appData);