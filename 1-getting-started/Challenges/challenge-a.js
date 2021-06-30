const displayMessageWithDelay = (message,delayInSeconds) => {
    setTimeout(() =>  console.log(`${message} after ${delayInSeconds} seconds`), delayInSeconds * 1000);
};

displayMessageWithDelay('Hello',4);
displayMessageWithDelay('Hello',8);