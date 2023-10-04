import { NextApiResponse } from "next";
import { NextRequest  } from "next/server";

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

type Data = {
  msg: string
}

export default async (req: NextRequest, res: NextApiResponse<Data>) => {

  console.log("api..", await req.json());

  if (req.method !== "POST") {
    return res.status(405).json({ msg: "Only POST requests are allowed" });
  }
  try {
    const { name, email, subject, message } = JSON.parse(await req.json());
    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: name,
              },
            },
          ],
        },
        Email: {
          email,
        },
        Subject: {
          rich_text: [
            {
              text: {
                content: subject,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: message,
              },
            },
          ],
        },
      },
    });
    res.status(201).json({ msg: "Success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Failed" });
  }
};

