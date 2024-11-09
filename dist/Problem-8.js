"use strict";
{
    // ===============================================
    const validateKeys = (obj, keys) => {
        const keysOfObj = Object.keys(obj);
        for (let i = 0; i < keys.length; i++) {
            if (!keysOfObj.includes(keys[i])) {
                return false;
            }
        }
        return true;
    };
    const person = { name: 'Alice', age: 25, email: 'alice@example.com' };
    console.log(validateKeys(person, ['name', 'age']));
    // ===============================================
}
