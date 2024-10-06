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
import { useMantineTheme } from "@mantine/core";

import classes from "../styles/NavbarSimple.module.css";

const data = [
  { link: "/remover", label: "Remover", icon: FaEraser },
  { link: "/cutter", label: "Cutter", icon: FaCut },
  { link: "/joiner", label: "Joiner", icon: FaMicroscope },
  { link: "/karaoke", label: "Karaoke", icon: RiAlbumFill },
  { link: "/recorder", label: "Recorder", icon: FaMicrophone }, // Assuming same icon for different usage
  { link: "/pitcher", label: "Pitcher", icon: FaMicroscope }, // Replace with appropriate icon
];

export const Sidebar = () => {
  const [active, setActive] = useState("Cutter"); // Default active link
  const theme = useMantineTheme();

  const links = data.map((item) => (
    <Link href={item.link} key={item.label} styles = {{textDecoration:"none",}}>
      <div
        className={classes.link}
        data-active={item?.label && active ? item.label === active : undefined}

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
          scrollbars="y"
          type="always"
          offsetScrollbars
          styles={{
            scrollbar: {
              background: "#665dc3",
              '&[data-orientation="vertical"] .mantine-ScrollArea-thumb': {
                backgroundColor: theme.colors.blue[6], // Purple scrollbar color for vertical
              },
            },
            corner: {
              opacity: 1,
              background: "#f0f0f0", // Neutral color for the corner
            },
          }}
        >
          <Box w={100}>{links}</Box>
        </ScrollArea>
      </div>

      <div className={classes.footer}>
        <Link href="/support">
          <div className={classes.link}>
            <FaQuestionCircle className={classes.linkIcon} />
            <span styles={{textDecoration:"none"}}>Support</span>
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

// export default Sidebar;
