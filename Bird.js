
var chalk = require('chalk');

function Bird(){
    console.log(chalk.red('Cuc..cu'))
}
 Bird.prototype.speak = function(){
     console.log(chalk.red('Cuc..cu'));
 }
 Bird(); 