function sum(a, b) {
    return a + b;
};

module.exports = function make(...arg) {
    const array = [];
    array.push(...arg);
    function toSummarize(...args) {
        if (typeof args[0] !== 'function') {
            array.push(...args);
            return toSummarize;
        }
        return array.reduce(sum, 0);
    };
    return toSummarize;
};
