import Image from "next/image";

export default function Slider() {
  return (
    <div className="">
      {/* Text container */}
      <div className="">
        <h1 className="">
            Tste
        </h1>
        <button className="">Peça agora</button>
      </div>
      {/* Image container */}
      <div className="">
        <Image 
        src="./slide.png"
        alt="" 
        />
      </div>
    </div>
  );
}
