function writeCards(namesArray,event){
    let cardsArray = []
    for (let i = 0; i < namesArray.length; i++) {
        cardsArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${event} gift!`)
    }
    return cardsArray
}
function countDown(num){
    while (num>=0) {
        console.log(num)
        num = num-1
    }
}
