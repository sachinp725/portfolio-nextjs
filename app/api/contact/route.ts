import { NextResponse } from "next/server";

const { Client } = require("@notionhq/client");

const notion = new Client({
  auth: process.env.NOTION_API_TOKEN,
});

type Data = {
  msg: string;
};

type RequestModel = {
  name: string;
  email: any;
  subject: string;
  message: string;
};

export async function POST(request: Request) {
  try {
    const json = (await request.json()) as RequestModel;
    console.log(json);
    console.log(process.env.NOTION_DATABASE_ID);

    await notion.pages.create({
      parent: {
        database_id: process.env.NOTION_DATABASE_ID,
      },
      properties: {
        Name: {
          title: [
            {
              text: {
                content: json.name,
              },
            },
          ],
        },
        Email: { email: json.email },
        Subject: {
          rich_text: [
            {
              text: {
                content: json.subject,
              },
            },
          ],
        },
        Message: {
          rich_text: [
            {
              text: {
                content: json.message,
              },
            },
          ],
        },
      },
    });
    return new NextResponse("OK", {
      status: 201,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error: any) {
    console.log(error);
    return new NextResponse("Failed", { status: 500 });
  }
}
