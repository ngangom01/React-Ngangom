const MyStack = () => {
  const storage = {};
  let index = 0;

  const push = num => {
    storage[index] = num;
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
stack.push(10);
stack.push(11);
stack.push(12);
stack.print();
stack.pop();
stack.print();
console.log(stack.size());
