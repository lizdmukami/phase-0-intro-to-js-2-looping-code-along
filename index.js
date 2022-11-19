
const gifts = [];

function writeCards(gifts, surprise) {
    for (let i = 0; i < gifts.length; i++) {
    gifts[i] = `Thank you, ${gifts[i]}, for the wonderful ${surprise} gift!`;
    }
    
    return gifts;
}

    console.log(writeCards(["Guadalupe", "Ollie", "Aki"], "surprise"));


    function countDown(number) {
    
        while (number >= 0) {
            console.log(number--);
            debugger;
        }
    }
        countDown(4)