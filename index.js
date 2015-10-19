var readline = require('readline');

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

rl.setPrompt('YUM> ');
rl.prompt();

rl.question('what do you want to eat for breakfast? ', function(breakfast) {
    console.log('Oh, so your favorite food is ' + breakfast);
    rl.pause()
});

rl.question('what do you want to eat for lunch? ', function(lunch) {
    rl.resume()
    console.log('Oh, so your favorite food is ' + lunch);
    rl.close();
});

rl.question('what do you want to eat for dinner? ', function(dinner) {
    console.log('Oh, so your favorite food is ' + dinner);
    rl.close();
});