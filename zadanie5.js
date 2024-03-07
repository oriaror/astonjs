//Сортировка пузырьком;

// Сортировка выбором;

// Циклическая сортировка;

// Быстрая сортировка;

const person = {
  name: "Person",
  logInfo() {
    console.log(`Hello ${this.name}`);
  },
};

const anotherPerson = {
  __proto__: person,
  name: "anotherPerson",
};

person.logInfo();
anotherPerson.logInfo();
const SuperPerson = class {
  constructor(name) {
    this.name = name;
  }
  get() {
    return this.name;
  }
  set(value) {
    this.name = value;
  }
};

const man = new SuperPerson("John");
console.log(man.get());
man.set("Don");
console.log(man.get());

const AnotherSuper = class extends SuperPerson {
  constructor(name) {
    super(name);
  }
};

const women = new AnotherSuper("Mia");
console.log(women.get());
women.set("Liya");
console.log(women.get());

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const arr1 = [1, 2, 3, 5, 6, 7, 8, 9];
const total = 13;

const firstSum = (arr, total) => {
  const sum = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] + arr[j] === total) {
        sum.push(arr[i]);
        sum.push(arr[j]);
      }
    }
  }
  return sum.slice(0, 2);
};

console.log(firstSum(arr, total));
console.log(firstSum(arr1, total));

//Сложность O(n^2) тк я для каждого i итерируюсь по массиву находя подходящее j