export default function Loader() {
  // styling loader 
  //inset-0 = top 0 left 0 ...etc

  return <div className="absolute bg-slate-100/20 inset-0 flex justify-center items-center backdrop-blur-sm "><div className="loader "></div></div>;
}
