{
	// ===================================
	const sumArray = (numbers: number[]): number => {
		const sum = numbers.reduce((prev, curr) => prev + curr, 0);
		return sum;
	};

	console.log(sumArray([1, 2, 3, 4, 5]));

	// ===================================
}
