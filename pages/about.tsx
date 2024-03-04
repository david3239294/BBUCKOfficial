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
        <title>About | GrokLabs</title>
        <meta
          name="description"
          content="About | GrokLabs"
        />
      </Head>
      <div className="z-0 h-screen">
        <SplineObj
         
          scene={"./spline/cyber_mannequin.spline"}
        />
      </div>
      <div className="absolute flex flex-col w-full gap-5 px-5 text-white h-fit lg:w-3/5 xl:w-1/2 left-2 sm:left-32 top-2 sm:top-10 z-100 sm:gap-6 sm:px-0">
        <div
          className={`ml-16 sm:ml-0 text-3xl md:text-4xl xl:text-5xl animated-heading bold md:mb-10 ${spaceBoards.className}`}
        >
          About Groks Laboratory
        </div>
        <p className={tasaOrbiter.className}>
         
          
         
        </p>
       
        <p className={tasaOrbiter.className}>
  🚀 Hey there, Crypto Enthusiasts and Blockchain Believers! 🌟
  <br />
  Are you ready for a journey that's already setting the crypto world on fire? Let's take a moment to appreciate the incredible milestones achieved and the exciting future that awaits with Groklabs! 🌈
  <br />
  <br />
  🎉 Launched on the 19th of January, Groklabs has been on a relentless pursuit of innovation and excellence. Here's a quick recap of what we've achieved in such a short span:
  <br />
  <ul>
    <li>Fairlaunch: We kicked things off with a bang, ensuring equal opportunities for all.</li>
    <li>Staking Contract: Our staking contract is up and running, rewarding our early supporters.</li>
    <li>NFT Collection: Dive into the world of digital art with our exclusive NFT collection.</li>
    <li>300 Organic Followers on X: Our community is growing, thanks to genuine engagement and support.</li>
  </ul>
  <br />
  But hold on, the journey doesn't end here! 🚀
  <br />
  <br />
  🔜 Still to Come: Grokswap - Get ready for our game-changing decentralized exchange platform. The future of trading is here!
  <br />
  <br />
  Why Groklabs? It's simple:
  <br />
  <ul>
    <li>Based Dev: Our developers are not just skilled; they're visionaries in the blockchain space.</li>
    <li>Based Team: A team that's as passionate about our project as our community.</li>
    <li>Based Community: Our strength lies in our community. Engaged, supportive, and ready for the moon!</li>
  </ul>
  <br />
  Join us as we continue to break barriers and set new standards in the crypto world. With Groklabs, you're not just investing; you're becoming part of a movement. A movement towards a decentralized, fair, and innovative future. 🌟
  <br />
  <br />
  Don't miss out on this incredible journey. Let's Grok the crypto world together! 🌐✨
  <br />
  <br />
  #Groklabs #CryptoRevolution #JoinUsNow
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
        <a href="https://grokslaboratorystakin.netlify.app/" target="_blank" rel="noopener noreferrer">
          <button
            className={`resume-button h-fit w-fit px-5 py-2 text-md text-accent shadow-md font-semibold mb-3 ${spaceBoards.className}`}
            onMouseEnter={() => playSnap()}
            onMouseLeave={() => stopSnap()}
            onClick={() => playConfirm()}
          >
         
            Stake Your $GrokLabs here!
          </button>
        </a>
        <a href="https://opensea.io/GroksLaboratory" target="_blank" rel="noopener noreferrer">
          <button
            className={`resume-button h-fit w-fit px-5 py-2 text-md text-accent shadow-md font-semibold mb-3 ${spaceBoards.className}`}
            onMouseEnter={() => playSnap()}
            onMouseLeave={() => stopSnap()}
            onClick={() => playConfirm()}
          >
         
            Have A look at our Custom NFT Collection on Opensea!
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
