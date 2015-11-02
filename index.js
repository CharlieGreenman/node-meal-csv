var prompt = require('prompt');
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
    input = 
    [`Breakfast, ${result.breakfast}
Lunch, ${result.lunch} 
Dinner, ${result.dinner}`];

    console.log('  Breakfast: ' + result.breakfast);
    console.log('  Lunch: ' + result.lunch);
    console.log('  Dinner: ' + result.dinner);
    fs.writeFile('food.csv', input);
    console.log('meal.csv file has been created, rejoice in your glory');        
    
});

function onErr(err) {
    console.log(err);
    return 1;
}