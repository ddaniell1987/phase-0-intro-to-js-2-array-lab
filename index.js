const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    cats.push(name);
}
function destructivelyPrependCat(name) {
    cats.unshift(name);
}
function destructivelyRemoveLastCat() {
    cats.pop();
}
function destructivelyRemoveFirstCat() {
    cats.shift();
}
function appendCat(name) {
    const catsArrayAppend = [...cats, name];
    return catsArrayAppend;
}
function prependCat(name) {
    const catsArrayPrepend = [name, ...cats];
    return catsArrayPrepend;
}
function removeLastCat() {
    const catsArrayRemoveLast = [...cats];
    catsArrayRemoveLast.pop();
    return catsArrayRemoveLast;
}
function removeFirstCat() {
    const catsArrayRemoveFirst = [...cats];
    catsArrayRemoveFirst.shift();
    return catsArrayRemoveFirst;
}