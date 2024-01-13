import Head from "next/head";
import SplineObj from "@components/SplineObject";
import useSound from "use-sound";
import { NextPage } from "next";
import Canvas from "@components/Particle";
import { spaceBoards, tasaOrbiter } from "@font";

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
         
         scene={"./spline/sceneDACCORD.splinecode"}
        />
      </div>
      <div className="absolute flex flex-col w-full gap-5 px-5 text-white h-fit lg:w-3/5 xl:w-1/2 left-2 sm:left-32 top-2 sm:top-10 z-100 sm:gap-6 sm:px-0">
        <div
          className={`ml-16 sm:ml-0 text-3xl md:text-4xl xl:text-5xl animated-heading bold md:mb-10 ${spaceBoards.className}`}
        >
          BabyBuck Tokenomics
        </div>
      
        <p className={tasaOrbiter.className}>
       Total Supply |  1,000,000,000 (One Billion)
        </p>
        <p className={tasaOrbiter.className}>
        
       100 Million BBUCK has been burned after launch!
          
        
        </p>
        <p className={tasaOrbiter.className}>
       No max wallet restrictions
        </p>
        <p className={tasaOrbiter.className}>
     Contract Symbol | $BBUCK
          <br />

        </p>
        <p className={tasaOrbiter.className}>
          Decimals | 18
        </p>
        <p className={tasaOrbiter.className}>
          Contract Address | 0x839862D20fa50Fa9be9EB042E83A6bdD0594Ee2c
        </p>
        <p className="hidden w-full h-5 sm:block"></p>
        <a href="https://t.me/BabyBuckPortal" target="_blank">
          <button
            className={`resume-button h-fit w-fit px-5 py-2 text-md text-accent shadow-md font-semibold mb-3 ${spaceBoards.className}`}
            onMouseEnter={() => playSnap()}
            onMouseLeave={() => stopSnap()}
            onClick={() => playConfirm()}
          >
            Join Telegram Here
          </button>
        </a>
        <a href="https://bbuckstaking.netlify.app/" target="_blank">
          <button
            className={`resume-button h-fit w-fit px-5 py-2 text-md text-accent shadow-md font-semibold mb-3 ${spaceBoards.className}`}
            onMouseEnter={() => playSnap()}
            onMouseLeave={() => stopSnap()}
            onClick={() => playConfirm()}
          >
                 Stake Your $BBUCK here!
          </button>
        </a>
      </div>
    
      <div className="absolute bottom-0 right-0 flex-col flex-grow hidden w-1/2 h-screen lg:flex flex-end">
        <Canvas />
      </div>
    </>
  );
};

export default About;
