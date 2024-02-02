import Head from "next/head";
import { NextPage } from "next";

const Meet: NextPage = () => {
  return (
    <>
      <Head>
        <title>Meet | GrokLabs</title>
        <meta
          name="description"
          content="GrokLabs Audits + KYC | https://t.me/GrokLabsOfficial"
        />
      </Head>

      <div className="flex flex-col items-center justify-center h-screen">
        {/* Neon glow header */}
        <div style={{ fontSize: "3rem", fontFamily: "Arial, sans-serif", textShadow: "0 0 10px #00fff4, 0 0 20px #00fff4, 0 0 30px #00fff4, 0 0 40px #00fff4" }}>
          Meet The Developer
        </div>

        {/* You may want to keep this if it's relevant to your design */}
        {/* <SplineObj scene="./spline/cloner_cube_.spline" /> */}
        
        <div>
          <video width="100%" height="100%" controls>
            <source src="/images/intro.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </>
  );
};

export default Meet;
