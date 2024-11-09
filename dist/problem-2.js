"use strict";
{
    // ===================================
    const removeDuplicates = (numbers) => {
        const uniqueNumbers = [];
        for (let i = 0; i < numbers.length; i++) {
            if (!uniqueNumbers.includes(numbers[i])) {
                uniqueNumbers.push(numbers[i]);
            }
        }
        return uniqueNumbers;
    };
    console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
    // ===================================
}
