let homeScore = document.getElementById("count-h")
let guestScore = document.getElementById("count-g")

//increment; not DRY, but new to js
let hCount = 0
let gCount = 0

function incrHomeOne(){
    hCount += 1
    homeScore.textContent = hCount
}

function incrHomeTwo(){
    hCount += 2
    homeScore.textContent = hCount
}

function incrHomeThree(){
    hCount += 3
    homeScore.textContent = hCount
}

function incrGuestOne(){
    gCount += 1
    guestScore.textContent = gCount
}

function incrGuestTwo(){
    gCount += 2
    guestScore.textContent = gCount
}

function incrGuestThree(){
    gCount += 3
    guestScore.textContent = gCount
}

function reset(){
    hCount = 0
    gCount = 0
    homeScore.textContent = hCount
    guestScore.textContent = gCount
}