{
	// ===================================

	type Circle = {
		shape: 'circle';
		radius: number;
	};

	type Rectangle = {
		shape: 'rectangle';
		width: number;
		height: number;
	};

	type Shape = Circle | Rectangle;

	const isCircle = (shape: Shape): shape is Circle => {
		return shape?.shape === 'circle';
	};

	const isRectangle = (shape: Shape): shape is Rectangle => {
		return shape?.shape === 'rectangle';
	};

	const calculateShapeArea = (shape: Shape): number => {
		if (isCircle(shape)) {
			const area = Math.PI * Math.pow(shape.radius, 2);
			const areaTwoDecimalPoints = parseFloat(area.toFixed(2));
			return areaTwoDecimalPoints;
		} else if (isRectangle(shape)) {
			const area = shape.width * shape.height;
			const areaTwoDecimalPoints = parseFloat(area.toFixed(2));
			return areaTwoDecimalPoints;
		} else {
			console.log(`Wrong Shape`);
			return 0;
		}
	};

	const circleArea = calculateShapeArea({ shape: 'circle', radius: 5 });
	const rectangleArea = calculateShapeArea({
		shape: 'rectangle',
		width: 4,
		height: 6,
	});

	console.log(circleArea, rectangleArea);

	// ===================================
}
