// Car.prototype.name = 'BMW'
// Car.prototype.lang = 4900
// Car.prototype.heigth = 1400
Car.prototype={
    name: 'BMW',
    lang: 4900,
    height: 1400
}

function Car(owner,color){
    this.owner = owner
    this.color = color
}

var car = new Car('浪哥','red')
var car2 = new Car('但总','black')

