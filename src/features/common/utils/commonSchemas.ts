import { z } from 'zod';

export const commonResponseSchema = z.object({
    success: z.boolean(),
    message: z.string().optional(),
    data: z.string().optional(),
  });