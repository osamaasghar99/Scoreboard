let homeScore = document.getElementById("scHome")
let guestScore = document.getElementById("scGuest")


let count = 0
let count1 = 0

function h1P(){
     count += 1
    scHome.textContent = count
}
function h2P(){
    count += 2
    scHome.textContent = count 
}
function h3P(){
    count += 3
    scHome.textContent = count 
}
function g1P(){
     count1 += 1
    scGuest.textContent = count1
}
function g2P(){
    count1 += 2 
    scGuest.textContent = count1 
}
function g3P(){
    count1 += 3
    scGuest.textContent = count1 
}