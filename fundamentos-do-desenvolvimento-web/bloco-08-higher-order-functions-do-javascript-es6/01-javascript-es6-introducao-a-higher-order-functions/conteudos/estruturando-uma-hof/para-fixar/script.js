const a = () => console.log(`Acordando!!`);
const b = () => console.log(`Bora tomar café!!`);
const c = () => console.log(`Partiu dormir!!`);

const doingThings = (func) => func();

doingThings(a);
doingThings(b);
doingThings(c);

