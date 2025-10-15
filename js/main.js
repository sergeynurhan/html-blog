let array = [2, 4, 5, 6];

function find(array, value) {
    result = [];

    array.forEach(element => {
        if (element == value) {
            result[0] = element;
        }
    });

    return result[0] ?? 'That element does not exists in the given array';
}

class Array {
    constructor (array) {
        this.array = array;
    }

    find (value) {
        result = [];

        array.forEach(element => {
            if (element == value) {
                result[0] = element;
            }
        });

        return result[0] ?? 'That element does not exists in the given array';
    }
}

console.log(find(array, 6))