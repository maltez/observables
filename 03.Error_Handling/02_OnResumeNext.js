const {Observable: { create }, Observable} = require('rxjs');

const publisher$ = create((observable) => {
    for(let i = 0; i < 2000; i += 100){
            if( i === 400){
                observable.error(new Error('Suddenly!!!!'));
            }
            observable.next(i);
    }
})
.onErrorResumeNext(Observable.of('Error occured'));

const subscriber = publisher$.subscribe(
    (val) => {
        console.log(`Get the value: ${val}`);
    },
    (err) => {
        console.log(`Error appears: ${err.message}`);
    },
    () => {
        console.log('Finalize');
    }
);