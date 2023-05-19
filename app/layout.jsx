import '@styles/globals.css';

export const metadata = {
    title: "[OPT-OUT-ALL]",
    description: "What's decided will happen."
}

const RootLayout = ( {children} ) => {
    
    return (
        <>
        <html lang="en">
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