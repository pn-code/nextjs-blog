import prisma from "@/prisma/client";

export default async function handler(req, res) {
    const { method } = req;
    const { id: commentId } = req.query;

    if (method === "DELETE") {
        const data = await prisma.comment.delete({
            where: { id: commentId },
        });
        res.status(200).json({ success: true, data });
    }
}
