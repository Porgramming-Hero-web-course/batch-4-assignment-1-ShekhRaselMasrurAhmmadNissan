# The significance of union and intersection types in Typescript.

Union Type and Intersection types are very important features in TypeScript that help ensure the data type safety in the code. It also decrease the error count too.
**1. Union Type**

1.  A variable with union type works as **OR OPERATOR**. Either this or that type. If the type does not appears in either of them then the compiler throws an error.
    **Example**

    ```tsx
    type User = {
    	name: string;
    	email: string;
    	gender: 'Male' | 'Female';
    	bloodGroup: 'A+' | 'A-' | 'B+' | 'B-' | 'O+' | 'O-' | 'AB+' | 'AB-';
    };

    const newUser: User = {
    	name: 'Shekh Rasel',
    	email: 'rasel@gmail.com',
    	gender: 'Male',
    	bloodGroup: 'B+',
    };
    ```

**2. Intersection Type**

1.  A variable with Intersection type works as **AND OPERATOR**. It should contain all the properties of the mentioned type to be successful. If one of the properties is missing then the compiler will throw an error.
    **Example:**

    ```tsx
    type FrontendDeveloper = {
    	skills: string[];
    	designation1: 'Frontend Developer';
    };
    type BackendDeveloper = {
    	skills: string[];
    	designation2: 'Backend Developer';
    };

    type FullStackDeveloper = FrontendDeveloper & BackendDeveloper;
    const anotherDeveloper: FullStackDeveloper = {
    	skills: ['JavaScript', 'TypeScript'],
    	designation1: 'Frontend Developer',
    	designation2: 'Backend Developer',
    };
    ```
