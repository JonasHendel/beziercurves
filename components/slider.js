const Slider = ({t, setT}) => {
  return (
    <>
    <input value={t} type="range" min='0' max='1' step='0.01' onChange={(e)=>setT(e.target.value)}/>
    <p className="mt-5">{t}</p>
    </>
  )
}

export default Slider