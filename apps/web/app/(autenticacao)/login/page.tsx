"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "../../../components/ui/button";
import { Input } from "../../../components/ui/input";
import { Label } from "../../../components/ui/label";
import { loginSchema, type LoginFormData } from "../../../lib/schemas";

export default function LoginPage() {
    const router = useRouter();

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<LoginFormData>({
        resolver: zodResolver(loginSchema),
    });

    const loginMutation = useMutation({
        mutationFn: async (data: LoginFormData) => {
            const result = await signIn("credentials", {
                email: data.email,
                password: data.password,
                redirect: false,
            });

            if (result?.error) {
                throw new Error("Credenciais inválidas");
            }

            return result;
        },
        onSuccess: () => {
            router.push("/dashboard");
            router.refresh();
        },
    });

    async function onSubmit(data: LoginFormData) {
        loginMutation.mutate(data);
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
                                {...register("email")}
                            />
                            {errors.email && (
                                <p className="text-sm text-destructive">
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
                                {...register("password")}
                            />
                            {errors.password && (
                                <p className="text-sm text-destructive">
                                    {errors.password.message}
                                </p>
                            )}
                        </div>

                        {loginMutation.error && (
                            <div className="p-3 rounded-lg bg-destructive/10 border border-destructive/20">
                                <p className="text-sm text-destructive">
                                    {loginMutation.error.message}
                                </p>
                            </div>
                        )}

                        <Button
                            type="submit"
                            disabled={loginMutation.isPending}
                            className="w-full"
                        >
                            {loginMutation.isPending ? "Entrando..." : "Entrar"}
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
