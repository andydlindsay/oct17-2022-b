class User {
  constructor(firstName, lastName) {
    this._firstName = firstName;
    this._lastName = lastName;
  }

  get firstName() {
    return this._firstName;
  }

  set firstName(newName) {
    if (newName) {
      this._firstName = newName;
    }
  }
}

const user = new User('alison', 'wonderland');
console.log(user);
console.log(user.firstName);

// user.changeFirstName('bob');
user.firstName = 'bob';
console.log(user.firstName);

// arr.length;