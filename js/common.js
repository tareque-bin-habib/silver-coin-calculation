function inputField(inputId) {
    const getInputId = document.getElementById(inputId);
    const getInputIdValueString = getInputId.value;
    const getInputIdValue = parseFloat(getInputIdValueString);
    return getInputIdValue;
}

function GetAmount(amountId) {
    const getAmountId = document.getElementById(amountId);
    const getAmountIdValueString = getAmountId.innerText;
    const getAmountIdValue = parseFloat(getAmountIdValueString);
    return getAmountIdValue;
}
function setValue(oldAmount, newAmount) {
    const getSetValueId = document.getElementById(oldAmount);
    getSetValueId.innerText = newAmount;
}