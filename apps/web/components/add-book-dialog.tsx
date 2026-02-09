"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import {
    Dialog,
    DialogTrigger,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogClose,
    DialogFooter,
} from "./ui/dialog";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { api } from "../lib/api";
import { bookSchema } from "../schemas/schemas";
import type { z } from "zod";

type BookFormData = z.infer<typeof bookSchema>;

export function AddBookDialog() {
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<BookFormData>({
        resolver: zodResolver(bookSchema),
    });

    const addBookMutation = useMutation({
        mutationFn: async (data: BookFormData) => {
            return await api.post("books", { json: data }).json();
        },
        onSuccess: () => {
            setOpen(false);
            reset();
            // TODO: Invalidar cache e atualizar lista de livros
        },
    });

    async function onSubmit(data: BookFormData) {
        addBookMutation.mutate(data);
    }

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <Button size="lg">Adicionar Livro</Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Adicionar Novo Livro</DialogTitle>
                    <DialogDescription>
                        Preencha as informações do livro que deseja adicionar à sua coleção.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    <div className="space-y-2">
                        <Label htmlFor="title">Título *</Label>
                        <Input
                            id="title"
                            placeholder="O Senhor dos Anéis"
                            {...register("title")}
                        />
                        {errors.title && (
                            <p className="text-sm text-destructive">
                                {errors.title.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="author">Autor *</Label>
                        <Input
                            id="author"
                            placeholder="J.R.R. Tolkien"
                            {...register("author")}
                        />
                        {errors.author && (
                            <p className="text-sm text-destructive">
                                {errors.author.message}
                            </p>
                        )}
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="notes">Anotações</Label>
                        <Textarea
                            id="notes"
                            placeholder="Suas anotações sobre o livro..."
                            {...register("notes")}
                        />
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="rating">Avaliação (1-5)</Label>
                        <Input
                            id="rating"
                            type="number"
                            min="1"
                            max="5"
                            placeholder="5"
                            {...register("rating", { valueAsNumber: true })}
                        />
                        {errors.rating && (
                            <p className="text-sm text-destructive">
                                {errors.rating.message}
                            </p>
                        )}
                    </div>

                    {addBookMutation.error && (
                        <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                            <p className="text-sm text-destructive">
                                Erro ao adicionar livro. Tente novamente.
                            </p>
                        </div>
                    )}

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button
                                type="button"
                                variant="outline"
                                disabled={addBookMutation.isPending}
                            >
                                Cancelar
                            </Button>
                        </DialogClose>
                        <Button
                            type="submit"
                            disabled={addBookMutation.isPending}
                        >
                            {addBookMutation.isPending ? "Adicionando..." : "Adicionar"}
                        </Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
