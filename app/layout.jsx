import '@styles/global.css';

export const metadate = {
    title: "Prompt Collab",
    description: "Discover & Share AI Prompts"
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
        <body>
            <div className="main">
                <div className="gradient" />
            </div>
            <main className="app">
                {children}
            </main>
        </body>
    </html>
  )
}

export default RootLayout