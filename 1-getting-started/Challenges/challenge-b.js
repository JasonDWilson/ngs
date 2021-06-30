let counter = 0;

const timer = setInterval(() => {
    if(counter < 5){
        counter += 1;
        console.log('Hello World');
    }
    else{
        clearInterval(timer);
        console.log('Done');
    }
}, 1000)
