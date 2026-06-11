// rest, spread

const girls=['Anna', 'Rose', 'Alexa', 'Kim', 'Naomi']
console.log(girls[0])

const [,,a,b]=girls
console.log(a,b);

const boys=['Jack', 'Bill', 'Steve', 'Marc']

const mixed=[...girls, 'Aizaada', ...boys]
console.log(mixed);

const letters=[...a]
console.log(letters);
