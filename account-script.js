let totalAmount = parseFloat(document.getElementById('total-amount').innerText);
console.log(totalAmount);

let totalAmountDeposited = parseFloat(document.getElementById('total-deposit-amount').innerText);
console.log(totalAmount);


document.getElementById('credit-click').addEventListener('click', function () {
    totalAmount += parseFloat(document.getElementById('deposit-field').value);
    console.log(totalAmount);
    document.getElementById('total-amount').innerText = totalAmount;

    totalAmountDeposited += parseFloat(document.getElementById('deposit-field').value);
    document.getElementById('total-deposit-amount').innerText = totalAmountDeposited;
})

let totalAmountWithdrawed = parseFloat(document.getElementById('total-withdraw-amount').innerText);
console.log(totalAmount);


document.getElementById('debit-click').addEventListener('click', function () {
    totalAmount -= parseFloat(document.getElementById('withdrwal-field').value);
    console.log(totalAmount);
    document.getElementById('total-amount').innerText = totalAmount;

    totalAmountWithdrawed += parseFloat(document.getElementById('withdrwal-field').value);
    document.getElementById('total-withdraw-amount').innerText = totalAmountWithdrawed;
})
