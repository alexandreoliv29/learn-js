const numbers = [2, 3, 4, 2, 6, 1, 7, 4];
console.log(findDuplicate(numbers)); // Deve exibir 2

const otherNumbers = [1, 2, 3, 4, 5];
console.log(findDuplicate(otherNumbers)); // Deve exibir undefined


function findDuplicate(numbers) {
    const numberSet = new Set();

    for (let i = 0; i < numbers.length; i++) {
        const currentNumber = numbers[i];

        if (numberSet.has(currentNumber)) {
            return currentNumber;
        }

        numberSet.add(currentNumber);
    }

    return undefined;
}