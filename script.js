const displayTip = document.getElementById('tipDisplay')
const displayTotal = document.getElementById('totalDisplay')
const billInput = document.getElementById('bill')
const peopleInput = document.getElementById('people')

let bill = null
let pct = null
let persons = null
// function change(element) {
//  element.style.background = 'red'
//}

function tipBill(element) {
  bill = element.value
  if (bill != null && pct != null && persons != null) {
    display()
  }
}

function por(element) {
  var pctN = element.value.match(/(\d+)/)
  pct = pctN[0]
  if (bill != null && pct != null && persons != null) {
    display()
  }
}

function per(element) {
  if (element.value == 0) {
    alert('nao pode ser 0')
  } else {
    persons = element.value
    if (bill != null && pct != null && persons != null) {
      display()
    }
  }
}

function display() {
  var tip = ((bill / 100) * pct) / persons
  displayTip.innerText = '$' + tip.toFixed(2)
  displayTotal.innerText = '$' + (bill / persons + tip).toFixed(2)
}

function reset() {
  bill = null
  pct = null
  persons = null
  displayTip.innerText = '$0.00'
  displayTotal.innerText = '$0.00'
  billInput.value = null
  peopleInput.value = null
}
