const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('What is your name? ', (answer1) => {
  

  rl.question('What do you listen to when coding? ', (answer2) => {
    
    rl.question('What is your go-to snack? ', (answer3) => {
    
      rl.question('What is your favorite sport? ', (answer4) => {
    
        rl.question('What is your passion? ', (answer5) => {
            console.log(`${answer1} listens to ${answer2} while coding, he often eats ${answer3} throughout the day, his favorite sport without a doubt is ${answer4}, and his passion ${answer5}.`)
  
            rl.close();
        });
      });
    });
  });
});

