// const user ={};
//     user.name='Tom';
//     user.age =16;
const user ={
   name: 'tom',
   age: 16,
   logUser: function(){
    console.log('Имя: ' + this.name + "вoзраст: " + this.age)
}
   
}  

const animal={
    name: 'Felix',
    age:3,
    color:'white',
    type:'cat',
    logAnimal:function(){
        console.log('имя: '+ this.name+' возраст: '+ this.age + ' цвет: ' + this.color + ' тип: '+ this.type)
    }
}
animal.logAnimal()
const car={
    brand: 'BMW',
    color: 'white',
    power: '190 horsepower',
    engine: 'B48B20P',
    price: '54052,96$',
    logCar:function(){
       console.log('Марка: '+ this.brand+' Цвет: '+this.color+' Мощность: '+this.power+' двигатель: '+this.engine+' Цена: '+this.price )
    }
  }
car.logCar()


    