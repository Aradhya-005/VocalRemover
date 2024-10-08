import { Open_Sans } from '@next/font/google';
import "./globals.css";
import '@mantine/core/styles.css';

import React from 'react';
import { ColorSchemeScript, MantineProvider } from '@mantine/core';
import { CollapseDesktop } from "../components/CollapseDesktop";

const openSans = Open_Sans({
  weight: ['400', '700'], // Specify the font weights you need
  subsets: ['latin'], // Specify the subsets you need
});


export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
      </head>
      <body className={openSans.className}>
        <MantineProvider withGlobalStyles withNormalizeCSS>
          <div style={{ backgroundColor: "#17171e", minHeight: "100vh" }}>
            <CollapseDesktop>
              {children}
            </CollapseDesktop>
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}
