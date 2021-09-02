const Slider = ({ t, setT }) => {
	return (
		<div className='mt-5 justify-between items-center hidden sm:flex'>
			<div className='w-36 mx-3 flex items-center'>
				<input value={t} type='range' min='0' max='1' step='0.01' onChange={(e) => setT(e.target.value)} />
			</div>
			<p className='text-xl mx-3 text-white flex'>
				t= <span className='w-16'>{Math.round(t*100)/100}</span>
			</p>

		</div>
	);
};

export default Slider;
