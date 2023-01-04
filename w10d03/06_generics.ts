interface Container<T, M = number> {
  name: string;
  contents: T;
  anotherKey?: M;
}

const numContainer: Container<number> = {
  name: 'num container',
  contents: 42
};

const strContainer: Container<string, boolean> = {
  name: 'str container',
  contents: 'jello world'
};
