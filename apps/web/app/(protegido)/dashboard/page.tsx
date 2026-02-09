import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
    const session = await auth();

    if (!session) {
        redirect("/login");
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 dark:from-gray-900 dark:to-gray-800">
            <header className="w-full border-b bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold font-heading text-gray-800 dark:text-white">
                        📚 My Books
                    </h1>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600 dark:text-gray-300">
                            {session.user?.email}
                        </span>
                        <form action="/api/auth/signout" method="POST">
                            <button
                                type="submit"
                                className="px-4 py-2 rounded-lg border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                            >
                                Sair
                            </button>
                        </form>
                    </div>
                </div>
            </header>

            <main className="container mx-auto px-4 py-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                        Dashboard
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300">
                        Bem-vindo ao seu gerenciador de livros
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-gray-600 dark:text-gray-400 font-medium">
                                Total de Livros
                            </h3>
                            <div className="text-3xl">📚</div>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">0</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-gray-600 dark:text-gray-400 font-medium">
                                Lendo
                            </h3>
                            <div className="text-3xl">📖</div>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">0</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-gray-600 dark:text-gray-400 font-medium">
                                Lidos
                            </h3>
                            <div className="text-3xl">✅</div>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">0</p>
                    </div>

                    <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg">
                        <div className="flex items-center justify-between mb-4">
                            <h3 className="text-gray-600 dark:text-gray-400 font-medium">
                                Para Ler
                            </h3>
                            <div className="text-3xl">📋</div>
                        </div>
                        <p className="text-3xl font-bold text-gray-900 dark:text-white">0</p>
                    </div>
                </div>

                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
                    <div className="text-center py-12">
                        <div className="text-6xl mb-4">📚</div>
                        <h3 className="text-2xl font-bold font-heading text-gray-900 dark:text-white mb-2">
                            Nenhum livro ainda
                        </h3>
                        <p className="text-gray-600 dark:text-gray-300 mb-6">
                            Comece adicionando seu primeiro livro à coleção
                        </p>
                        <button className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors shadow-lg hover:shadow-xl">
                            Adicionar Livro
                        </button>
                    </div>
                </div>
            </main>
        </div>
    );
}
