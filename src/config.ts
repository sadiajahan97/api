import { PrismaClient } from "@prisma/client";

export const prismaClient = new PrismaClient();

export const config = {
  port: process.env.PORT || 3000,
};
