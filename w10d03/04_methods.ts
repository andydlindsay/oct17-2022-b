interface Icecream {
  flavour: string;
  contents: number;
  toppings: boolean;
  refill: (newContents: number) => boolean;
}

const iceCream: Icecream = {
  flavour: 'chocolate and mint',
  contents: 410,
  toppings: false,
  refill: (newContents) => { return false; }
}