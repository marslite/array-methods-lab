const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];



// Array.prototype.filter()
// 1. Filter the array of inventors into a new array containing only the inventors born in the 1500's

const yob = inventors.filter((inventor) => inventor.year > 1500 && inventor.year < 1600);
console.log(yob);

// Array.prototype.map()
// 2. Map the array of the inventors into a new array containing objects with just the first and last names as properties
// Hint:  Return a new object literal from the callback (don't mutate the object being passed in to map)


const firstAndLast = inventors.map(function(inventor){
    const first = inventor.first;
    const last = inventor.last;
    return {first, last }
})

console.log(firstAndLast);

// Array.prototype.sort()
// 3. Sort the inventors by birth date (year property), in ascending order
const inventorsAge = inventors.map(function(age){
    return[age.year];
})

// const sortedAge = inventors.sort();
const sortedAge = inventorsAge.sort();
console.log(sortedAge);

// Array.prototype.find()
// 4. Find the inventor object with the first name of 'Ada'

const findAda = inventors.find((investor) => investor.first === 'Ada');
console.log(findAda);

// Array.prototype.reduce()
// 5. How many years did all the inventors live?

const yearsInt = inventorsAge.map(value => parseInt(value));
console.log(yearsInt); 

const yearsLived = yearsInt.reduce((accumulator,item) => {
    return accumulator + item;
},0);

console.log(yearsLived)

//Checking if the sum given by yearsLived is correct
let summ = 0;
const sum = yearsInt.forEach(function(item){
    summ += item;
});
console.log(summ);


const people = [
    'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul',
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David',
    'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana',
    'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar',
    'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric',
    'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell',
    'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph',
    'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank',
    'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony',
    'Blake, William'
  ];
  
  // Array.prototype.map()
  // 6. Map the people array such that the new array consists of strings with the names formatted as "First Last", e.g., "Becker, Carl" should be mapped to "Carl Becker".
  // Hint: As a start, consider using the String.prototype.split method to "split" the string using ', ' as the separator


const peopleSplit = people.map(item => item.split(","));
const mapPeople = peopleSplit.map(item => item[1] + " " + item[0]);
console.log(mapPeople);
  
  

const data = [
    'car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van',
    'bike', 'walk', 'car', 'van', 'car', 'truck'
  ];
  
  // Array.prototype.reduce()
  // 7. Count the number of instances for each of the data items. The reduce should return an object where the keys are 'car', 'truck', etc. and the values are the count.
  // Hint: Since you want to return an object, be sure to pass an empty {} for the initial value of the "accumulator".

  const mapItems = data.reduce(function(accumulator,value){
    //at first it won't find anything inside but after the second or third iteration
    //it will able to find values of the same type within the accumulator and so it will increase the count
    if (value in accumulator){
        accumulator[value]++
    }else{
        //here it adds into the accumulator the value with 1 starting occurence
        accumulator[value] = 1;
    }
    //finally the accumulator  object has been filled with all the possible  individual accumulator for each value{car: 5}
    return accumulator;
  },{}) //here the {} is the empty object that is passed to the acculumator.

  console.log(mapItems);


  const devs = [
    { name: 'Wes', year: 1988 },
    { name: 'Kait', year: 1986 },
    { name: 'Irv', year: 1970 },
    { name: 'Lux', year: 2015 }
  ];
  
  // Array.prototype.some()
  // 8. Check if at least one person is 19 or older?
  // Hint: To get today's year, use the getFullYear method of new Date(), i.e., new Date().getFullYear()
  const todayDate = new Date().getFullYear();
  const is19 = devs.some((dev) => (todayDate - dev.year) > 19 || (todayDate - dev.year) === 19);
  console.log(is19);

  //Displaying all the devs full age
  devs.forEach(function(age){
    console.log(todayDate - age.year);
  })


  
