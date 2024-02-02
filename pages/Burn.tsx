import Head from "next/head";

const YourComponent: React.FC = () => (
  <>
    <Head>
      <link rel="stylesheet" href="https://voltichange.net/css/widget.css" />
    </Head>

    {/* Neon text */}
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", flexDirection: "column", position: "absolute", top: 0, left: 0, right: 0, bottom: 0 }}>
      <h1 style={{ fontSize: "3rem", fontFamily: "Arial, sans-serif", textShadow: "0 0 10px #00fff4, 0 0 20px #00fff4, 0 0 30px #00fff4, 0 0 40px #00fff4", marginBottom: "20px" }}>
        Burn $GrokLabs with $Voltichange!
      </h1>

      {/* Text about transaction burn */}
      <p style={{ fontSize: "1.5rem", fontFamily: "Arial, sans-serif", color: "#fff", textAlign: "center", maxWidth: "600px", margin: "0 auto", marginBottom: "40px" }}>
        Each transaction burns 0.25% of $GrokLabs.
        More you transact, the more you will burn.
        Making $GrokLabs Deflationary through VOLT.
      </p>

      {/* Voltichange Widget with neon glow effect */}
      <div style={{ boxShadow: "0 0 20px #00fff4, 0 0 40px #00fff4, 0 0 60px #00fff4, 0 0 80px #00fff4", borderRadius: "10px", overflow: "hidden" }}>
        <iframe
          src="https://voltichange.net/api/widget/?chain=56&darktheme=true&tokenin=Native&tokenout=0xce3559f5B5fc02b1cEc6212D1FCEC65E080D8C66&slippage=1"
          frameBorder="0"
          className="voltichange-widget"
        ></iframe>
      </div>
    </div>

    {/* END OF VOLTICHANGE WIDGET CODE */}
  </>
);

export default YourComponent;
