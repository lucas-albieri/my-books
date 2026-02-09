# Guia de Uso: Zod, Ky e TanStack Query

Este projeto utiliza as seguintes bibliotecas para validação, requisições HTTP e gerenciamento de estado:

## 📦 Bibliotecas Instaladas

- **Zod** (`zod`) - Validação de schemas TypeScript-first
- **Ky** (`ky`) - Cliente HTTP moderno baseado em fetch
- **TanStack Query** (`@tanstack/react-query`) - Gerenciamento de estado assíncrono
- **React Hook Form** (`react-hook-form`) - Gerenciamento de formulários
- **Hookform Resolvers** (`@hookform/resolvers`) - Integração entre React Hook Form e Zod

## 🎯 Estrutura do Projeto

### 1. Schemas Zod (`lib/schemas.ts`)

Defina todos os schemas de validação aqui:

```typescript
import { z } from "zod";

export const loginSchema = z.object({
  email: z.string().email("Email inválido"),
  password: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

export type LoginFormData = z.infer<typeof loginSchema>;
```

### 2. Cliente API (`lib/api.ts`)

Configure o cliente Ky com interceptors e configurações globais:

```typescript
import ky from "ky";

export const api = ky.create({
  prefixUrl: "/api",
  timeout: 30000,
  retry: { limit: 2 },
});
```

### 3. Query Provider (`components/providers.tsx`)

Envolve toda a aplicação com o QueryClientProvider:

```typescript
"use client";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(() => new QueryClient());
  
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}
```

## 🔥 Exemplos de Uso

### Formulário com Validação (Login)

```typescript
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { loginSchema, type LoginFormData } from "../lib/schemas";

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormData>({
    resolver: zodResolver(loginSchema),
  });

  const loginMutation = useMutation({
    mutationFn: async (data: LoginFormData) => {
      // Sua lógica de autenticação
      return await signIn("credentials", data);
    },
    onSuccess: () => {
      router.push("/dashboard");
    },
  });

  function onSubmit(data: LoginFormData) {
    loginMutation.mutate(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input {...register("email")} />
      {errors.email && <span>{errors.email.message}</span>}
      
      <button disabled={loginMutation.isPending}>
        {loginMutation.isPending ? "Entrando..." : "Entrar"}
      </button>
      
      {loginMutation.error && (
        <div>Erro: {loginMutation.error.message}</div>
      )}
    </form>
  );
}
```

### Requisição com Ky e useMutation

```typescript
import { useMutation } from "@tanstack/react-query";
import { api } from "../lib/api";
import { bookSchema, type BookFormData } from "../lib/schemas";

const addBookMutation = useMutation({
  mutationFn: async (data: BookFormData) => {
    return await api.post("books", { json: data }).json();
  },
  onSuccess: () => {
    // Invalidar cache, fechar modal, etc.
  },
  onError: (error) => {
    console.error("Erro ao adicionar livro:", error);
  },
});

// Uso
addBookMutation.mutate({
  title: "O Senhor dos Anéis",
  author: "J.R.R. Tolkien",
});
```

### Buscar Dados com useQuery

```typescript
import { useQuery } from "@tanstack/react-query";
import { api } from "../lib/api";

function BooksList() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["books"],
    queryFn: async () => {
      return await api.get("books").json();
    },
  });

  if (isLoading) return <div>Carregando...</div>;
  if (error) return <div>Erro ao carregar livros</div>;

  return (
    <ul>
      {data.map((book) => (
        <li key={book.id}>{book.title}</li>
      ))}
    </ul>
  );
}
```

## 🎨 Padrões do Projeto

1. **Validação**: Sempre use Zod schemas definidos em `lib/schemas.ts`
2. **Formulários**: Use React Hook Form com `zodResolver`
3. **Requisições**: Use o cliente `api` do Ky para todas as chamadas HTTP
4. **Mutações**: Use `useMutation` para operações de escrita (POST, PUT, DELETE)
5. **Queries**: Use `useQuery` para operações de leitura (GET)

## 🐛 DevTools

O React Query DevTools está disponível em desenvolvimento. Acesse através do ícone flutuante no canto inferior da tela.

## 📚 Documentação Oficial

- [Zod](https://zod.dev/)
- [Ky](https://github.com/sindresorhus/ky)
- [TanStack Query](https://tanstack.com/query/latest)
- [React Hook Form](https://react-hook-form.com/)
