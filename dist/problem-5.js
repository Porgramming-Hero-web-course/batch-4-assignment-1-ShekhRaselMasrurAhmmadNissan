"use strict";
{
    // ====================================
    const getProperty = (obj, propertyName) => {
        return obj[propertyName];
    };
    const person = { name: 'Alice', age: 30 };
    console.log(getProperty(person, 'name'));
    // ====================================
}
