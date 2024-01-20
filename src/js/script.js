const interestRate = 2.2;
const resultElement = document.getElementById('result');
const errorElement = document.querySelector('#error');
const button = document.querySelector('.calculate-button');


function updateSliderValue(field) {
    let sliderValue = document.getElementById(`${field}Slider`).value;
    document.getElementById(`${field}Value`).value = sliderValue;
}

function updateInputValue(field) {
    let inputValue = document.getElementById(`${field}Value`).value;
    document.getElementById(`${field}Slider`).value = inputValue;
}

function calculate() {
    const loanAmount = parseFloat(document.getElementById('loanAmountValue').value);
    const repaymentPeriod = parseFloat(document.getElementById('repaymentPeriodValue').value);
    const dailyRepayment = (loanAmount + (loanAmount * (interestRate / 100) * repaymentPeriod)) / repaymentPeriod;
    const totalRepayment = dailyRepayment * repaymentPeriod;

    if (isNaN(loanAmount) || loanAmount < 1000 || loanAmount > 50000 || isNaN(repaymentPeriod) || repaymentPeriod < 7 || repaymentPeriod > 60) {
        errorElement.textContent = "Please enter valid positive numbers for Loan Amount and Repayment Period.";
        button.disabled = true;
        resultElement.style.display = 'none'; // Hide result block

    } else {
        errorElement.textContent = '';
        button.disabled = false;
        resultElement.style.display = 'block'; // Show result block
        resultElement.innerHTML = '<h3>Results:</h3>' +
            '<p>Daily Repayment: $' + dailyRepayment.toFixed(2) + '</p>' +
            '<p>Total Repayment: $' + totalRepayment.toFixed(2) + '</p>';
    }
}