const horse = {
    name: "적토마",
    age: 3,
    person: {
        name: "아기사자",
        age: 13,
        sayHello: function () {
            console.log('Hi! My name is ' + this.name + ' and I am ' + this.age + ' years old.');
        }
    },

    sayHello: function () {
        console.log('Hi! My name is ' + this.name + ' and I am ' + this.age + ' years old.');
    }
};

horse.sayHello();
horse.person.sayHello();