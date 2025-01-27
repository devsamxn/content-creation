import { useGSAP } from "@gsap/react";
import gsap, { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        // markers: true,
        pinSpacing: true,
      },
    });
    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });
  return (
    <div id="about" className="min-h-screen w-screen">
      <div className="relative mb-5 sm:mb-10 mt-20 flex flex-col items-center gap-3">
        <h2 className="font-playfair text-sm uppercase md:text-4xl">
          Your Creative Playground
        </h2>
        <AnimatedTitle
          title={"Everything You Need to Create & Grow."}
          containerClass={"mt-5 !text-black text-center"}
        />
        <div className="about-subtext">
          <p className="font-playfair italic tracking-wide">
            We are a <b>passionate</b> team of creators, technologists, and
            innovators dedicated to empowering content creators like you.
          </p>
        </div>
      </div>
      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="img/about.jpg"
            alt="Background"
            className="left-0 top-0 size-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
