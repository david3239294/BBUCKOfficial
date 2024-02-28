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
    
    
    // Add more partners as needed
  ];

  return (
    <>
      <Head>
        <title>Soon | GrokLabs</title>
        <meta
          name="description"
          content="Coming Soon!"
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
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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