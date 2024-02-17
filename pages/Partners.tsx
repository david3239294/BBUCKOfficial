import React from "react";
import Head from "next/head";
import { NextPage } from "next";

interface Partner {
  name: string;
  image: string;
  websiteLink: string;
  telegramLink: string;
}

const Partners: NextPage = () => {
  const partners: Partner[] = [
    {
      name: "RichPigz",
      image: "/images/RP.jpg", // Replace with your image path
      websiteLink: "Www.CosmicRichPigz.com",
      telegramLink: "https://t.me/Cosmic_Rich_BSC_Pigz",
    },
    {
        name: "The WolfPack",
        image: "/images/Wolf.jpg", // Replace with your image path
        websiteLink: "https://www.the-wolfpack.eu",
        telegramLink: "https://t.me/thewolfpack_bsc",
      },
      {
        name: "High As A Giraffes Ass",
        image: "/images/HAAGA.jpg", // Replace with your image path
        websiteLink: "http://www.highasagiraffesass420.com",
        telegramLink: "https://t.me/HighAsAGiraffesAss_Official",
      },
    // Add more partners as needed
  ];

  return (
    <>
      <Head>
        <title>Partners | GrokLabs</title>
        <meta
          name="description"
          content="Description of your partners or partnerships."
        />
      </Head>

      <div className="flex flex-col items-center justify-center h-screen">
        {/* Banner Image */}
        <img
          src="/images/partner.png"
          alt="Banner Image"
          style={{ maxWidth: "100%", height: "auto" }}
        />

        {/* Partners Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {partners.map((partner, index) => (
            <div key={index} style={{ marginTop: "20px" }}>
              {/* Image with links underneath */}
              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <img
                  src={partner.image}
                  alt={`${partner.name} Logo`}
                  style={{ maxWidth: "100px" }}
                />
                <div style={{ marginTop: "10px" }}>
                  <a
                    href={partner.websiteLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Website
                  </a>
                  {" | "}
                  <a
                    href={partner.telegramLink}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Telegram
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Partners;