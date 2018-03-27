const {Observable: { create }} = require('rxjs');

const getRandom = () => {
    return Math.round((Math.random()*100));
}

const publisher$ = create((observable) => {
    for(let i = 0; i < 2000; i += 100){
        setTimeout(() => {
            observable.next(getRandom());
        }, i);
    }

    setTimeout(() => {
        observable.complete();
    }, 2100);
});

const subscriber1 = publisher$.subscribe(
    (val) => {
        console.log(`[SUB1]: Get value: ${val}`);
    },
    (err) => console.log(`Error appears`),
    () => {
        console.log(`[SUB1] Observable completed!`);
    }
);

setTimeout(() => {
    subscriber1.unsubscribe();
}, 500);

setTimeout(() => {
    publisher$.subscribe(
        (val) => {
            console.log(`[SUB2]:Get value: ${val}`);
        },
        (err) => console.log(`Error appears`),
        () => {
            console.log(`[SUB2] Observable completed!`);
        }
    );
}, 2000); 


