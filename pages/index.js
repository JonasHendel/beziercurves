import { useState, useEffect } from 'react';

import QuadraticBezier from '../components/QuadraticBezier';
import CubicBezier from '../components/CubicBezier';
import Slider from '../components/Slider';
import Buttons from '../components/Buttons';

// default Bézier Type is quadratic
const quadraticPoints = [
	{ x: 200, y: 400, active: false },
	{ x: 400, y: 100, active: false },
	{ x: 600, y: 400, active: false },
];

const Home = () => {
	const [controlPoints, setControlPoints] = useState(quadraticPoints);
	const [animate, setAnimate] = useState(false);
	const [origin, setOrigin] = useState(1);
	const [t, setT] = useState(0.5);

	const lerp = (x1, x2) => (1 - t) * x1 + t * x2;

	const findPointsBetween = (pointArr) => {
		const tempPointArr = [];
		for (let i = 1; i < pointArr.length; i++) {
			const point1 = pointArr[i];
			const point2 = pointArr[i - 1];
			const pointBetween = { x: lerp(point1.x, point2.x), y: lerp(point1.y, point2.y) };
			tempPointArr.push(pointBetween);
		}
		return tempPointArr;
	};

	const handlePointerDown = (e, i) => {
		const el = e.target;
		const bbox = e.target.getBoundingClientRect();
		const x = e.clientX - bbox.left;
		const y = e.clientY - bbox.top;
		el.setPointerCapture(e.pointerId);

		const tempPointsArr = controlPoints.slice();

		tempPointsArr[i].active = true;
		tempPointsArr[i].offset = { x: x, y: y };

		setControlPoints(tempPointsArr);
	};
	const handlePointerMove = (e, i) => {
		const bbox = e.target.getBoundingClientRect();
		const x = e.clientX - bbox.left;
		const y = e.clientY - bbox.top;

		if (controlPoints[i].active) {
			const tempPointsArr = controlPoints.slice();
			if (tempPointsArr[i].y - (tempPointsArr[i].offset.y - y) < 5) return;
			if (tempPointsArr[i].y - (tempPointsArr[i].offset.y - y) > 593) return;
			tempPointsArr[i].x = tempPointsArr[i].x - (tempPointsArr[i].offset.x - x);
			tempPointsArr[i].y = tempPointsArr[i].y - (tempPointsArr[i].offset.y - y);
			setControlPoints(tempPointsArr);
		}
	};
	const handlePointerUp = (e, i) => {
		const tempPointsArr = controlPoints.slice();

		tempPointsArr[i].active = false;

		setControlPoints(tempPointsArr);
	};

	// Animation
	useEffect(() => {
		if (t >= 1) {
			setOrigin(1);
		}
		if (t <= 0) {
			setOrigin(0);
		}
		if (animate) {
			const interval = setInterval(() => {
				if (origin === 1) {
					setT((prevT) => (prevT * 1000 - 1) / 1000);
				}
				if (origin === 0) {
					setT((prevT) => (prevT * 1000 + 1) / 1000);
				}
			}, 5);

			return () => clearInterval(interval);
		}
	}, [t, origin, setT, animate]);

	return (
		<div className='w-screen h-screen bg-gray-900 flex flex-col items-center  overflow-hidden relative'>
			<div className='flex flex-col mt-3 justify-center items-center'>
				<a href="https://github.com/jonashendel" target="_blank" rel="noreferrer">
					<img className='absolute top-5 right-5 h-9' src='./github.svg' alt='GitHub logo' />
				</a>
				<h1 className='text-white text-xl sm:text-5xl'>Bézier Curves</h1>
				<div className='flex w-full justify-between mb-5'>
					<Buttons setControlPoints={setControlPoints} setAnimate={setAnimate} controlPoints={controlPoints} animate={animate} />
					<Slider t={t} setT={setT} />
				</div>
				<p className='text-white text-md sm:text-2xl hidden sm:block'>Try to move the white points!</p>
				<p className='text-white text-md sm:text-2xl block sm:hidden'>Please use a desktop or tablet browser for full functionality</p>
			</div>
			{controlPoints.length === 3 && (
				<QuadraticBezier
					controlPoints={controlPoints}
					t={t}
					findPointsBetween={findPointsBetween}
					handlePointer={{ pointerUp: handlePointerUp, pointerMove: handlePointerMove, pointerDown: handlePointerDown }}
				/>
			)}
			{controlPoints.length === 4 && (
				<CubicBezier
					controlPoints={controlPoints}
					t={t}
					findPointsBetween={findPointsBetween}
					handlePointer={{ pointerUp: handlePointerUp, pointerMove: handlePointerMove, pointerDown: handlePointerDown }}
				/>
			)}
		</div>
	);
};

export default Home;
