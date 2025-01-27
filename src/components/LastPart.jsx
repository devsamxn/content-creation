import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
gsap.registerPlugin(ScrollTrigger);

const LastPart = () => {
  useGSAP(() => {
    const tl = gsap.timeline();
    gsap.defaults({ ease: "none", duration: 2 });
    tl.to(".black", { yPercent: -100 })
      .to(".pink", { yPercent: 100 })
      .to(".blue", { yPercent: -100 });
    ScrollTrigger.create({
      animation: tl,
      trigger: ".last",
      start: "top top",
      end: "+=800",
      scrub: true,
      pin: true,
      anticipatePin: 1,
      // markers: true,
    });
  });
  return (
    <section
      id="uncover"
      className="last relative h-screen w-screen bg-[url(/img/last.jpg)] overflow-hidden overflow-x-hidden grid grid-cols-3 -ms-5 bg-cover"
    >
      <div className="black bg-[url(/img/unlock.png)] bg-cover h-full w-full flex items-center justify-center">
        {/* <h1 className="text-white text-4xl font-bold">Uncover</h1> */}
      </div>
      <div className="pink bg-[url(/img/new.png)] bg-cover h-full w-full flex items-center justify-center">
        {/* <h1 className="text-white text-4xl font-bold">The</h1> */}
      </div>
      <div className="blue bg-[url(/img/potential.png)] bg-cover h-full w-full flex items-center justify-center">
        {/* <h1 className="text-white text-4xl font-bold">Truth</h1> */}
      </div>
    </section>
  );
};

export default LastPart;
