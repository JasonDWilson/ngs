
let counter = 0;
const timer = delay => {
    let timerInstance = setInterval(() => {
        console.log(`Hello World, ${delay}`);
        counter += 1;
        if(counter % 5 == 0)
        {
            delay += 100;
            timer(delay);
            clearInterval(timerInstance);
        }
    }, delay);
};

timer(100);


