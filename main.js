function randomElement (array) {
    let element = '';
    const randomIndex = Math.floor(Math.random() * array.length);
    element = array[randomIndex];
    console.log(element);
    return element;
}

randomElement([1, 12, 'Kyiv', 43, 5, 'Lviv', 23, 7, 8, 'Dnipro']);



