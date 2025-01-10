

function tipCalculator(bill, percentage){
    return (bill * percentage / 100) + bill;

}
function tipArgs(){
    let bill = parseFloat(document.getElementById("bill").value);
    let percentage = parseFloat(document.getElementById("percentage").value);
    

    if (isNaN(bill) || isNaN(percentage) || bill <= 0 || percentage <= 0){
        document.getElementById("resultado").innerHTML = "Please insert a valid number"
        return;
    }
    let total = tipCalculator(bill, percentage);
document.getElementById("resultado").innerHTML = `Total a pagar: R$ ${total.toFixed(2)}`;


}

