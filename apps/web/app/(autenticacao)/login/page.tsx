"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type LoginFormData = {
    email: string;
    password: string;
};

export default function LoginPage() {
    const router = useRouter();
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>();

    async function onSubmit(data: LoginFormData) {
        setLoading(true);
        setError("");

        try {
            const result = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            });

            if (result?.error) {
                setError("Credenciais inválidas");
            } else {
                router.push("/dashboard");
                router.refresh();
            }
        } catch (err) {
            setError("Ocorreu um erro ao fazer login");
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800 px-4">
            <div className="w-full max-w-md">
                <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8">
                    <div className="text-center mb-8">
                        <h1 className="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                            📚 My Books
                        </h1>
                        <p className="text-gray-600 dark:text-gray-400">
                            Entre para gerenciar seus livros
                        </p>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        <div className="space-y-2">
                            <Label htmlFor="email">Email</Label>
                            <Input
                                id="email"
                                type="email"
                                placeholder="seu@email.com"
                                {...register("email", {
                                    required: "Email é obrigatório",
                                    pattern: {
                                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: "Email inválido",
                                    },
                                })}
                            />
                            {errors.email && (
                                <p className="text-sm text-red-600 dark:text-red-400">
                                    {errors.email.message}
                                </p>
                            )}
                        </div>

                        <div className="space-y-2">
                            <Label htmlFor="password">Senha</Label>
                            <Input
                                id="password"
                                type="password"
                                placeholder="••••••••"
                                {...register("password", {
                                    required: "Senha é obrigatória",
                                    minLength: {
                                        value: 6,
                                        message: "Senha deve ter no mínimo 6 caracteres",
                                    },
                                })}
                            />
                            {errors.password && (
                                <p className="text-sm text-red-600 dark:text-red-400">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {error && (
                            <div className="p-3 rounded-lg bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800">
                                <p className="text-sm text-red-600 dark:text-red-400">{error}</p>
                            </div>
                        )}

                        <Button type="submit" disabled={loading} className="w-full">
                            {loading ? "Entrando..." : "Entrar"}
                        </Button>
                    </form>

                    <div className="mt-6 text-center">
                        <Link
                            href="/"
                            className="text-sm text-blue-600 dark:text-blue-400 hover:underline"
                        >
                            Voltar para a página inicial
                        </Link>
                    </div>
                </div>

                <div className="mt-4 text-center text-sm text-gray-600 dark:text-gray-400">
                    <p>Para testar, use qualquer email e senha</p>
                </div>
            </div>
        </div>
    );
}
