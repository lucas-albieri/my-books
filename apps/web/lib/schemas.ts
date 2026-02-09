import { z } from "zod";

export const loginSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;

export const bookSchema = z.object({
    title: z.string().min(1, "Título é obrigatório"),
    author: z.string().min(1, "Autor é obrigatório"),
    notes: z.string().optional(),
    rating: z.number().min(1, "Mínimo 1").max(5, "Máximo 5").optional(),
});

export type BookFormData = z.infer<typeof bookSchema>;
