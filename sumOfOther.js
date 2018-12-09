module.exports = function sumOfOther(arr) {
    const sum = arr.reduce((acc, item) => acc + item, 0);
    const array = arr.map(item => sum - item);
    return array;
};
