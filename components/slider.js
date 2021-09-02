const Slider = ({ t, setT }) => {
	return (
		<div className='flex w-56 ml-7 justify-between items-center'>
			<p className='text-xl text-white flex'>
				t= <span className='w-16'>{Math.round(t*100)/100}</span>
			</p>
			<div className='w-44 flex items-center'>
				<input value={t} type='range' min='0' max='1' step='0.01' onChange={(e) => setT(e.target.value)} />
			</div>

		</div>
	);
};

export default Slider;
