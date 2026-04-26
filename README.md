# Arena Fitness — Landing Page

**[Ver demo ao vivo →](https://fredpiuma.github.io/gym-finder-pro/)**

Template de landing page para academia com múltiplas unidades. Ideal para colocar um site profissional no ar rapidamente, sem depender de WordPress ou construtores de página.

---

## O que é isso

Um site pronto e configurável para redes de academias. Basta editar um único arquivo de dados (`src/data/units.ts`) para refletir as unidades, horários, planos e preços reais da academia. O restante do site se adapta automaticamente.

**Funcionalidades incluídas:**

- Hero com chamada para ação
- Seletor interativo de unidades
- Página individual por unidade com endereço, horários e mapa incorporado
- Cards de planos com destaque para o plano mais popular
- Página "Quem Somos"
- Página de contato
- Seção de app mobile (mockup substituível)
- Header responsivo com menu lateral
- Dark mode pronto

---

## Unidades de exemplo

O template vem com 10 unidades fictícias de São Paulo pré-configuradas como referência:

Centro · Moema · Pinheiros · Vila Mariana · Santana · Tatuapé · Lapa · Brooklin · Perdizes · Itaim Bibi

---

## Como personalizar

Edite `src/data/units.ts` e substitua os dados fictícios pelos dados reais:

```ts
{
  id: "minha-unidade",
  name: "Minha Academia Centro",
  address: "Rua X, 100 - Centro, Cidade - UF",
  phone: "(11) 99999-0000",
  whatsapp: "(11) 99999-0000",
  email: "contato@minhaacademia.com.br",
  hours: { weekdays: "06:00 - 22:00", saturday: "08:00 - 16:00", sunday: "Fechado" },
  mapEmbed: "URL do embed do Google Maps",
  image: "URL da foto da unidade",
  plans: [ /* seus planos aqui */ ]
}
```

---

## Stack

| Camada | Tecnologia |
| :--- | :--- |
| Frontend | React 18 + TypeScript |
| Build | Vite |
| UI Components | shadcn/ui + Radix UI |
| Estilização | Tailwind CSS |
| Roteamento | React Router DOM v6 |

---

## Rodando localmente

```sh
git clone <URL_DO_REPO>
cd <NOME_DO_PROJETO>
npm install
npm run dev
```

---

## Deploy

O projeto gera arquivos estáticos (`npm run build`), compatíveis com qualquer hospedagem: Vercel, Netlify, VPS com Nginx, etc.

---

<sub>Template desenvolvido por [Frederico Castro](https://www.fredericodecastro.com.br) · [LinkedIn](https://www.linkedin.com/in/fredericodecastro/) · [contato@fredericodecastro.com.br](mailto:contato@fredericodecastro.com.br)</sub>
