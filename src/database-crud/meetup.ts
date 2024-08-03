//CRUD operations goes here

//This file should handle all data calls to the "meetup" table in DB

import { db, frame } from "@/db";
import { sql } from "drizzle-orm";

export async function createMeetup(name: string) {
  if (name) {
    return {
      success: true,
    };
  } else throw Error("No .env variables for operator");
}

export const findMeetupById = async (frameId: number) => {
  const existingFrame = await db
    .select()
    .from(frame)
    .where(sql`${frame.id} = ${frameId}`);
  if (existingFrame[0]) {
    return {
      frame: existingFrame[0],
      zoraUrl: `https://zora.co/collect/base:${existingFrame[0].nftTokenAddress}/1`,
    };
  } else {
    return null;
  }
};

export const findMeetupBySlug = async (slug: string) => {
  const existingFrame = await db
    .select()
    .from(frame)
    .where(sql`${frame.slug} = ${slug}`);
  if (existingFrame[0]) {
    return existingFrame[0];
  } else {
    return null;
  }
};
