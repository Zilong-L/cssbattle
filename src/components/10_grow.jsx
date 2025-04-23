export default function Battle() {
  return (
    <div className="h-[300px] w-[400px]  bg-[#0B2429] flex  justify-center items-center relative p-4 flex-col gap-8 py-24">
      <div className="flex w-full h-32 bg-white">
        <div className="flex-1 bg-gray-200"></div>
        <div className="w-32 bg-black"></div>
      </div>
      <div className="grid grid-cols-[1fr_auto] w-full h-32 bg-white">
        <div className="bg-gray-200"></div>
        <div className="w-32 bg-black"></div>
      </div>
    </div>
  );
}