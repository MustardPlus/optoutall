"use client";
import '@styles/globals.css';
import Head from 'next/head';
import { useEffect } from 'react'

export const metadata = {
    title: "[OPT-OUT-ALL]",
    description: "What's decided will happen."
}

const RootLayout = ( {children} ) => {
    const onScroll = () => {
        let cbg = document.getElementById("cbg");
        let trigger = document.getElementById("fronter");
        
        let elementTop = trigger.getBoundingClientRect().top;
        let mark1 = -80;
    
        if (elementTop < mark1) {
            cbg.classList.add("bg_view2");
            cbg.classList.remove("bg_view1");
        } else {
            cbg.classList.add("bg_view1");
            cbg.classList.remove("bg_view2");
        }
    }
    
    useEffect(() => {
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    });

    return (
        <>
        <html lang="en">
            <Head>
                <title>[OPT-OUT-ALL]</title>
            </Head>
            <body>
                <main className="app">
                    {children}
                </main>
            </body>
        </html>
        </>
    );
}

export default RootLayout;