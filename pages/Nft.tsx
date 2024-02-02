import Head from "next/head";
import { NextPage } from "next";

const Nft: NextPage = () => {
  const externalWebpageUrl = "https://opensea.io/GroksLaboratory"; // Replace with the URL of the webpage you want to link to

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
        {/* Banner Image */}
        <img src="/images/banner.jpg" alt="Banner Image" style={{ maxWidth: "100%", height: "auto" }} />

        {/* Neon glow header */}
        <div style={{ fontSize: "3rem", fontFamily: "Arial, sans-serif", textShadow: "0 0 10px #00fff4, 0 0 20px #00fff4, 0 0 30px #00fff4, 0 0 40px #00fff4" }}>
          Check Out Our Cool Nfts
        </div>
        
        <div>
          {/* Use a regular HTML link to open the external webpage */}
          <a href={externalWebpageUrl} target="_blank" rel="noopener noreferrer">
            View Our OpenSea Collection Here
          </a>
        </div>       
      </div>
    </>
  );
};

export default Nft;
