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


const dashboard = document.querySelector('.dashboard');

// Create inventors div content
const inventorsDiv = document.createElement('div');
inventorsDiv.classList.add('data');
inventorsDiv.id ='inventors';
dashboard.appendChild(inventorsDiv);

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


const fifteensDiv = document.createElement('div');
fifteensDiv.classList.add('data');
fifteensDiv.id ='fifteens';
dashboard.appendChild(fifteensDiv);
fifteensDiv.appendChild(createTable(inventors1500));

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
inventorsSorted = inventors.sort((first,last)=>{return first.year -last.year});

const sortedDiv = document.createElement('div');
sortedDiv.classList.add('data');
sortedDiv.id ='sorted';
dashboard.appendChild(sortedDiv);
sortedDiv.appendChild(createTable(inventorsSorted));

// Array.prototype.reduce()
// 4. How many years did all the inventors live?

const howMany = inventors.reduce((total, current)=>{
    let currentYears = current.passed - current.year;
    return total+currentYears;
},0);

const howManyDiv = document.createElement('div');
howManyDiv.classList.add('data');
howManyDiv.id ='how-many';
dashboard.appendChild(howManyDiv);

howManyDiv.innerHTML=`<span>The inventors lived ${howMany} years.</span>`;

// 5. Sort the inventors by years lived
inventorsYearsSorted = inventors.sort((first,last)=>{
    let firstAge = first.passed - first.year;
    let lastAge = last.passed - last.year;
    return firstAge -lastAge;
});

const sortedYearsDiv = document.createElement('div');
sortedYearsDiv.classList.add('data');
sortedYearsDiv.id ='years-sorted';
dashboard.appendChild(sortedYearsDiv);
sortedYearsDiv.appendChild(createTable(inventorsYearsSorted));

// 7. sort Exercise
// Sort the people alphabetically by last name

const peopleSorted = people.sort((first,next)=>{
    return first.split(", ")[0]-next.split(", ")[0];
});


const peopleSortedDiv = document.createElement('div');
peopleSortedDiv.classList.add('data');
peopleSortedDiv.id ='people-sorted';
dashboard.appendChild(peopleSortedDiv);

peopleSorted.forEach(person=>{
    let spanElement = document.createElement("span");
    let textNode = document.createTextNode(`${person}`);
    spanElement.appendChild(textNode);
    peopleSortedDiv.appendChild(spanElement);
});

// 8. Reduce Exercise
// Sum up the instances of each of these

const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];


function createTable(arr){
    // assuming all the elements of the array being same type (having same keys)
    // first objects keys will be column headers

    const table = document.createElement('table');
    const tableHeader = table.insertRow(0);
    
    for(let key in arr[0]) {
        let cell = tableHeader.insertCell();
        cell.innerHTML = key;
    }

    arr.forEach(el => {
        let row = table.insertRow();
        for(let key in el) {
            let cell = row.insertCell();
            cell.innerHTML = el[key];
        }
    });
    
        return table;
}