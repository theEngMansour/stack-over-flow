import "./globals.css";
import React from "react";
import {ClerkProvider} from "@clerk/nextjs";
// eslint-disable-next-line camelcase
import {IBM_Plex_Sans_Arabic, Inter, Space_Grotesk} from "next/font/google";
import {ThemeProvider} from "@/context/ThemeProvider";
import {Metadata} from "next";

const inter = Inter({
    subsets: ["latin"],
    weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
    variable: "--font-inter",
});

const ibm = IBM_Plex_Sans_Arabic({
    subsets: ["latin"],
    weight: ["100", "200", "300"],
    variable: "--font-ibm",
});

const spaceGrotesk = Space_Grotesk({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
    variable: "--font-spaceGrotesk",
});

export const metadata: Metadata = {
    title: "DevFlow",
    description:
        "A community-driven platform for asking and answering programming questions. Get help, share knowledge, and collaborate with developers from around the world. Explore topics in web development, mobile app development, algorithms, data structures, and more.",
    icons: {
        icon: "/images/site-logo.svg",
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <ClerkProvider
            appearance={{
                elements: {
                    formButtonPrimary: "primary-gradient",
                    footerActionLink: "primary-text-gradient hover:text-primary-500",
                },
            }}
        >
            <html lang="en">
            <body className={`${inter.variable} ${ibm.variable} ${spaceGrotesk.variable}`}>
            <ThemeProvider>{children}</ThemeProvider>
            </body>
            </html>
        </ClerkProvider>
    );
}
