import { useEffect, useState } from 'react';

const quadraticBezier = (p0, p1, p2, t) => {
  const finalX = Math.pow(1 - t, 2) * p0.x + 2 * (1 - t) * t * p1.x + Math.pow(t, 2) * p2.x;
  const finalY = Math.pow(1 - t, 2) * p0.y + 2 * (1 - t) * t * p1.y + Math.pow(t, 2) * p2.y;
  return { finalX, finalY };
};

const QuadraticBezier = ({ controlPoints, t, findPointsBetween, handlePointer}) => {
	const [intermediatePoints, setIntermediatePoints] = useState([]);

  const {pointerUp, pointerDown, pointerMove} = handlePointer

	useEffect(() => {
		setIntermediatePoints(findPointsBetween(controlPoints));
	}, [controlPoints, t]);

	return (
		<svg xmlns='http://www.w3.org/2000/svg' width='full' height='full' viewBox='0 0 841.9 595.3'>
			<path
				d={`M ${controlPoints[0].x} ${controlPoints[0].y}  q ${controlPoints[1].x - controlPoints[0].x} ${controlPoints[1].y - controlPoints[0].y} ${controlPoints[2].x - controlPoints[0].x} ${controlPoints[2].y - controlPoints[0].y}`}
				stroke='white'
				strokeWidth='4'
				fill='none'
			/>
			{controlPoints.map((point, i) => (
				<>{i > 0 && <path d={`M${point.x} ${point.y} L${controlPoints[i - 1].x} ${controlPoints[i - 1].y}`} stroke='white' strokeWidth='1' />}</>
			))}
			{intermediatePoints.length > 0 && <path d={`M${intermediatePoints[0].x} ${intermediatePoints[0].y} L${intermediatePoints[1].x} ${intermediatePoints[1].y}`} stroke='#e31e63' strokeWidth='2' className='z-10' />}
			<circle
				cx={quadraticBezier(controlPoints[0], controlPoints[1], controlPoints[2], 1 - t).finalX}
				cy={quadraticBezier(controlPoints[0], controlPoints[1], controlPoints[2], 1 - t).finalY}
				fill='#121826'
				strokeWidth='2'
				stroke='#42c5f5'
				r='5'
			/>
			{intermediatePoints.map((point, i) => (
				<circle key={i} cx={point.x} cy={point.y} fill='#121826' strokeWidth='2' stroke='#e31e63' r='5' />
			))}
			{controlPoints.map((point, i) => (
				<>
					<circle
						className='cursor-pointer'
						onPointerDown={(e) => handlePointerDown(e, i)}
						onPointerUp={(e) => handlePointerUp(e, i)}
						onPointerMove={(e) => handlePointerMove(e, i)}
						key={i}
						cx={point.x}
						cy={point.y}
						fill='#121826'
						strokeWidth='2'
						stroke='white'
						r='5'
					/>
					<circle
						className='cursor-pointer'
						onPointerDown={(e) => pointerDown(e, i)}
						onPointerUp={(e) => pointerUp(e, i)}
						onPointerMove={(e) => pointerMove(e, i)}
						key={i}
						cx={point.x}
						cy={point.y}
						fill='#00ff0000'
						r='20'
					/>
				</>
			))}
		</svg>
	);
};

export default QuadraticBezier;
