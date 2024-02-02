import Head from "next/head";
import Link from "next/link";
import { NextPage } from "next";

const Nft: NextPage = () => {
  return (
    <>
      <Head>
        <title>NFTS | GrokLabs</title>
        <meta
          name="description"
          content="GrokLabs Audits + KYC | https://t.me/GrokLabsOfficial"
        />
      </Head>

      <div className="flex flex-col items-center justify-center h-screen">
        {/* Neon glow header */}
        <div style={{ fontSize: "3rem", fontFamily: "Arial, sans-serif", textShadow: "0 0 10px #00fff4, 0 0 20px #00fff4, 0 0 30px #00fff4, 0 0 40px #00fff4" }}>
          Check Out Our Cool Nfts
        </div>

        {/* You may want to keep this if it's relevant to your design */}
        {/* <SplineObj scene="./spline/cloner_cube_.spline" /> */}
        
        <div>
          {/* Use an iframe to embed the external webpage */}
          <iframe src="https://opensea.io/GroksLaboratory" width="100%" height="100%" frameBorder="0" />
        </div>       
      </div>
    </>
  );
};

export default Nft;
