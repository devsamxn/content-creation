import { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

gsap.registerPlugin(ScrollTrigger);
function Hero() {
  const [currentIndex, setCurrentIndex] = useState(1);
  const [hasClicked, setHasClicked] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [loadedVideos, setLoadedVideos] = useState(0);
  const totalVideos = 3;
  const nextVideoRef = useRef(null);
  const handleVideoLoad = () => {
    setLoadedVideos((prev) => prev + 1);
  };

  const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
  const handleMiniVdClick = () => {
    setHasClicked(true);
    setCurrentIndex(upcomingVideoIndex);
  };

  useGSAP(
    () => {
      if (hasClicked) {
        gsap.set("#next-video", { visibility: "visible" });
        gsap.to("#next-video", {
          transformOrigin: "center center",
          scale: 1,
          width: "100%",
          height: "100%",
          duration: 1,
          ease: "power1.inOut",
          onStart: () => nextVideoRef.current.play(),
        });
        gsap.from("#current-video", {
          transformOrigin: "center center",
          scale: 0,
          duration: 1.5,
          ease: "power1.inOut",
        });
      }
    },
    { dependencies: [currentIndex], revertOnUpdate: true }
  );
  useGSAP(() => {
    gsap.set("#video-frame", {
      clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 40% 10%",
    });
    gsap.from("#video-frame", {
      clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
      // clipPath: "polygon(14% 0%, 72% 0%, 90% 90%, 0% 100%)",
      borderRadius: "0 0 0 0",
      ease: "power1.inOut",
      scrollTrigger: {
        trigger: "#video-frame",
        start: "center center",
        end: "bottom center",
        scrub: true,
      },
    });
  });
  const getVideoSrc = (index) => `videos/hero-${index}.mp4`;

  return (
    <div id="hero" className="relative h-dvh w-screen overflow-x-hidden">
      <h1 className="cursor-pointer absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-30 text-2xl font-playfair text-white italic">
        Hover For More
      </h1>
      {isLoading && (
        <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden">
          <div className="three-body">
            <div className="three-body__dot" />
            <div className="three-body__dot" />
            <div className="three-body__dot" />
          </div>
        </div>
      )}
      <div
        id="video-frame"
        className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-100"
      >
        <div>
          <div className="mask-clip-path absolute top-1/2 left-1/2  transform -translate-x-1/2 -translate-y-1/2 z-50 size-64 curson-pointer overflow-hidden rounded-lg">
            <div
              onClick={handleMiniVdClick}
              className=" cursor-pointer origin-center scale-50 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100"
            >
              <video
                ref={nextVideoRef}
                src={getVideoSrc(upcomingVideoIndex)}
                loop
                muted
                id="current-video"
                className="size-64 origin-center scale-150 object-cover object-center"
                onLoadedData={handleVideoLoad}
              />
            </div>
          </div>
          <video
            ref={nextVideoRef}
            src={getVideoSrc(currentIndex)}
            loop
            muted
            id="next-video"
            className="invisible absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20 size-64 object-cover object-center"
          />
          <video
            src={getVideoSrc(
              currentIndex === totalVideos + 1 ? 1 : currentIndex
            )}
            autoPlay
            loop
            muted
            className="absolute left-0 top-0 size-full object-cover object-center"
            onLoadedData={handleVideoLoad}
          />
        </div>
        <h2 className="special-font z-40 hero-heading absolute bottom-5 right-5 text-blue-75">
          Elevating Content.
        </h2>
        <div className="absolute left-0 top-0 z-40">
          <div className="mt-24 px-5 sm:px-10">
            <h3 className="special-font hero-heading text-blue-75 text-sm">
              Empowering Creators,
            </h3>
          </div>
        </div>
      </div>
      <h2 className="special-font hero-heading absolute bottom-5 right-5 text-black">
        Elevating Content.
      </h2>
    </div>
  );
}

export default Hero;
