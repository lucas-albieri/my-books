# Guia de Componentes UI

Este documento descreve os componentes UI disponíveis no projeto, construídos com Ark UI, Tailwind CSS e React Hook Form.

## 🎨 Componentes Disponíveis

### Button

Botão reutilizável com várias variantes e tamanhos.

```tsx
import { Button } from "@/components/ui/button";

// Variantes
<Button variant="default">Padrão</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secundário</Button>
<Button variant="destructive">Destrutivo</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Tamanhos
<Button size="sm">Pequeno</Button>
<Button size="default">Padrão</Button>
<Button size="lg">Grande</Button>
<Button size="icon">Ícone</Button>

// Estados
<Button disabled>Desabilitado</Button>
<Button loading>Carregando</Button>
```

### Input

Campo de entrada de texto estilizado.

```tsx
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input 
    id="email" 
    type="email" 
    placeholder="seu@email.com"
  />
</div>
```

### Textarea

Área de texto para entradas maiores.

```tsx
import { Textarea } from "@/components/ui/textarea";

<Textarea 
  placeholder="Digite suas anotações..."
  rows={4}
/>
```

### Card

Componente de cartão para agrupar conteúdo.

```tsx
import { 
  Card, 
  CardHeader, 
  CardTitle, 
  CardDescription,
  CardContent, 
  CardFooter 
} from "@/components/ui/card";

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição do conteúdo</CardDescription>
  </CardHeader>
  <CardContent>
    Conteúdo principal aqui
  </CardContent>
  <CardFooter>
    Rodapé com ações
  </CardFooter>
</Card>
```

### Dialog (Ark UI)

Modal/Dialog para interações complexas.

```tsx
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogCloseTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

<Dialog>
  <DialogTrigger asChild>
    <Button>Abrir Dialog</Button>
  </DialogTrigger>
  <DialogContent>
    <DialogHeader>
      <DialogTitle>Título</DialogTitle>
      <DialogDescription>Descrição</DialogDescription>
    </DialogHeader>
    
    {/* Conteúdo */}
    
    <DialogFooter>
      <DialogCloseTrigger asChild>
        <Button variant="outline">Cancelar</Button>
      </DialogCloseTrigger>
      <Button>Confirmar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Select (Ark UI)

Componente de seleção dropdown.

```tsx
import { 
  Select, 
  SelectTrigger, 
  SelectContent, 
  SelectItem 
} from "@/components/ui/select";

<Select>
  <SelectTrigger />
  <SelectContent>
    <SelectItem value="1">Opção 1</SelectItem>
    <SelectItem value="2">Opção 2</SelectItem>
    <SelectItem value="3">Opção 3</SelectItem>
  </SelectContent>
</Select>
```

## 📝 React Hook Form

### Uso Básico

```tsx
"use client";

import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type FormData = {
  name: string;
  email: string;
};

export function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  async function onSubmit(data: FormData) {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          {...register("name", {
            required: "Nome é obrigatório",
            minLength: {
              value: 3,
              message: "Mínimo 3 caracteres",
            },
          })}
        />
        {errors.name && (
          <p className="text-sm text-red-600">{errors.name.message}</p>
        )}
      </div>

      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          {...register("email", {
            required: "Email é obrigatório",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: "Email inválido",
            },
          })}
        />
        {errors.email && (
          <p className="text-sm text-red-600">{errors.email.message}</p>
        )}
      </div>

      <Button type="submit">Enviar</Button>
    </form>
  );
}
```

### Validações Comuns

```tsx
// Obrigatório
{...register("field", { required: "Campo obrigatório" })}

// Tamanho mínimo/máximo
{...register("field", {
  minLength: { value: 3, message: "Mínimo 3 caracteres" },
  maxLength: { value: 20, message: "Máximo 20 caracteres" },
})}

// Padrão (regex)
{...register("email", {
  pattern: {
    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    message: "Email inválido",
  },
})}

// Min/Max para números
{...register("age", {
  min: { value: 18, message: "Idade mínima 18" },
  max: { value: 100, message: "Idade máxima 100" },
})}

// Validação customizada
{...register("password", {
  validate: (value) =>
    value.includes("@") || "Senha deve conter @",
})}
```

## 🎨 Estilização

Todos os componentes usam Tailwind CSS e suportam dark mode automático.

### Classes Utilitárias Customizadas

```tsx
import { cn } from "@/lib/utils";

// Combinar classes condicionalmente
<div className={cn(
  "base-class",
  condition && "conditional-class",
  "another-class"
)}>
```

## 📚 Exemplos Práticos

### Formulário Completo com Dialog

Veja o componente `AddBookDialog` em `/components/add-book-dialog.tsx` para um exemplo completo de:
- Dialog com Ark UI
- Formulário com React Hook Form
- Validações
- Integração com componentes UI

### Página de Login

Veja `/app/(autenticacao)/login/page.tsx` para:
- Formulário de autenticação
- Tratamento de erros
- Estados de loading
- Integração com NextAuth

## 🔗 Links Úteis

- [Ark UI Docs](https://ark-ui.com/)
- [React Hook Form](https://react-hook-form.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [CVA - Class Variance Authority](https://cva.style/)
