const gfName = "MrsRandom";
const gfName2 = "MrsRandom2";
const gfName3 = "MrsRandom3";

export const generateLovePercent = () => {
    return `${~~(Math.random() * 100)}%`
    //return `${Math.floor(Math.random() * 100)}%`
}

//module.exports = gfName;
export default gfName;
export {gfName2, gfName3}
