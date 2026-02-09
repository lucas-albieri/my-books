import Link from "next/link";
import { LoginForm } from "./_components/login-form";

export default function LoginPage() {
    return (
        <div className="min-h-screen grid lg:grid-cols-[60%_40%]">
            {/* Left side - Inspirational Content */}
            <div className="hidden lg:flex flex-col items-center justify-center p-12 bg-indigo-900 dark:bg-slate-950 relative overflow-hidden">
                {/* Decorative elements */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute top-20 left-20 text-9xl">📖</div>
                    <div className="absolute bottom-32 right-32 text-8xl">📚</div>
                    <div className="absolute top-1/2 left-1/4 text-7xl">📕</div>
                    <div className="absolute bottom-20 left-1/3 text-6xl">📘</div>
                </div>

                {/* Content */}
                <div className="relative z-10 text-white space-y-12 max-w-2xl">
                    <div className="space-y-4">
                        <h2 className="text-5xl font-bold leading-tight">
                            Organize sua biblioteca pessoal
                        </h2>
                        <p className="text-xl text-white/90">
                            Mantenha o controle de todos os seus livros em um só lugar
                        </p>
                    </div>

                    <div className="space-y-6">
                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <p className="text-lg italic text-white/95">
                                "Um livro é um sonho que você segura em suas mãos"
                            </p>
                            <p className="text-sm text-white/70 mt-2">— Neil Gaiman</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <p className="text-lg italic text-white/95">
                                "A leitura de um bom livro é um diálogo incessante"
                            </p>
                            <p className="text-sm text-white/70 mt-2">— Machado de Assis</p>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                            <p className="text-lg italic text-white/95">
                                "Quanto mais você lê, mais coisas você saberá"
                            </p>
                            <p className="text-sm text-white/70 mt-2">— Dr. Seuss</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right side - Form */}
            <div className="min-h-screen w-full flex items-center justify-center p-8 bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
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

                        <LoginForm />

                        <div className="mt-6 text-center">
                            <Link
                                href="/cadastro"
                                className="text-sm text-primary-600 dark:text-primary-400 hover:underline"
                            >
                                Fazer Cadastro
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
