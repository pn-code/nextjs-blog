import prisma from "@/prisma/client";

export default async function handler(req, res) {
    const { method } = req;
    const postId = req.query.id;

    if (method === "GET") {
        try {
            const data = await prisma.post.findUnique({
                where: {
                    id: postId,
                },
                include: { comments: true },
            });
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    } else if (method === "DELETE") {
        try {
            const data = await prisma.post.delete({
                where: {
                    id: postId,
                },
                include: { comments: true },
            });
            res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
