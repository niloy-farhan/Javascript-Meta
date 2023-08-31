// class Animal { /* ...class code here... */ }
//
// var myDog = Object.create(Animal)
//
// console.log (Animal)
//
// class Animal2 {}
//
// var myDog2 = new Animal2();
//
// console.log(Animal2);
//
//
// class Animal3 {}
//
// class Bird extends Animal {};
//
// class Eagle extends Bird {};
//
// const bicycle = {
//     bell: function () {
//         return "Ring, Ring! Watch out please!";
//     }
// }
//
// const door = {
//     bell: function () {
//         return "Ring! ring! Come here please!";
//     }
// }
//
// function ringTheBell(thing) {
//     console.log(thing.bell());
// }
//
//
// ringTheBell(door);
// ringTheBell(bicycle);
//
//
// "abc".concat("def");
//
// ["abc"].concat(["def"]);
//
// ["]abc"] + ["def";];


class Taste {
    good_taste () {
        console.log("Yammi!")
    }

    bad_taste() {
        console.log("Yaak!")
    }
}

class Beef extends Taste {
    good_taste() {
        super.good_taste();
        console.log("Meat > Everything")
    }
}

class Vege extends Taste {
    bad_taste() {
        super.bad_taste();

    }
}

const beefDish = new Beef();
const vegeDish = new Vege();

beefDish.good_taste(); // Outputs: Yammi! Meat > Everything
vegeDish.bad_taste();  // Outputs: Yaak!