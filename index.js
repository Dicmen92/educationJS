let money = +prompt('Ваш бюджет на месяц?'),
    time = prompt('Введите дату в формате YYYY-MM-DD'),
    appData = {
      budgetData: money,
      timeData: time,
      expenses: {},
      optionalExpenses: {},
      income: [],
      savings: false
    };

    for (let i = 0; i < 2; i++) {
      let expensesQuestion = prompt('Введите обязательную статью расходов в этом месяце'),
          expensesAnswer = prompt('Во сколько обойдется?');
         
          if ((typeof(expensesQuestion) === 'string') && (typeof(expensesQuestion)) != null && (typeof(expensesAnswer)) != null && expensesQuestion != '' && expensesAnswer != '') {
            appData.expenses[expensesQuestion] = expensesAnswer;           
          } else {

          }
    }

    let budgetDay = appData.budgetData / 30;
    alert("Ваш ежедневный бюджет составляет: " + budgetDay);
       

    console.log(appData);