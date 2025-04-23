import { distance2D } from "motion";
import { useEffect } from "react";
import { useState ,useRef} from "react";

export default function Battle() {
  const [showSettings,setShowSettings] = useState(false)
  const [currentValue,setCurrentValue] = useState('C2')
  const dropDownRef = useRef();
  useEffect(()=>{
    function handleClickOutside(event){
      if(dropDownRef.current && !dropDownRef.current.contains(event.target)){
        setShowSettings(false)
    }
  }
    document.addEventListener('click',handleClickOutside)
    return ()=>document.removeEventListener('click',handleClickOutside)
  },[])
  function handleClick(e){
    setShowSettings(!showSettings)
  }
  const options = ['C2','H3','Down']
  return (
    <div className="h-[300px] w-[400px]  bg-[#0B2429] flex  justify-center items-center relative">
      <div className="flex relative" ref={dropDownRef}>label:<div className="relative" onClick={handleClick}>{currentValue}
      {showSettings &&
      <div className="flex flex-col absolute text-black  z-10 bg-white" onClick={(e)=>{setCurrentValue(e.target.innerText)}}>
        {options.map((option,idx)=>(<div key={`option-${idx}`}>
          {option}</div>))}
        </div>}
      </div>
      
      </div>
      

      
    </div>
  );
}