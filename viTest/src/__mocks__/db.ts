import { PrismaClient } from './../generated/prisma';
import { mockDeep, mockReset }  from 'vitest-mock-extended'

export const prismaClient = mockDeep<PrismaClient>()

