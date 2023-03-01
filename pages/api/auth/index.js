import cookie from "cookie";
import prisma from "@/prisma/client";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { username, password } = req.body;
        if (
            username === process.env.ADMIN_USERNAME &&
            password === process.env.ADMIN_PASSWORD
        ) {
            res.setHeader(
                "Set-Cookie",
                cookie.serialize("token", process.env.TOKEN, {
                    maxAge: 60 * 60,
                    sameSite: "strict",
                    path: "/",
                })
            );
            try {
                const data = await prisma.user.findMany();
                res.status(200).json({ success: true, user: data[0] });
            } catch (err) {
                res.status(500).json(err);
            }
        } else {
            res.sendStatus(403);
        }
    }
}
