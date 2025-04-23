import { useState, useRef } from "react";

export default function Battle() {

  const [list, setList] = useState(['name', 'mail',])

  return (
    <div className="h-[300px] w-[400px]  bg-[#0B2429] flex  justify-center items-center relative flex-col gap-2">

      {
        list.map((e, i) => (
          <label key={e}>
            {e}:
            <input className="border-2 outlint-none focus:outline-0 " />
          </label>
        ))
      }
      --------------
      {
        list.map((e, i) => (
          <label key={i}>
            {e}:
            <input className="border-2 outlint-none focus:outline-0 " />
          </label>
        ))
      }
      <button className="bg-white text-black  hover:bg-green-200" onClick={() => {
        setList((pre) => [...pre].reverse()); // 复制数组再反转
      }}>click me</button>
    </div>
  );
}