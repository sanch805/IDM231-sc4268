console.log('Hello World')

function calculateArea(width, height){
    const my_area = width * height
    return width * height;
}

    let my_area = calculateArea(5, 10)
    console.log(my_area);

    let area = calculateArea(8, 12)
    console.log(area);

    let total_area = calculateArea(3, 7)
    console.log(total_area);


    console.log(calculateArea(5, 11))


//function greetPerson(name){
//  console.log(`Hello, ${name}! Welcome!`)
//}

const greetPerson = name => {
    console.log(`Hello, ${name}! Welcome!`);
}

greetPerson('Jane')
greetPerson('Harry')
greetPerson('John')

const table = {
  type: 'billiards',
  solids: 8,
  stripes: 7,
  games: ['8-Ball', '9-Ball', 'Straight']
};

console.log(table.games[1]);


const one = 1;

function won(one) {
  const two = one;
  console.log('two', two)
  return two;
}

const three = one;
const four = won();

console.log(four);

for (let i = 0; i < 10; i++) {
  console.log(i);
}

const my_sign = [
  {
    sign_name: 'Virgo',
    price: 2000,
  },
  {
    sign_name: 'Leo',
    price: 3500,
  },
  {
    sign_name: 'Libra',
    price: 8000,
  }
]

let current_sign = 'Virgo';

function get_sign_details(selected_sign){
  my_sign.forEach((sign) => {
    if(sign.sign_name === selected_sign)
      console.group('Get Sign Details');
    console.log(sign.sign_name);
    console.log(sign.price);
    //console.log(sign)
  });
}

get_sign_details(current_sign);

console.log(my_sign)
console.table(my_sign)