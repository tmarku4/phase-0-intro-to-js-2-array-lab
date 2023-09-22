let cats = ["Milo", "Otis", "Garfield"];
function destructivelyAppendCat(catName) {
    cats.push(catName);
  }
  function destructivelyPrependCat(catName) {
    cats.unshift(catName);
  }
  function destructivelyRemoveLastCat() {
    cats.pop();
  }
  function destructivelyRemoveFirstCat() {
    cats.splice(0, 1);
  }
  function appendCat(catName) {
    cats.push(catName);
  }
  constcats = ["Milo", "Otis", "Garfield"];

  function appendCat(name) {
    return [...cats, name];
  }
  constcats = ["Milo", "Otis", "Garfield"];

function prependCat(name) {
  return [name, ...cats];
}
function removeLastCat() {
    const newCats = [...cats];
      newCats.pop();
      return newCats;
  }
  function removeFirstCat() {
    const newCats = [...cats];
      newCats.shift();
      return newCats;
  }