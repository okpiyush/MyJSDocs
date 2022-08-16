let names = ['messi', 'Ronaldo', 'Neymar'];
for (let i = 0; i < names.length; i++) {
    console.log(`Hello ${names[i]}\n`);
};
for (let name of names) {
    console.log(`${name}\n`)
}