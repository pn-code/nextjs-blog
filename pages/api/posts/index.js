import prisma from "@/prisma/client";

export default async function handler(req, res) {
    const { method } = req;

    if (method === "GET") {
        try {
            const data = await prisma.post.findMany();
            return res.status(200).json(data);
        } catch (error) {
            res.status(500).json(error);
        }
    }
}
