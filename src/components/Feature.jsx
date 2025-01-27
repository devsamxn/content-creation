import { useRef } from "react";
import { useState } from "react";

const BentoTilt = ({ children, className = "" }) => {
  const [transformStyle, setTransformStyle] = useState("");
  const itemRef = useRef("");
  const handleMouseMove = (e) => {
    console.log(itemRef);
    if (!itemRef.current) return;
    console.log(e);
    const { left, top, width, height } =
      itemRef.current.getBoundingClientRect();
    const relativeX = (e.clientX - left) / width;
    const relativeY = (e.clientY - top) / height;
    const tiltX = (relativeY - 0.5) * 10;
    const tiltY = (relativeX - 0.5) * -10;
    const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(0.98, 0.98, 0.98)`;
    setTransformStyle(newTransform);
  };
  const handleMouseLeave = () => {
    setTransformStyle("");
  };
  return (
    <div
      className={className}
      ref={itemRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
};

const BentoCard = ({ src, title, color }) => {
  return (
    <div className="relative size-full">
      <video
        src={src}
        loop
        muted
        autoPlay
        className="absolute left-0 top-0 size-full object-cover object-center"
      />
      <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
        <div>
          <h1 className="font-playfair text-[4rem]">{title}</h1>
          {/* <p></p> */}
        </div>
      </div>
    </div>
  );
};

const Feature = () => {
  return (
    <section id="work" className="bg-black pb-52 -mb-10">
      <div className="container mx-auto px-3 md:px-10">
        <div className="px-5 py-20 font-playfair">
          <h1 className="text-6xl text-blue-50 uppercase">Our Works</h1>
          <h2 className="max-w-md text-2xl text-blue-50 opacity-50 italic ms-52">
            Our Creative Playground
          </h2>
        </div>

        <BentoTilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
          <BentoCard
            src="videos/feature-1.mp4"
            title="untold."
            desc="description1"
          />
        </BentoTilt>
        <div className="grid h-[135vh] grid-cols-2 grid-rows-2 gap-7">
          <BentoTilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
            <BentoCard
              src="videos/feature-2.mp4"
              title="unrevealed."
              desc="desc2"
            />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
            <BentoCard src="videos/feature-3.mp4" title="" desc="desc3" />
          </BentoTilt>
          <BentoTilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
            <BentoCard src="videos/feature-4.mp4" title="" desc="desc3" />
          </BentoTilt>
        </div>
      </div>
    </section>
  );
};

export default Feature;
