const obj = new Object();
obj.prop1 = "value1";
obj.prop2 = "value2";
obj.prop3 = "value3";
for (let key in obj) {
  if (Object.prototype.hasOwnProperty.call(obj, key)) {
    Object.defineProperty(obj, key, {
      writable: false,
      enumerable: true,
      configurable: false,
    });
  }
}
delete obj.prop1;
obj.prop1 = "HI";
console.log(Object.keys(obj));
console.log(Object.values(obj));
console.log(obj.hasOwnProperty("prop1"));
