import { Prisma } from '@prisma/client';

export const isUniqueConstraintError = (e: any) =>
  e instanceof Prisma.PrismaClientKnownRequestError && e.code === 'P2002';
