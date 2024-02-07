import Head from "next/head";
import SplineObj from "@components/SplineObject";
import useSound from "use-sound";
import { NextPage } from "next";
import { spaceBoards, tasaOrbiter } from "@font";
import Canvas from "@components/Particle";

const Game: NextPage = () => {
  const snapSfx = "./sounds/snap.wav";
  const confirmSfx = "./sounds/confirm.wav";
  const [playSnap, { stop: stopSnap }] = useSound(snapSfx, { volume: 0.25 });
  const [playConfirm] = useSound(confirmSfx, { volume: 0.25 });

  return (
    <>
      <Head>
        <title>MiniGame | GrokLabs</title>
        <meta
          name="description"
          content="MiniGame | GrokLabs"
        />
      </Head>
  
      <div className="z-0 h-screen">
        <SplineObj
          scene={"./spline/3_d_third_person_shooter_game"}
        />
      </div>
  
      <div className="absolute flex flex-col w-full gap-5 px-5 text-white h-fit lg:w-3/5 xl:w-1/2 left-2 sm:left-32 top-2 sm:top-10 z-100 sm:gap-6 sm:px-0">
        <div className={`ml-16 sm:ml-0 text-3xl md:text-4xl xl:text-5xl animated-heading bold md:mb-10 ${spaceBoards.className}`}>
         Groks Laboratory is developing A Game?!?!
  
          <div>
            <p className={tasaOrbiter.className}>
              Welcome to the Official Preview of our P2E game! Much time and work are needed for completion. Love playing games? Earn $GrokLabs while slaying aliens that attack you! More developments and adjustments will take place; this will be the only release at this time. Please stay tuned and continue to follow the project for awesome stuff to come!
            </p>
  
            <p className="hidden w-full h-5 sm:block"></p>
  
            <a href="https://t.me/GrokLabsOfficial" target="_blank" rel="noopener noreferrer">
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
            <Canvas />
          </div>
        </div>
      </div>
    </>
  );
};

export default Game;
