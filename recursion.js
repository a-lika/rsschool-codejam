let tree = {
    "value": 100,
    "left": {
        "value": 90,
        "left": {
            "value": 70
        },
        "right": {
            "value": 99
        }
    },
    "right": {
        "value": 120,
        "left": {
            "value": 110
        },
        "right": {
            "value": 130
        }
    }
};

function recursion(obj) {
    const result = [];
    const treeToArray = (tree, n) => {
        if (result[n]) {
            result[n] = result[n].concat([tree.value]);
        } else {
            result[n] = [tree.value];
        }
        if (tree.left) {
            treeToArray(tree.left, n + 1);
        }
        if (tree.right) {
            treeToArray(tree.right, n + 1);
        }
    };
    treeToArray(obj, 0);
    return result;
};

// [[100], [90, 120], [70,99,110,130]]
