const Layout = ({children, title = "Crypto Tracker"}) => {
    return (
        <div className="layout">
            <Head>
            <title>{title}</title>
            <link rel="icon" href="/favicon.ico" />
            </Head>
        </div>
    )
}