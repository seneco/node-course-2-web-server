console.log('Starting app');

setTimeout(() => {
    console.log('Inside the Callback');
}, 2000);


setTimeout(() => {
    console.log("Second Callback");
}, 0);

console.log('Finishing up');