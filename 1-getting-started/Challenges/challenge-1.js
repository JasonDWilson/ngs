const timer = (delay = 1) => {

    setTimeout(() => {
        console.log(`Hello World, ${delay}`);
        delay += 1;
        timer(delay);
    }, delay * 1000);
}
timer();