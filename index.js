var prompt = require('prompt');

var properties = [
    {
        name: "breakfast",
        description: "What would you like for breakfast"
    },
    {
        name: "lunch",
        description: "What would you like for lunch"
    },
    {
        name: "dinner",
        description: "What would you like for Dinner"
    }
];

prompt.start();

prompt.get(properties, function (err, result) {
    if (err) { return onErr(err); }
    console.log('  Breakfast: ' + result.breakfast);
    console.log('  Lunch: ' + result.lunch);
    console.log('  Dinner: ' + result.dinner);
});

function onErr(err) {
    console.log(err);
    return 1;
}