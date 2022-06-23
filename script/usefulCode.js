function randomGenerator(max) {

    var generatedNumber = Math.floor(Math.random() * max) + 1;

    console.log(generatedNumber);
}

export { randomGenerator };