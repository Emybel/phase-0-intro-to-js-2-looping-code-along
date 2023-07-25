
/* const gifts = ["teddy bear", "drone", "doll"];

function wrapGifts(gifts) {
    for (let i = 0; i < gifts.length; i++) {
        console.log(`Wrapped ${gifts[i]} and added a bow!`);
        
    }

return gifts;
}
wrapGifts(gifts); */
const names = ["Guadalupe", "Ollie", "Aki"]
function writeCards(names,event){
    const eventMessages = []
    for (let i=0; i < names.length; i++){
        eventMessages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return eventMessages
}
writeCards(names,"surprise")

function countDown(number){
    while (0 <= number){
        console.log(number)
        number--
    }
}
countDown(10)