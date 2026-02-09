"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
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

type BookFormData = {
    title: string;
    author: string;
    rating?: number;
    notes?: string;
};

export function AddBookDialog() {
    const [open, setOpen] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm<BookFormData>();

    async function onSubmit(data: BookFormData) {
        console.log("Book data:", data);
        // TODO: Integrar com API
        setOpen(false);
        reset();
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
                            {...register("title", {
                                required: "Título é obrigatório",
                            })}
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
                            {...register("author", {
                                required: "Autor é obrigatório",
                            })}
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
                            {...register("rating", {
                                min: { value: 1, message: "Mínimo 1" },
                                max: { value: 5, message: "Máximo 5" },
                            })}
                        />
                        {errors.rating && (
                            <p className="text-sm text-destructive">
                                {errors.rating.message}
                            </p>
                        )}
                    </div>

                    <DialogFooter>
                        <DialogClose asChild>
                            <Button type="button" variant="outline">
                                Cancelar
                            </Button>
                        </DialogClose>
                        <Button type="submit">Adicionar</Button>
                    </DialogFooter>
                </form>
            </DialogContent>
        </Dialog>
    );
}
