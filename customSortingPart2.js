
//first sort it by name alphabetically
//if names are the same sort by age decending

var students = [
  { id: 1, name: "bruce",    age: 40 },
  { id: 2, name: "zoidberg", age: 22 },
  { id: 3, name: "alex",     age: 22 },
  { id: 4, name: "alex",     age: 30 }
];


//function inside needs to return a number

var orderedList = students.sort(function(a,b){
  if(a.name === b.name){
    return b.age - a.age;
  }
  return a.name < b.name ? -1 : 1;

})
console.log(orderedList);
