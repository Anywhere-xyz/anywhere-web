import { db, user } from "@/db";
import { sql } from "drizzle-orm";

export const findUserByFid = async (userFid: number) => {
  const existingUser = await db
    .select()
    .from(user)
    .where(sql`${user.fid} = ${userFid}`);
  if (existingUser[0]) {
    return existingUser[0];
  } else {
    return null;
  }
};

export const findUserById = async (userId: number) => {
  const existingUser = await db
    .select()
    .from(user)
    .where(sql`${user.id} = ${userId}`);
  if (existingUser[0]) {
    return existingUser[0];
  } else {
    return null;
  }
};
