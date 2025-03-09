export default function Battle() {
  return (
    <div className="h-[300px] w-[400px]  bg-[#E3516E] flex  justify-center items-center relative">
      <div className="grid grid-cols-2">
      <div className="h-[100px] w-[100px] bg-[#51B5A9] rounded-tl-full"></div>
      <div className="h-[100px] w-[100px] bg-[#FADE8B] rounded-tr-full"></div>
      <div className="h-[100px] w-[100px] bg-[#F7F3D7] rounded-bl-full"></div>
      </div>
    </div>
  );
}