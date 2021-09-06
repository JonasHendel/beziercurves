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
		<div className='flex justify-center flex-wrap'>
			<button type="submit" onClick={() => setControlPoints(quadraticBezierPoints)} className={`border-2 rounded-md px-4 h-10 mx-3 mt-5 sm:text-lg text-white ${controlPoints.length === 3 && 'border-green-400'}`}>
        Quadratic Bézier
			</button>
			<button type="submit" onClick={() => setControlPoints(cubicBezierPoints)} className={`border-2 rounded-md h-10 px-4 mx-3 mt-5 sm:text-lg text-white ${controlPoints.length === 4 && 'border-green-400'}`}>
        Cubic Bézier
			</button>
			<button type="submit" onClick={() => setAnimate((prev) => !prev)} className={`border-2 rounded-md px-4 mx-3 h-10 mt-5  sm:text-lg text-white ${animate && 'border-green-400'}`}>
				Animate
			</button>
		</div>
	);
};
export default Buttons;
