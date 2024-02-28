import Head from 'next/head';
import { NextPage } from 'next';

const SplineObj: NextPage = () => {
  return (
    <>
      <Head>
        <title>Home | GrokLabs</title>
        <meta
          name="google-site-verification"
          content="J9uDTeg3iujyef0pzqJ7s7xDlmizshJEn0767--L3nA"
        />
        <meta name="description" content="Home | GrokLabs" />
        <style>
          {`
            body, html {
              margin: 0;
              padding: 0;
              height: 100%;
              display: flex;
              justify-content: center;
              align-items: center;
            }

            #spline-container {
              width: 70vw;
              height: 100vh;
              max-width: 1200px;
              max-height: 800px;
              display: flex;
              flex-wrap: wrap;
              justify-content: space-between;
              margin: 0 auto; /* Center horizontally */
            }

            .rotating-text-container {
              display: flex;
              align-items: center;
              justify-content: center;
              width: 100%;
              height: 50vh;
              background-color: black;
            }

            .rotating-text {
              font-size: 48px;
              animation: neonWave 2s infinite linear alternate;
              /* Other styles */
            }

            @keyframes neonWave {
              0% {
                color: #00f;
                text-shadow: 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f;
              }
              25% {
                color: #0f0;
                text-shadow: 0 0 10px #0f0, 0 0 20px #0f0, 0 0 30px #0f0;
              }
              50% {
                color: #f00;
                text-shadow: 0 0 10px #f00, 0 0 20px #f00, 0 0 30px #f00;
              }
              75% {
                color: #ff0;
                text-shadow: 0 0 10px #ff0, 0 0 20px #ff0, 0 0 30px #ff0;
              }
              100% {
                color: #00f;
                text-shadow: 0 0 10px #00f, 0 0 20px #00f, 0 0 30px #00f;
              }
            }
         `}
        </style>
      </Head>

      <div id="spline-container">
        {/* Replace video with image */}
      </div>

      <div className="rotating-text-container">
        <div className="rotating-text">Welcome To Groks Laboratory!</div>
      </div>

      <div id="new-website-container">
        {/* Use an iframe to show another website */}
        <iframe src="https://65dfab76125a317618823451--prismatic-pixie-68e742.netlify.app" title="GrokBot.AI" style={{ width: '95%', height: '750px', border: '0px', marginLeft: '4%' }}></iframe>
      </div>
    </>
  );
};

export default SplineObj;
