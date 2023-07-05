const _list = new WeakMap();
class Stack {
  constructor() {
    _list.set(this, []);
  }
  push(element) {
    _list.get(this).push(element);
  }
  pop() {
    if (_list.get(this).length === 0) {
      throw new Error("Stack is empty");
    }
    return _list.get(this).pop();
  }
  get count() {
    return _list.get(this).length;
  }
  peek() {
    if (_list.get(this).length === 0) {
      throw new Error("Stack is empty");
    }
    return _list.get(this)[_list.get(this).length - 1];
  }
}

const s = new Stack();
