import { useState, useEffect, useRef } from 'react';

import Slider from '../components/slider';

const Home = () => {
	const [position, setPosition] = useState({
		x: 100,
		y: 100,
		active: false,
		offset: {},
	});

	const [points, setPoints] = useState([
		{ x: 200, y: 400, active: false },
		{ x: 500, y: 100, active: false },
		// { x: 200, y: 100, active: false },
		// { x: 600, y: 100, active: false },
		{ x: 600, y: 400, active: false },
	]);

	const circleRef = useRef();

	const [mPoints, setMPoints] = useState([]);

	const [t, setT] = useState(1);
  const [origin, setOrigin] = useState()

	const lerpFunc = (x1, x2) => (1 - t) * x1 + t * x2;

	useEffect(() => {
		let points2 = [];
		for (let i = 1; i < points.length; i++) {
			let p1 = points[i];
			let p2 = points[i - 1];
			let m = { x: lerpFunc(p1.x, p2.x), y: lerpFunc(p1.y, p2.y) };
			points2.push(m);
		}
		setMPoints(points2);
    console.log(mPoints)
	}, [points, t]);


  useEffect(()=>{
    const quadraticBezier = (p0, p1, p2) => {
      const pFinalx = Math.pow(1 - t, 2) * p0.x + 2 * (1 - t) * t * p1.x + Math.pow(t, 2) * p2.x;
      const pFinaly = Math.pow(1 - t, 2) * p0.y + 2 * (1 - t) * t * p1.y + Math.pow(t, 2) * p2.y;
      return { pFinalx, pFinaly };
    };

    const {pFinalx, pFinaly} = quadraticBezier(points[0], points[1], points[2]);
    
  }, [points, t])


  // Animation  
  // useEffect(()=>{
  //   if(t === 1){
  //     setOrigin(1)
  //   }
  //   if(t === 0){
  //     setOrigin(0)
  //   }

  //   const interval = setInterval(()=>{
  //     if(origin === 1){
  //       setT((t)=>(t*1000-1)/1000);
  //     }
  //     if(origin===0){
  //       setT((t)=>(t*1000+1)/1000);
  //     }
  //   }, 1)

  //   return ()=>clearInterval(interval)
  // })

	const handlePointerDown = (e, i) => {
		const el = e.target;
		const bbox = e.target.getBoundingClientRect();
		const x = e.clientX - bbox.left;
		const y = e.clientY - bbox.top;
		el.setPointerCapture(e.pointerId);

		let ps = points.slice();

		ps[i].active = true;
		ps[i].offset = { x: x, y: y };

		console.log('x', x);
		console.log('offset', ps[i].offset);

		console.log('psx', ps[i].x - (ps[i].offset.x - x));
		setPoints(ps);
	};
	const handlePointerMove = (e, i) => {
		const bbox = e.target.getBoundingClientRect();
		const x = e.clientX - bbox.left;
		const y = e.clientY - bbox.top;

		if (points[i].active) {
			let ps = points.slice();
			ps[i].x = ps[i].x - (ps[i].offset.x - x);
			ps[i].y = ps[i].y - (ps[i].offset.y - y);
			setPoints(ps);
		}
	};
	const handlePointerUp = (e, i) => {
		const ps = points.slice();

		ps[i].active = false;

		setPoints(ps);
	};

	return (
		<div className='w-screen h-screen bg-gray-900 flex flex-col justify-center items-center text-5xl z-0'>
			<h1 className='text-white'>Bezier Curves</h1>
			<Slider t={t} setT={setT} />
			<svg xmlns='http://www.w3.org/2000/svg' width='full' height='full' viewBox='0 0 841.9 595.3'>
				<path
					d={`M ${points[0].x} ${points[0].y}  q ${points[1].x - points[0].x} ${points[1].y - points[0].y} ${points[2].x - points[0].x} ${points[2].y - points[0].y}`}
					stroke='white'
					strokeWidth='4'
					fill='none'
				/>
				{points.map((point, i) => (
					<>{i > 0 && <path d={`M${point.x} ${point.y} L${points[i - 1].x} ${points[i - 1].y}`} stroke='white' strokeWidth='1' />}</>
				))}
				{mPoints.map((point, i) => (
					<>
						{i > 0 && (
							<>
								<path d={`M${point.x} ${point.y} L${mPoints[i - 1].x} ${mPoints[i - 1].y}`} stroke='#e31e63' strokeWidth='2' className='z-10' />
							</>
						)}
					</>
				))}
				{mPoints.map((point, i) => (
					<>
						{i > 0 && (
							<>
								<circle
									ref={circleRef}
									key={i}
									cx={lerpFunc(point.x, mPoints[i - 1].x)}
									cy={lerpFunc(point.y, mPoints[i - 1].y)}
									fill='#121826'
									strokeWidth='2'
									stroke='#42c5f5'
									r='5'
								/>
							</>
						)}
						<circle key={i} cx={point.x} cy={point.y} fill='#121826' strokeWidth='2' stroke='#e31e63' r='5' />
					</>
				))}
				{points.map((point, i) => (
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
					</>
				))}
			</svg>
		</div>
	);
};

export default Home;
