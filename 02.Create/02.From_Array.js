const { Observable } = require('rxjs');

const publisher = Observable.from([1, 2, 3, 4, 5, 6, 7, 8, 9, 0]);
//const publisher = Observable.from('abcdefgh');

publisher.subscribe(
    (val) => {
        console.log(`Value is: ${val}`);
    },
    (err) => {},
    () => {
        console.log('Finilize!');
    }
);