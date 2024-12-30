"use client";

import { z } from "zod";

export const formSchema = z.object({
  username: z.string().min(3).max(50),
  email: z.string().email(),
  queries: z.string(),
});

export type formSchemaType = z.infer<typeof formSchema>;
