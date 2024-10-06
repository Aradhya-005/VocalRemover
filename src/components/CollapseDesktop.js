"use client";

import { AppShell, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { HiBars3CenterLeft } from "react-icons/hi2";
import { Sidebar } from "./Sidebar"; 
import { usePathname } from "next/navigation"; 
import Remover from "../app/remover/page"; 
import Cutter from "../app/cutter/page";
import Joiner from "../app/joiner/page";
import Karaoke from "../app/karaoke/page";
import Recorder from "../app/recorder/page";
import Pitcher from "../app/pitcher/page";

export const CollapseDesktop = ({ children }) => {
  const [mobileOpened, { toggle: toggleMobile }] = useDisclosure(false);
  const [desktopOpened, { toggle: toggleDesktop }] = useDisclosure(false);
  const pathname = usePathname();

  const components = {
    "/": <Remover />,
    "/cutter": <Cutter />,
    "/joiner": <Joiner />,
    "/karaoke": <Karaoke />,
    "/recorder": <Recorder />,
    "/pitcher": <Pitcher />,
  };

  return (
    <AppShell
      padding="md"
      header={{
        height: 60,
        style: { borderBottom: "none", paddingLeft: "16px" },
      }}
      navbar={{
        width: 100,
        breakpoint: "sm",
        collapsed: { mobile: !mobileOpened, desktop: !desktopOpened },
        style: { borderRight: "1px solid #eaeaea" },
      }}
      style={{ backgroundColor: "#17171e" }} // Ensure background color fills the whole area
    >
      <AppShell.Header
        className="top-header"
        style={{ backgroundColor: "#17171e", borderBottom: "none" }}
      >
        <Button
          onClick={toggleDesktop}
          visibleFrom="sm" // Check if this is correctly applied
          variant="subtle"
          style={{ padding: "2px", margin: "10px 5px" }}
        >
          <HiBars3CenterLeft
            style={{
              color: "var(--mantine-color-gray-2)",
              fontSize: "45px",
            }}
          />
        </Button>
        <Button
          onClick={toggleMobile}
          hiddenFrom="sm" // Check if this is correctly applied
          variant="subtle"
          style={{ padding: 0 }}
        >
          <HiBars3CenterLeft
            style={{
              color: "var(--mantine-color-gray-2)",
              fontSize: "45px",
            }}
          />
        </Button>
      </AppShell.Header>

      <AppShell.Navbar>
        <Sidebar />
      </AppShell.Navbar>

      <AppShell.Main style={{ padding: 0 }}> {/* Ensure no padding */}
        {children || components[pathname] || <div>No content available</div>}
        {/* Fallback content for debugging */}
      </AppShell.Main>
    </AppShell>
  );
};
