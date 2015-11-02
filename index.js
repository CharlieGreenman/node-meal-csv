var prompt = require('prompt');
var stringify = require('csv-stringify');
var fs = require('fs');


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
    input = [result.breakfast, result.lunch, result.dinner];

    console.log('  Breakfast: ' + result.breakfast);
    console.log('  Lunch: ' + result.lunch);
    console.log('  Dinner: ' + result.dinner);
    stringify(input, function(err, output){
      fs.writeFile('food.csv', output)
    });
});

function onErr(err) {
    console.log(err);
    return 1;
}