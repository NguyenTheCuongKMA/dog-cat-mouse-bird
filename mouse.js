function Mouse(){
    name  = 'Mickey' ; 
    color = 'white Black'
    this.dead = false ;
}
Mouse.prototype.dead = function () { 
    this.dead = true ;
}
module.exports = Mouse ; 