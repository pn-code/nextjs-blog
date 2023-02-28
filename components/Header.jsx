import React from "react";
import Head from "next/head";

const Header = () => {
    return (
        <Head>
            <title>pncode Blog</title>
            <meta
                name="description"
                content="Created using NextJS, Bootstrap, and PostgreSQL"
            />
            <meta
                name="viewport"
                content="width=device-width, initial-scale=1"
            />
            <link rel="icon" href="/favicon.ico" />
        </Head>
    );
};

export default Header;
