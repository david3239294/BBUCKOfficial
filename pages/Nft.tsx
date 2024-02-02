import Head from "next/head";
import { NextPage } from "next";

const Nft: NextPage = () => {
  const externalWebpageUrl = "https://opensea.io/GroksLaboratory"; // Replace with the URL of the webpage you want to display

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
        
        <div>
          {/* Use an iframe to embed the external webpage */}
          <iframe src={externalWebpageUrl} width="100%" height="100%" frameBorder="0" />
        </div>       
      </div>
    </>
  );
};

export default Nft;
