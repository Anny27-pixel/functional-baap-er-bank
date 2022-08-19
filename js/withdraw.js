/*
1. add withdraw button using event handler
2. get withdraw ammount by using getInputFieldValueById function
3. get previous withdraw ammount by using getTextElementValueById function
4. calculate new withdraw total and set the value
4-5. set new withdraw total by using setTextElementValueById function
5. get previous balance total by using getTextElementValueById function
6. calculate new balance total
7. set balance total using setTextElementValueById function
*/


document.getElementById('btn-withdraw').addEventListener('click', function () {
    const newWithdrawAmmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawTotal = getTextElementValueById('withdraw-total');

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmmount;
    setTextElementValueById('withdraw-total', newWithdrawTotal);

    const previousBalanceTotal = getTextElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmmount;
    setTextElementValueById('balance-total', newBalanceTotal);

})