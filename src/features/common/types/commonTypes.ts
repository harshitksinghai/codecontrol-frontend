import { z } from 'zod';
import { commonResponseSchema } from '../utils/commonSchemas';

export type ExpectedCommonResponse = z.infer<typeof commonResponseSchema>;
export type CommonResponse = z.infer<typeof commonResponseSchema>;

