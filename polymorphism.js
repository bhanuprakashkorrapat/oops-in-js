function HtmlElement() {
  this.click = function () {
    console.log("Clicked");
  };
}

HtmlElement.prototype.focus = function () {
  console.log("Focused");
};

function extend(Chaild, Parent) {
  Chaild.prototype = new Parent();
  Chaild.prototype.constructor = Chaild;
}

function HtmlSelectElement(arg = []) {
  this.items = arg;
  this.addItem = function (value) {
    this.items.push(value);
  };
  this.removeItem = function (value) {
    let index = this.items.indexOf(value);
    if (index !== -1) {
      this.items.splice(index, 1);
    }
  };
  this.render = function () {
    return `<select>${this.items
      .map(
        (item) => `
    <option>${item}</option>`
      )
      .join("")}
  </select>`;
  };
}

extend(HtmlSelectElement, HtmlElement);

function HtmlImgElement(src) {
  this.src = src;
  this.render = function () {
    return `<img src='${this.src}' />`;
  };
}

extend(HtmlImgElement, HtmlElement);

const elements = [
  new HtmlSelectElement([1, 2, 3, 4]),
  new HtmlImgElement("https://"),
];

for (const element of elements) {
  console.log(element.render());
}
