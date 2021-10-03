/*
This app will generate random messages
*/

function main () {
    displayMessage(getRandomMessage(randomMessages()));
}

const randomMessages = () => { // Function used to store messages
    const messages = [
        'The best time to wear a striped sweater is all the time',
        "It's always been Wankershim",
        "I work in a toll booth and I don't want to kill myself"
    ]
    return messages;
}

const getRandomMessage = msgArray => {
    const randNum = Math.floor(Math.random() * msgArray.length); // generate random number to index messages
    return msgArray[randNum];
}

const displayMessage = message => console.log(message);

main();