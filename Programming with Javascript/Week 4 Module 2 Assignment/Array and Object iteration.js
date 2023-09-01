var dairy = ['cheese', 'sour cream', 'milk', 'yogurt', 'ice cream', 'milkshake']

const logDairy = ()=>{
  for(const item of dairy){
    console.log(item);
  }
}

logDairy();


const animal = { canJump: true};

const bird = Object.create(animal);
bird.canFly = true;
bird.hasFeathers = true;

const birdCan = ()=>{
  for(const prop of Object.keys(bird)){//using for of just iterate of object's own properties
    console.log(prop, bird[prop]);
  }
}
birdCan();

function animalCan() {
    for(const prop in bird){//loops over all properties in the object,  including the prototype's properties.
      console.log(prop, bird[prop]);
  }
}
animalCan();