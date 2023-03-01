import prisma from "@/prisma/client";

export default async function handler(req, res) {
  const { method } = req;

  if (method === "GET") {
    try {
      const postId = req.query.id;
      const data = await prisma.post.findUnique({
        where: {
          id: postId,
        },
      });
      return res.status(200).json(data);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}
