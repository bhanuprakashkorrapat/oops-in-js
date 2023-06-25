function Person(name, age, weight) {
  this.name = name;
  this.age = age;
  this.weight = weight;
  this.obj = { name: "x", age: 100, weight: 70 };
  Object.defineProperty(this, "detailsOfaPerson", {
    get: function () {
      return `This person name is ${this.name} and age is ${this.age} and his weight is ${this.weight}`;
    },
  });
  Object.defineProperty(this, "setName", {
    set: function (value) {
      if (typeof value !== "string") {
        throw new Error("Please type a valid name in alphabets");
      }
      this.name = value;
    },
  });
  Object.defineProperty(this, "setAge", {
    set: function (value) {
      if (typeof value !== "number") {
        throw new Error("Please enter valid age");
      }
      this.age = value;
    },
  });
  Object.defineProperty(this, "setWeight", {
    set: function (value) {
      if (typeof value !== "number") {
        throw new Error("Please enter valid weight");
      }
      this.weight = value;
    },
  });
}

const person = new Person("Bhanu", 23, 67);
Object.defineProperty(person, "name", {
  writable: false, // property cannnot be writable/ changable
  enumerable: false, // we cannot see the property in object keys list
  configurable: false, // we cannot delete the property
});

try {
  person.setName = "prakash";
  person.setAge = 20;
  person.setWeight = 70;
} catch (error) {
  console.error(error);
}
console.log(person.detailsOfaPerson);
console.log(person.name);
console.log(person.age);
console.log(person.weight);
console.log(Person.prototype);
