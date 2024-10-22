const btnEl = document.getElementById("calculate")
const billInput = document.getElementById("bill")
const tipInput = document.getElementById("tip")
const totalSpan = document.getElementById("total");
const tipSpan = document.getElementById("tipAmount");

function calculateTotal() {
    const billValue = billInput.value;
    const tipValue = tipInput.value;
    const tipDollar = billValue * ((tipValue / 100));
    const totalValue = billValue * (1 + (tipValue / 100));
    totalSpan.innerText = totalValue.toFixed(2);
    tipSpan.innerText = tipDollar.toFixed(2);
}

btnEl.addEventListener("click", calculateTotal)