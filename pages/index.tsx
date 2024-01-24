import Head from 'next/head';
import { NextPage } from 'next';
import { useEffect } from 'react';

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
            body,
            html {
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
              animation: glowText 2s infinite alternate;
              /* Stop rotation */
              animation-play-state: paused;
              /* Other styles */
            }
            @keyframes glowText {
              from {
                color: blue;
                text-shadow: 0 0 10px blue, 0 0 20px blue, 0 0 30px blue;
              }
              to {
                color: red;
                text-shadow: 0 0 10px red, 0 0 20px red, 0 0 30px red;
              }
            }
        `}
        </style>
      </Head>
      <div id="spline-container">
        {/* Replace video with image */}
        <img src="/images/logo.jpg" alt="Description of the image" style={{ width: '100%', height: '100%' }} />
      </div>
      <div className="rotating-text-container">
        <div className="rotating-text">Welcome To Groks Laboratory!</div>
      </div>
    </>
  );
};

export default SplineObj;
