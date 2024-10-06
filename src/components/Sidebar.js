"use client";

import { useState } from "react";
import { ScrollArea, Box } from "@mantine/core";
import Link from "next/link"; // Importing Link
import {
  FaCut,
  FaEraser,
  FaMicroscope,
  FaMicrophone,
  FaFlag,
  FaSignOutAlt,
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
  const [active, setActive] = useState("Cutter"); // Default active link
  const links = data.map((item) => (
    <Link href={item.link} key={item.label} style={{ textDecoration: "none" }}>
      <div
        className={classes.link}
        data-active={item.label && active ? item.label === active : undefined}
        onClick={() => setActive(item.label)} // Set active link on click
      >
        <item.icon className={classes.linkIcon} stroke={1.5} />
        <span>{item.label}</span>
      </div>
    </Link>
  ));

  return (
    <nav className={classes.navbar}>
      <div className={classes.navbarMain}>
        <ScrollArea
          w={100}
          h={400}
          type="always"
          offsetScrollbars
          scrollbarSize={8} // Use Mantine's prop to control scrollbar size
        >
          <Box w={100}>{links}</Box>
        </ScrollArea>
      </div>

      <div className={classes.footer}>
        <Link href="/support">
          <div className={classes.link}>
            <FaQuestionCircle className={classes.linkIcon} />
            <span>Support</span>
          </div>
        </Link>

        <Link href="#">
          <div className={classes.link}>
            <FaFlag className={classes.linkIcon} />
            <span>India</span>
          </div>
        </Link>

        <Link href="#">
          <div className={classes.link}>
            <FaSignOutAlt className={classes.linkIcon} />
            <span>Logout</span>
          </div>
        </Link>
      </div>
    </nav>
  );
};
