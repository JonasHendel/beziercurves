import { useEffect, useState, Fragment } from 'react';

const cubicBezier = (p0, p1, p2, p3, t) => {
	const finalX = Math.pow(1 - t, 3) * p0.x + 3 * Math.pow(1 - t, 2) * t * p1.x + 3 * (1 - t) * Math.pow(t, 2) * p2.x + Math.pow(t, 3) * p3.x;
	const finalY = Math.pow(1 - t, 3) * p0.y + 3 * Math.pow(1 - t, 2) * t * p1.y + 3 * (1 - t) * Math.pow(t, 2) * p2.y + Math.pow(t, 3) * p3.y;
	return { finalX, finalY };
};

const CubicBezier = ({ controlPoints, findPointsBetween, t, handlePointer }) => {
	const [intermediatePoints1, setIntermediatePoints1] = useState([]);
	const [intermediatePoints2, setIntermediatePoints2] = useState([]);

  const {pointerUp, pointerDown, pointerMove} = handlePointer

	useEffect(() => {
		setIntermediatePoints1(findPointsBetween(controlPoints));
	}, [controlPoints, t]);

	useEffect(() => {
		setIntermediatePoints2(findPointsBetween(intermediatePoints1));
	}, [intermediatePoints1]);


	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='full' height='full' viewBox='0 0 850 600'>
			{intermediatePoints1.length === 3 && (
				<path
					d={`M ${controlPoints[0].x} ${controlPoints[0].y}  c ${controlPoints[1].x - controlPoints[0].x} ${controlPoints[1].y - controlPoints[0].y} ${
						controlPoints[2].x - controlPoints[0].x
					} ${controlPoints[2].y - controlPoints[0].y} ${controlPoints[3].x - controlPoints[0].x} ${controlPoints[3].y - controlPoints[0].y}`}
					stroke='white'
					strokeWidth='4'
					fill='none'
				/>
			)}
			{controlPoints.map((point, i) => (
				i > 0 && <path key={i} d={`M${point.x} ${point.y} L${controlPoints[i - 1].x} ${controlPoints[i - 1].y}`} stroke='white' strokeWidth='1' />
			))}
			{intermediatePoints1.length > 0 && (
				<path d={`M${intermediatePoints1[0].x} ${intermediatePoints1[0].y} L${intermediatePoints1[1].x} ${intermediatePoints1[1].y}`} stroke='#3dff9e' strokeWidth='2' className='z-10' />
			)}
			{intermediatePoints1.length > 0 && (
				<path d={`M${intermediatePoints1[1].x} ${intermediatePoints1[1].y} L${intermediatePoints1[2].x} ${intermediatePoints1[2].y}`} stroke='#3dff9e' strokeWidth='2' className='z-10' />
			)}
			{intermediatePoints2.length > 0 && (
				<path d={`M${intermediatePoints2[0].x} ${intermediatePoints2[0].y} L${intermediatePoints2[1].x} ${intermediatePoints2[1].y}`} stroke='#e31e63' strokeWidth='2' className='z-10' />
			)}
			<circle
				cx={cubicBezier(controlPoints[0], controlPoints[1], controlPoints[2], controlPoints[3], 1 - t).finalX}
				cy={cubicBezier(controlPoints[0], controlPoints[1], controlPoints[2], controlPoints[3], 1 - t).finalY}
				fill='#121826'
				strokeWidth='2'
				stroke='#42c5f5'
				r='5'
			/>
			{intermediatePoints1.map((point, i) => (
				<circle key={i} cx={point.x} cy={point.y} fill='#121826' strokeWidth='2' stroke='#3dff9e' r='5' />
			))}
			{intermediatePoints2.map((point, i) => (
				<circle key={i} cx={point.x} cy={point.y} fill='#121826' strokeWidth='2' stroke='#e31e63' r='5' />
			))}
			{controlPoints.map((point, i) => (
				<Fragment key={i}>
					<circle className='cursor-pointer' cx={point.x} cy={point.y} fill='#121826' strokeWidth='2' stroke='white' r='5' />
					<circle
						className='cursor-pointer'
						onPointerDown={(e) => pointerDown(e, i)}
						onPointerUp={(e) => pointerUp(e, i)}
						onPointerMove={(e) => pointerMove(e, i)}
						cx={point.x}
						cy={point.y}
						fill='#00ff0000'
						r='20'
					/>
				</Fragment>
			))}
		</svg>
	);
};

export default CubicBezier;
