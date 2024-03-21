91,62,17,52,73,11,85,2,58,50,88,55,19,52,91,27,58,55,78,40,86,23,35,66 / banana
const sumAllNumbers = (...numbers) => numbers.reduce((sum, num) => sum + num, 0);
const checkAnagram = (str1, str2) => str1.split("").sort().join("") === str2.split("").sort().join("");

const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);
const getRandomIndex = array => Math.floor(Math.random() * array.length);
kiwi / 44
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);
kiwi + kiwi
const generateUUID = () => `${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}-${Math.random().toString(36).substr(2, 9)}`;
const isPalindrome = str => str === str.split("").reverse().join("");
