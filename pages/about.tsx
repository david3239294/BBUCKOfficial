import Head from "next/head";
import SplineObj from "@components/SplineObject";
import useSound from "use-sound";
import { NextPage } from "next";
import { spaceBoards, tasaOrbiter } from "@font";
import Canvas from "@components/Particle";
const About: NextPage = () => {
  const snapSfx = "./sounds/snap.wav";
  const confirmSfx = "./sounds/confirm.wav";
  const [playSnap, { stop: stopSnap }] = useSound(snapSfx, { volume: 0.25 });
  const [playConfirm] = useSound(confirmSfx, { volume: 0.25 });
  return (
    <>
      <Head>
        <title>About | BabyBuck</title>
        <meta
          name="description"
          content="About | BabyBuck"
        />
      </Head>
      <div className="z-0 h-screen">
        <SplineObj
         
          scene={"./spline/sceneCOLORSTREAM.splinecode"}
        />
      </div>
      <div className="absolute flex flex-col w-full gap-5 px-5 text-white h-fit lg:w-3/5 xl:w-1/2 left-2 sm:left-32 top-2 sm:top-10 z-100 sm:gap-6 sm:px-0">
        <div
          className={`ml-16 sm:ml-0 text-3xl md:text-4xl xl:text-5xl animated-heading bold md:mb-10 ${spaceBoards.className}`}
        >
          About BabyBuck
        </div>
        <p className={tasaOrbiter.className}>
          Step into a world where internet memes meet Crypto legends, and creativity meets the thrill of Winning. Introducing BabyBuck (BBUCK), a pioneering cryptocurrency inspired by the iconic meme sensation, BUCKTOKEN and SHIBA-Inu. This extraordinary blend captures the spirit of humor, online culture, and excellence in one unique coin.
          
         
        </p>
        <p className={tasaOrbiter.className}>
          You know how big the Original BUCKTOKEN was, Now it&apos;s time for BabyBuck!
        </p>
        <p className={tasaOrbiter.className}>
          So, Embrace the fusion of BBUCK&apos;s playful charm and Shiba-inu&apos;s Fiery heart.
          Join the BabyBuck($BBUCK) revolution and embark on a journey that blends humor, Money generating, and financial empowerment into one extraordinary coin.
          <br />
        </p>
        <p className="hidden w-full h-5 sm:block"></p>
        <a href="https://t.me/BabyBuckPortal" target="_blank" rel="noopener noreferrer">
          <button
            className={`resume-button h-fit w-fit px-5 py-2 text-md text-accent shadow-md font-semibold mb-3 ${spaceBoards.className}`}
            onMouseEnter={() => playSnap()}
            onMouseLeave={() => stopSnap()}
            onClick={() => playConfirm()}
          >
            Join Telegram Here
          </button>
        </a>
      </div>
      <div className="absolute bottom-0 right-0 flex-col flex-grow hidden w-1/2 h-screen lg:flex flex-end">
        <Canvas/>
      </div>
    </>
  );
};

export default About;
