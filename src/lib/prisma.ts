import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    log : ['query']
})
//Gerador de query como logs