import prisma from "@/prisma/client";

export default async function handler(req, res) {
    const { method } = req;

    if (method === "GET") {
    } else if (method === "POST") {
        const { author, content, postId } = req.body;
        const data = await prisma.comment.create({
            data: {
                author,
                content,
                postId,
            },
        });
        res.status(200).json({ success: true, data });
    }
}
