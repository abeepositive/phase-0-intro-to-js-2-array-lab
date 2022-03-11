const cats = ["Milo", "Otis", "Garfield"];
let addcat = [];

function destructivelyAppendCat(name) {
    return cats.push(name);
}

function destructivelyPrependCat(name) {
    return cats.unshift(name);
}

function destructivelyRemoveLastCat(name) {
    return cats.pop();
}

function destructivelyRemoveFirstCat(name) {
    return cats.shift();
}

function appendCat(name) {
    return addcat = [...cats, name];
}

function prependCat(name) {
    return addcat = [name, ...cats];
}

function removeLastCat(name) {
    return cats.slice(0,-1);
}

function removeFirstCat(name) {
    return cats.slice(1);
}