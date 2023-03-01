import Header from "@/components/Header";
import Feed from "@/components/Feed";

export default function Home({ admin }) {
    return (
        <>
            <Header />
            <Feed admin={admin} />
        </>
    );
}

export const getServerSideProps = async (ctx) => {
    const myCookie = ctx.req?.cookies || "";
    let admin = false;

    if (myCookie.token === process.env.TOKEN) {
        admin = true;
    }

    return {
        props: {
            admin,
        },
    };
};
