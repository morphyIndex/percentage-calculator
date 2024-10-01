// getting user input
const input = document.getElementById("price")
let inputValue = 0
input.addEventListener("input", () => {
    inputValue = parseFloat(input.value);
    console.log("The input value is ",inputValue)
})

// getting value from selection
const selection = document.getElementById("dropdownOptions")
let selectionValue = 0
selection.addEventListener("change", () => {
    selectionValue = parseInt(selection.value)
    console.log(selectionValue)
})

// calculate function
const button = document.getElementById("button");
const output = document.getElementById("output")

button.addEventListener("click", () => {
    let profit;
    let totalPrice;
    
    if (selectionValue === 10){
        profit = inputValue * 0.1
    } else if (selectionValue === 20) {
        profit = inputValue * 0.2
    } else {
        output.textContent = "Choose a vilid option"
        return
    }

    totalPrice = profit + inputValue
    output.textContent = "The total price is " + totalPrice.toFixed(2)
})