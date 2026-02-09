# Guia de Componentes shadcn/ui

Este projeto agora usa **shadcn/ui** - um sistema de componentes baseado em **Radix UI** e **Tailwind CSS**.

## 🎯 O que é shadcn/ui?

shadcn/ui não é uma biblioteca npm tradicional. Os componentes são **copiados para o seu projeto**, dando total controle sobre o código. Você pode modificar qualquer componente conforme necessário.

## 📦 Componentes Instalados

### Button
Botão reutilizável com variantes e tamanhos.

```tsx
import { Button } from "@/components/ui/button"

// Variantes
<Button variant="default">Default</Button>
<Button variant="destructive">Destructive</Button>
<Button variant="outline">Outline</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="link">Link</Button>

// Tamanhos
<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>
<Button size="icon">Icon</Button>

// Com ícone
<Button>
  <Plus className="mr-2 h-4 w-4" />
  Add Item
</Button>
```

### Input
Campo de entrada de texto.

```tsx
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

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
import { Textarea } from "@/components/ui/textarea"

<Textarea 
  placeholder="Digite suas anotações..."
  rows={4}
/>
```

### Label
Labels para formulários (usa Radix UI).

```tsx
import { Label } from "@/components/ui/label"

<Label htmlFor="name">Nome</Label>
```

### Card
Componente de cartão para agrupar conteúdo.

```tsx
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Título do Card</CardTitle>
    <CardDescription>Descrição</CardDescription>
  </CardHeader>
  <CardContent>
    Conteúdo principal
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>
```

### Dialog (Radix UI)
Modal/Dialog para interações.

```tsx
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"

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
      <DialogClose asChild>
        <Button variant="outline">Cancelar</Button>
      </DialogClose>
      <Button>Confirmar</Button>
    </DialogFooter>
  </DialogContent>
</Dialog>
```

### Select (Radix UI)
Componente de seleção dropdown.

```tsx
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

<Select>
  <SelectTrigger>
    <SelectValue placeholder="Selecione..." />
  </SelectTrigger>
  <SelectContent>
    <SelectItem value="1">Opção 1</SelectItem>
    <SelectItem value="2">Opção 2</SelectItem>
    <SelectItem value="3">Opção 3</SelectItem>
  </SelectContent>
</Select>
```

## 📝 React Hook Form (Integração)

### Uso com shadcn/ui Components

```tsx
"use client"

import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

type FormData = {
  name: string
  email: string
}

export function MyForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>()

  function onSubmit(data: FormData) {
    console.log(data)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <div className="space-y-2">
        <Label htmlFor="name">Nome</Label>
        <Input
          id="name"
          {...register("name", {
            required: "Nome é obrigatório",
          })}
        />
        {errors.name && (
          <p className="text-sm text-destructive">
            {errors.name.message}
          </p>
        )}
      </div>

      <Button type="submit">Enviar</Button>
    </form>
  )
}
```

## 🎨 Estilos e Temas

shadcn/ui usa **CSS Variables** para temas. As cores estão definidas em `app/globals.css`:

```css
@layer base {
  :root {
    --background: 0 0% 100%;
    --foreground: 0 0% 3.9%;
    --primary: 0 0% 9%;
    --primary-foreground: 0 0% 98%;
    /* ... mais variáveis */
  }

  .dark {
    --background: 0 0% 3.9%;
    --foreground: 0 0% 98%;
    --primary: 0 0% 98%;
    --primary-foreground: 0 0% 9%;
    /* ... mais variáveis */
  }
}
```

### Classes Utilitárias

Os componentes usam as variáveis CSS em vez de cores diretas:

```tsx
// ❌ Evite
<div className="bg-gray-100 text-gray-900">

// ✅ Use
<div className="bg-background text-foreground">
<div className="bg-primary text-primary-foreground">
<div className="bg-muted text-muted-foreground">
```

## 🚀 Adicionar Novos Componentes

Para adicionar mais componentes shadcn/ui ao projeto:

```bash
# Adicionar um componente específico
npx shadcn@latest add [component-name]

# Exemplos:
npx shadcn@latest add dropdown-menu
npx shadcn@latest add popover
npx shadcn@latest add toast
npx shadcn@latest add form
npx shadcn@latest add table
npx shadcn@latest add tabs
```

## 📚 Componentes Disponíveis

Visite [ui.shadcn.com](https://ui.shadcn.com) para ver todos os componentes disponíveis:

- Accordion
- Alert Dialog
- Avatar
- Badge
- Checkbox
- Combobox
- Command
- Context Menu
- Data Table
- Date Picker
- Dropdown Menu
- Form
- Popover
- Progress
- Radio Group
- ScrollArea
- Sheet
- Skeleton
- Slider
- Switch
- Table
- Tabs
- Toast
- Toggle
- Tooltip
- E muito mais!

## 🎯 Vantagens do shadcn/ui

✅ **Total controle** - Código no seu projeto, não em node_modules  
✅ **Customização fácil** - Modifique qualquer componente  
✅ **Acessibilidade** - Baseado em Radix UI (ARIA completo)  
✅ **TypeScript** - Tipagem completa  
✅ **Dark mode** - Suporte nativo via CSS variables  
✅ **Tailwind CSS** - Estilização familiar  
✅ **Zero JS** - Componentes leves quando possível  

## 🔧 Configuração

Arquivo `components.json`:

```json
{
  "$schema": "https://ui.shadcn.com/schema.json",
  "style": "new-york",
  "rsc": true,
  "tsx": true,
  "tailwind": {
    "config": "tailwind.config.ts",
    "css": "app/globals.css",
    "baseColor": "neutral",
    "cssVariables": true
  },
  "iconLibrary": "lucide",
  "aliases": {
    "components": "@/components",
    "utils": "@/lib/utils"
  }
}
```

## 🔗 Links Úteis

- [shadcn/ui](https://ui.shadcn.com)
- [Radix UI](https://www.radix-ui.com)
- [Lucide Icons](https://lucide.dev)
- [React Hook Form](https://react-hook-form.com)
- [Tailwind CSS](https://tailwindcss.com)
