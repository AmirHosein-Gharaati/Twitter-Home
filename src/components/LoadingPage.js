import Lottie from "lottie-web";
import { useEffect, useRef } from "react";
import twitterAnimation from "../animations/twitter-anime.json";

const LoadingPage = () => {
  const anime = useRef(null);
  useEffect(() => {
    Lottie.loadAnimation({
      container: anime.current,
      renderer: "svg",
      loop: true,
      autoplay: true,
      animationData: twitterAnimation,
    });
    return () => Lottie.stop();
  }, []);

  return <div className="center" ref={anime}></div>;
};

export default LoadingPage;
