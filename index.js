// document.getElementById("count-el").innerText = 6

let countEl = document.getElementById("count-el")

let welcomeEl = document.getElementById("welcome-el")

let counting = 0

console.log(counting)

function increment() {
    counting = counting + 1

    countEl.innerText = counting
    console.log(counting)

}

function save() {
    

    
    console.log(counting)
    

}



function record() {
    let countStr = counting + " -  "
    welcomeEl.textContent += countStr
    counting = 0
    countEl.textContent = 0
}