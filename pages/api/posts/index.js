import prisma from "@/prisma/client";

export default async function handler(req, res) {
    const { method } = req;

    if (method === "GET") {
        try {
            const data = await prisma.post.findMany({
                orderBy: {
                    createdAt: "desc",
                },
            });
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    } else if (method === "POST") {
        try {
            const { title, content } = req.body;
            // Check if user is authenticated
            if (req.cookies.token === process.env.TOKEN) {
                const data = await prisma.post.create({
                    data: {
                        title,
                        content,
                        authorId: process.env.ADMIN_ID,
                    },
                });
                res.status(200).json({ success: true, data });
            }
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
