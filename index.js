const MyStack = () => {
  const storage = {};
  let index = 0;

  const push = name => {
    storage[index] = name;
    index ++;
    return;
  };

  const print = () => {
    console.log(storage);
    return;
  };

  const pop = () => {
    delete storage[index-1];
    index --;
    return;
  };

  const size = () => index;

  return { push, print, pop, size };
};

const stack = MyStack();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push(4);
stack.print();
stack.print();
console.log(stack.size());

