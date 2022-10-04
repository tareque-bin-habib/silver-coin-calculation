document.getElementById('calculate-button').addEventListener('click', function () {
    const incomeField = inputField('input-income');
    const foodField = inputField('input-food');
    const rentField = inputField('input-rent');
    const clothesField = inputField('input-clothes');
    // Total Expense
    const totalExpense = foodField + rentField + clothesField;
    setValue('total-expence', totalExpense);
    // Balance
    const balance = incomeField - totalExpense;
    setValue('balance', balance);
})

document.getElementById('save-button').addEventListener('click', function () {
    const incomeField = inputField('input-income');
    const savingInput = inputField('saving-input');
    // Saving Amount
    const savingPercentage = savingInput / 100;
    const savingAmount = incomeField * savingPercentage;
    setValue('saving-amount', savingAmount);
    // Remaining Balance
    const oldSavingAmount = GetAmount('saving-amount');
    const newBalance = GetAmount('balance');
    const remaining = newBalance - oldSavingAmount;
    setValue('remaining-balance', remaining);





})