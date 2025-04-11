/*
შექმენით მარტივი ფორმების სისტემა კლასების ან კონსტრუქტორი ფუნქციების გამოყენებით:

1. შექმენით კლასი ან კონსტრუქტორი ფუნქცია სახელად 'Shape' შემდეგი თვისებებით:
   - name (string)
   - color (string)
   - getInfo() მეთოდი, რომელიც აბრუნებს სტრიქონს: "This is a {name} and its color is {color}"

2. შექმენით კლასი ან კონსტრუქტორი ფუნქცია 'Circle', რომელიც მემკვიდრეობით იღებს 'Shape'-დან და დაამატებს:
   - radius (number)
   - getArea() მეთოდი, რომელიც გამოითვლის წრის ფართობს (π * radius^2)
   - getInfo() მეთოდი, რომელიც ჩაანაცვლებს მშობლის მეთოდს და დაამატებს რადიუსის ინფორმაციას:
     "This is a {name} and its color is {color}. It has a radius of {radius}"

3. შექმენით კლასი ან კონსტრუქტორი ფუნქცია 'Rectangle', რომელიც მემკვიდრეობით იღებს 'Shape'-დან და დაამატებს:
   - width (number)
   - height (number)
   - getArea() მეთოდი, რომელიც გამოითვლის მართკუთხედის ფართობს (width * height)
   - getInfo() მეთოდი, რომელიც ჩაანაცვლებს მშობლის მეთოდს და დაამატებს ზომების ინფორმაციას:
     "This is a {name} and its color is {color}. It has width {width} and height {height}"

მოთხოვნები:
- უნდა გამოიყენოთ კლასები (class) ან კონსტრუქტორი ფუნქციები პროტოტიპებით
- მემკვიდრეობითობა უნდა იყოს სწორად რეალიზებული

π (პი) მნიშვნელობისთვის შეგიძლიათ გამოიყენოთ Math.PI
*/


class Shape {
    constructor(name, color) 
    {
       this.name=name;
       this.color=color;
    }

  getInfo() 
  {
    return `This is a ${this.name} and its color is ${this.color}`;
  }
}


class Circle extends Shape {
  constructor(name, color, radius) 
  {
    super(name, color);
    this.radius = radius;
  }

  getArea() 
  {
    return Math.PI * this.radius * 2;
  }

  getInfo() 
  {
    return `This is a ${this.name} and its color is ${this.color}. It has a radius of ${this.radius}`;
  }
}


class Rectangle extends Shape {
  constructor(name, color, width, height) {
    super(name, color);
    this.width=width;
    this.height=height;
  }

  getArea() 
  {
    return this.width*this.height;
  }

  getInfo() 
  {
    return `This is a ${this.name} and its color is ${this.color}. It has width ${this.width} and height ${this.height}`;
  }
}


const circle = new Circle("circle", "red", 5);
const rectangle = new Rectangle("rectangle", "blue", 4, 6);

console.log(circle.getInfo());
console.log(rectangle.getInfo());
console.log(circle.getArea());
console.log(rectangle.getArea());






