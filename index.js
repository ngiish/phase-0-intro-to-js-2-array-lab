// Write your solution here!
let cats = [
    "Milo", "Otis", "Garfield"
]
beforeEach(function () {
    cats.length = 0;
  
    cats.push("Milo", "Otis", "Garfield");
  });
function destructivelyAppendCat(name) {
  cats.push(name);
}

module.exports = {
  cats,
  destructivelyAppendCat,
};
function destructivelyPrependCat(name){
    cats.unshift("Bob");
}
module.exports ={
    cats,
    destructivelyPrependCat
}
function destructivelyRemoveLastCat(){
    cats.pop()
}
module.exports ={
    cats,
    destructivelyRemoveLastCat
}
function destructivelyRemoveFirstCat(){
    cats.shift()
}
module.exports = {
    cats,
    destructivelyRemoveFirstCat
}
// function appendCat(name){
//     cats.push("Broom")
// }
// module.exports = {
//     cats,
//     appendCat
// }


function appendCat(name) {
  let newCatsArray = [...cats, "Broom"];
  return newCatsArray;
}

module.exports = {
  cats,
  appendCat,
};
function prependCat(name) {
let newCatsArray =[name, ...cats];
return newCatsArray;
}
module.exports = {
    cats,
    prependCat
}  
function removeLastCat() {
        const newCatsArray = cats.slice(0, -1);
    return newCatsArray;
  }
    module.exports = {
    cats,
    removeLastCat,
  };
  function removeFirstCat() {
    const newCatsArray = cats.slice(1);
return newCatsArray;
}
module.exports = {
cats,
removeFirstCat,
};
