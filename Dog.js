var chalk =require('chalk');
function Dog(name){
   this.name = name ; 
   this.stomach = [];
}
Dog.prototype.eat = function(Cat){
    this.stomach.push(Cat)
}
Dog.prototype.hello = function(name){
    console.log('hello' + chalk.blue(this.name));
}
module.exports = Dog ; 