{
	// ====================================

	const getProperty = <T, K extends keyof T>(
		obj: T,
		propertyName: K
	): T[K] => {
		return obj[propertyName];
	};

	const person = { name: 'Alice', age: 30 };
	console.log(getProperty(person, 'name'));

	// ====================================
}
