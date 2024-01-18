import Head from "next/head";
import { useState } from "react";
import useSound from "use-sound";
import projectsData from "./api/projectsDat";
import { NextPage } from "next";

const Projects: NextPage = () => {
  const [projIndex, setProjIndex] = useState<any>(projectsData[0]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const close = () => setModalOpen(false);
  const open = () => setModalOpen(true);
  const snapSfx = "./sounds/snap.wav";
  const popSfx = "./sounds/pop.wav";
  const [playSnap, { stop: stopSnap }] = useSound(snapSfx, { volume: 0.5 });
  const [playPop] = useSound(popSfx, { volume: 0.5 });

  return (
    <>
      <Head>
        <title>White Paper | GrokLabs</title>
        <meta
          name="description"
          content="White Paper for GrokLabs"
        />
      </Head>
      <style>
        {`
          body {
            margin: 0;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f7f7f7;
          }

          .container {
            width: 100%;
            padding: 50px;
            border-radius: 10px;
            box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
            background-color: #fff;
            text-align: left;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
          }

          h1 {
            text-align: center;
            margin-bottom: 20px;
            font-size: 32px;
            color: #333;
          }

          h2 {
            font-size: 24px;
            color: #333;
            margin-top: 30px;
            margin-bottom: 15px;
            text-align: center;
          }

          p {
            font-size: 16px;
            line-height: 1.6;
            color: #555;
            text-align: center;
          }
        `}
      </style>
      <div className="container">
        <div>
        <h2>Introduction</h2>
          <p>
           GrokLabs emerges as a revolutionary project within the crypto sphere, aiming to redefine the landscape of meme-based tokens. Developed on the principles of decentralization, transparency, and innovation, BBUCK seeks to establish a robust ecosystem that goes beyond traditional meme tokens, offering a secure and sustainable platform for its users.
          </p>
        <h2>Vision and Objectives</h2>
        <p>
  At its core, GrokLabs strives to set new benchmarks for meme-based cryptocurrencies. The primary vision extends beyond merely creating a token; it&apos;s about pioneering a movement that redefines perceptions, encourages creative innovations, and fosters long-term growth within the decentralized ecosystem. BBUCK aims to achieve this by implementing a range of strategies and functionalities that promote community engagement, utility, and technological advancement.
</p>

<h2>Reliability and Security</h2>
<p>
  Security and reliability form the foundation of GrokLabs&apos;s architecture. The project undergoes rigorous security audits conducted by reputable blockchain security firms. Smart contracts are meticulously developed and regularly audited to ensure the integrity and robustness of the ecosystem. Continuous monitoring, bug bounties, and swift response to potential threats are integral parts of GrokLabs&apos;s security measures.
</p>
<h2>Community Involvement and Governance</h2>
<p>
  GrokLabs places immense value on its community, acknowledging that their active participation and contribution are pivotal to the project&apos;s success. The governance model is designed to empower the community, allowing stakeholders to engage in decision-making processes and propose changes or improvements. The community-driven approach ensures inclusivity and fosters a sense of ownership among BBUCK holders.
</p>
<h2>Conclusion</h2>
<p>
  In conclusion, GrokLabs embarks on a journey fueled by a commitment to deliver a secure, reliable, and innovative platform that transcends the limitations of traditional meme projects. By prioritizing community engagement, fostering a culture of innovation, and maintaining technological excellence, GrokLabs aspires to not only make an impact but also set new standards within the decentralized blockchain ecosystem.
</p>
        </div>
      </div>
    </>
  );
};

export default Projects;
