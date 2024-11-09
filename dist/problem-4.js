"use strict";
{
    const isCircle = (shape) => {
        return (shape === null || shape === void 0 ? void 0 : shape.shape) === 'circle';
    };
    const isRectangle = (shape) => {
        return (shape === null || shape === void 0 ? void 0 : shape.shape) === 'rectangle';
    };
    const calculateShapeArea = (shape) => {
        if (isCircle(shape)) {
            const area = Math.PI * Math.pow(shape.radius, 2);
            const areaTwoDecimalPoints = parseFloat(area.toFixed(2));
            return areaTwoDecimalPoints;
        }
        else if (isRectangle(shape)) {
            const area = shape.width * shape.height;
            const areaTwoDecimalPoints = parseFloat(area.toFixed(2));
            return areaTwoDecimalPoints;
        }
        else {
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
