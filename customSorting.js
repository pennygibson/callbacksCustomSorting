//1. sort the array numerically [1, 10, 2, 5, 9] should be [1,2,5,9,10
//Sort numerically and ascending:
var myarray=[1, 10, 2, 5, 9]
myarray.sort(function(a,b){
    return a - b
})

console.log(myarray);
