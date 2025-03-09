export default function Battle2() {
  return (
    <div className="h-[300px] w-[400px]  bg-[#0B2429] flex justify-center items-center relative">
      <div className="absolute h-[100px] w-[100px] bg-[#F3AC3C] translate-x-[50%] rounded-full -translate-y-[50%]"></div>
      <div className="absolute h-[100px] w-[100px] bg-[#F3AC3C] rounded-b-full translate-y-[50%] shadow-[50px_-50px_0_0_#998235] -translate-x-[50%] rounded-tl-full rounded-tr-0 "></div>
    </div>
  );
}