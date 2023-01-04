interface Pet {
  id?: number;
  name: string;
  age: number;
}

const pet: Pet  = {
  id: 1,
  name: 'benji',
  age: 42
};

const newPet: Pet = {} as Pet;
console.log(newPet);
newPet.id = 42;
newPet.name = 'hammy'
