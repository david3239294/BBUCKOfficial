import {
  faChartPie,
  faCubes,
  faHouseChimney,
  faMusic,
  faPenFancy,
  faSignature,
  faStop,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/link";
import { useState } from "react";
import useSound from "use-sound";
import Equalizer from "./Equalizer";
import { FontAwesomeObj } from "./FontAwesomeObj";
import Socials from "./Socials";

const Navbar = () => {
  const menu = [
    { name: "Home", href: "/", icon: faHouseChimney },
    { name: "About", href: "/about", icon: faStop },
    { name: "RoadMap", href: "/work", icon: faChartPie },
    { name: "Whitepaper", href: "/projects", icon: faPenFancy },
    { name: "Tokenomics", href: "/contact", icon: faCubes },
    { name: "Audit+KYC", href: "/Audit", icon: faStop },
    { name: "Nfts", href: "/Nft", icon: faCubes },
    { name: "Our Partners", href: "/Partners", icon: faCubes },
    { name: "Voltichange", href: "/Burn", icon: faCubes },
    { name: "MiniGame", href: "/Game", icon: faCubes },
    { name: "Meet The Team", href: "/Meet", icon: faMusic },
  ];
  const bgMusicSfx = "./sounds/RoadsideFlowers.mp3";
  const [isShownHoverContent, setIsShownHoverContent] = useState<boolean>(false);
  const [isHovering, setIsHovering] = useState<boolean>(false);
  const [isPlaying, setIsPlaying] = useState<boolean>(false);
  const [playBGM, { stop: stopBGM }] = useSound(bgMusicSfx, { volume: 0.25 });
  return <>
    <div
      className="h-screen flex flex-col gap-3 absolute sidebar-container z-[4000] backdrop-blur-sm"
      onMouseEnter={() => setIsShownHoverContent(true)}
      onMouseLeave={() => setIsShownHoverContent(false)}
    >
      <button
        onClick={() => {
          isPlaying ? stopBGM() : playBGM();
          setIsPlaying(!isPlaying);
        }}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
        id="music"
        aria-label="Music"
      >
        {isPlaying ? (
          isHovering ? (
            <FontAwesomeObj
              icon={faStop}
              brandColor="cyan"
              size="2x"
              className="flex items-center justify-center w-full sidebar-icon"
            />
          ) : (
            <Equalizer />
          )
        ) : (
          <FontAwesomeObj
            icon={faMusic}
            brandColor="cyan"
            size="2x"
            className="flex items-center justify-center w-full sidebar-icon"
          />
        )}
      </button>
      <div className="w-full logo h-36"></div>
      <div className="gap-0">
        {menu.map(item => {
          return (
            <div key={item.name} className="flex justify-start sidebar-item">
              <Link
                href={item.href}
                className="flex flex-row gap-3 text-white hover:text-cyan-300">
                <div className="flex justify-start">
                  <FontAwesomeObj
                    icon={item.icon}
                    brandColor="cyan"
                    title={item.name}
                    titleClassName="sidebar-title pl-2 font-semibold"
                    size="xs"
                    className="sidebar-icon"
                  />
                </div>
              </Link>
            </div>
          );
        })}
      </div>
      {isShownHoverContent && <Socials />}
      <div className="fixed flex flex-row items-center justify-between gap-2 pl-3 text-2xl bottom-2">
        &copy;
        {isShownHoverContent && (
          <div className="flex flex-col">
            <div className="text-xs">GrokLabs</div>
            <div className="flex items-end justify-start gap-1 text-xs align-baseline"> <div style={{ fontSize: "0.6rem" }}>2023</div></div>
          </div>
        )}
      </div>
    </div>
  </>;
};

export default Navbar;

