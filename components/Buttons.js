const cubicBezierPoints = [
	{ x: 200, y: 400, active: false },
	{ x: 200, y: 100, active: false },
	{ x: 600, y: 100, active: false },
	{ x: 600, y: 400, active: false },
];

const quadraticBezierPoints = [
	{ x: 200, y: 400, active: false },
	{ x: 400, y: 100, active: false },
	{ x: 600, y: 400, active: false },
];

const Buttons = ({setControlPoints, setAnimate, controlPoints, animate}) => {
	return (
		<div className={`w-96 flex justify-between h-10`}>
			<button onClick={() => setControlPoints(quadraticBezierPoints)} className={`border-2 rounded-md px-4 text-lg text-white ${controlPoints.length === 3 && 'border-green-400'}`}>
        Quadratic Bézier
			</button>
			<button onClick={() => setControlPoints(cubicBezierPoints)} className={`border-2 rounded-md px-4 text-lg text-white ${controlPoints.length === 4 && 'border-green-400'}`}>
        Cubic Bézier
			</button>
			<button onClick={() => setAnimate((prev) => !prev)} className={`border-2 rounded-md px-4 text-lg text-white ${animate && 'border-green-400'}`}>
				Animate
			</button>
		</div>
	);
};
export default Buttons;
