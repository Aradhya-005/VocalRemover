"use client";

import { useState } from "react";
import { ScrollArea, Box } from "@mantine/core";
import flag from '../assets/flag.png';
import Image from "next/image";
import Link from "next/link"; 
import {
  FaCut,
  FaEraser,
  FaMicroscope,
  FaMicrophone,
  FaQuestionCircle,
} from "react-icons/fa"; // React Icons
import { RiAlbumFill } from "react-icons/ri"; // Importing the new icon
import classes from "../styles/NavbarSimple.module.css";

const data = [
  { link: "/", label: "Remover", icon: FaEraser },
  { link: "/cutter", label: "Cutter", icon: FaCut },
  { link: "/joiner", label: "Joiner", icon: FaMicroscope },
  { link: "/karaoke", label: "Karaoke", icon: RiAlbumFill },
  { link: "/recorder", label: "Recorder", icon: FaMicrophone },
  { link: "/pitcher", label: "Pitcher", icon: FaMicroscope },
];

export const Sidebar = () => {
  const [active, setActive] = useState("/"); 

  const links = data.map((item) => (
    <Link href={item.link} key={item.label} style={{ textDecoration: "none" }}>
      <div
        className={classes.link}
        data-active={item.link === active ? true : undefined} // Set data-active to true only if the link matches the active link
        onClick={() => setActive(item.link)} // Set active link on click
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </div>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
      <Box
  w={100}
  h={430}
  style={{
    overflowY: 'scroll', 
    scrollbarWidth: 'thin', 
    scrollbarColor: ' #665DC3 #1c1c26',
  }}
>
  <style jsx>{`
    div::-webkit-scrollbar {
      width: 10px; 
    }

    div::-webkit-scrollbar-track {
      background: #665DC3; 
    }

    div::-webkit-scrollbar-thumb {
      background-color: #665DC3; /* Scrollbar thumb color */
      border-radius: 10px; /* Rounded scrollbar thumb */
      border: 2px solid #1c1c26; /* Padding around scrollbar thumb */
    }

    div::-webkit-scrollbar-thumb:hover {
      background-color: #aaa; /* Thumb hover color */
    }
  `}</style>

  
  {links} 
</Box>

      </div>

      <div className={classes.footer}>
        <Link  href="/support" style={{
          textDecoration:'auto'
        }}>
          <div className={classes.link}>
            <FaQuestionCircle className={classes.linkIcon} />
            <span>Support</span>
          </div>
        </Link>

        <Link href="#" className='link'>
          <div className={classes.link}>
            <Image
              src={flag}
              alt="Indian flag"
              width={35} // Set the width and height to match the icons
              height={35}
            />
          </div>
        </Link>
      </div>
    </nav>
  );
};
