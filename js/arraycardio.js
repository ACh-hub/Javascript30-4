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

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

// Create inventors div content
const inventorsDiv = document.getElementById('inventors');
// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
const inventorsMapped = inventors.map(inventor=>`${inventor.first} ${inventor.last}`);

inventorsMapped.forEach(inventor=>{
    let spanElement = document.createElement("span");
    let textNode = document.createTextNode(`${inventor}`);
    spanElement.appendChild(textNode);
    inventorsDiv.appendChild(spanElement);
    
});
// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
inventors1500 = inventors.filter(inventor => (inventor.year>=1500 && inventor.year<1600));

const fifteensDiv = document.getElementById('fifteens');
const fifteensTable = fifteensDiv.appendChild(document.createElement("table"));
const name = document.createElement('th');
name.appendChild(document.createTextNode("Name"));
const birth = document.createElement('th');
birth.appendChild(document.createTextNode("Year of birth"));
const death = document.createElement('th');
death.appendChild(document.createTextNode("Year of death"));
const headerRow= fifteensTable.appendChild(document.createElement('tr'));
headerRow.appendChild(name);
headerRow.appendChild(birth);
headerRow.appendChild(death);

inventors1500.forEach(inventor=>{
    let row= fifteensTable.appendChild(document.createElement('tr'));
    let name = document.createElement('td');
    name.appendChild(document.createTextNode(`${inventor.first} ${inventor.last}`));
    let birth = document.createElement('td')
    birth.appendChild(document.createTextNode(`${inventor.year}`));
    let death = document.createElement('td');
    death.appendChild(document.createTextNode(`${inventor.passed}`));
    row.appendChild(name);
    row.appendChild(birth);
    row.appendChild(death);
});



// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

// 5. Sort the inventors by years lived

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris


// 7. sort Exercise
// Sort the people alphabetically by last name

// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];