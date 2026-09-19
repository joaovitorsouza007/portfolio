# Portfólio Pessoal — João Vitor Souza da Silva

Portfólio pessoal de desenvolvedor Fullstack, com foco em demonstrar 
trabalho real (projetos, repositórios e demos) para recrutadores 
técnicos e clientes de consultoria.

**Aluno:** João Vitor Souza da Silva — GU3080889
**Link do projeto:** https://portfoliojoaovitorsouza.vercel.app/
**Repositório:** https://github.com/joaovitorsouza007/portfolio

---

## Sobre o projeto

Este portfólio reúne informações pessoais, formação, experiências e 
projetos reais de João Vitor Souza da Silva. O objetivo é ser 
contratado para vagas de desenvolvimento Fullstack e/ou fechar 
consultorias com clientes.

A versão atual (v2) passou por um processo de refinamento com o 
**Impeccable** — ferramenta de análise, orientação e revisão de 
interfaces desenvolvidas com auxílio de agentes de IA. O foco foi 
reduzir o "design slop de IA" (aparência genérica, hierarquia fraca, 
excesso de elementos, ausência de estados).

---

## Versões do portfólio

- **v1** (antes das intervenções do Impeccable):
  - Tag Git: `v1`
  - Sistema visual: dark navy + blue/teal (baseline)
  - Descrição: portfólio inicial, gerado com auxílio de IA, com 
    problemas de contraste, hierarquia e acessibilidade.

- **v2** (após as intervenções do Impeccable):
  - Branch: `V2`
  - Sistema visual: **Proof Ledger** (editorial, claro, 1 acento)
  - Descrição: portfólio refinado, com contraste WCAG corrigido, 
    acessibilidade robusta, hierarquia tipográfica clara, copy 
    honesta e responsividade validada.

---

## Documentação do processo

- [PRODUCT.md](./docs/PRODUCT.md) — contexto do produto (init)
- [DESIGN.md](./docs/DESIGN.md) — sistema visual v2 (document)
- [DESIGN-v1.md](./docs/DESIGN-v1.md) — sistema visual v1 (baseline)
- [Catálogo dos 23 comandos](./docs/catalogo.md) — referência do Impeccable
- [Registros de aplicação](./docs/registros.md) — resumo + registros detalhados

---

## Problema

Eu tenho apenas qualificações formais, mas não tenho projetos que 
demonstrem a minha capacidade técnica reunidos em um local só.

## Objetivo

Conseguir ser valorizado e contratado em vagas de emprego e 
consultorias de clientes.

## Público principal

- **Recrutadores** de empresas que buscam um desenvolvedor Fullstack
- **Clientes** que buscam consultoria em desenvolvimento Fullstack

## Papéis de usuário

- **Autor** — João (operador). Acessa área administrativa oculta 
  (email + senha) para adicionar/editar/excluir projetos, 
  responder/remover depoimentos e ver métricas por navegador.
- **Recrutador** — avalia projetos, stack e clareza para decidir se 
  convida João para uma vaga.
- **Cliente** — avalia confiabilidade, resultados e facilidade de 
  contato.
- **Visitante** — lê projetos, formação, experiências e deixa 
  depoimentos (prova social).

## Cenário real de uso

Ter um lugar para colocar todos os meus projetos e visualizar tudo 
que já fiz de forma dinâmica, e também poder mostrar facilmente para 
as pessoas me conhecerem através do meu trabalho.

## Suposições a validar

1. **Tenho poucos projetos para mostrar.** O portfólio depende de 
   2 projetos shipped; se recrutadores exigirem mais, preciso ampliar.
2. **Como atrair clientes de consultoria?** O site não tem canal 
   ativo de aquisição — depende de tráfego orgânico/LinkedIn.
3. **Recrutadores vão acessar o site?** O site é passivo; precisa 
   estar linkado em candidaturas, LinkedIn e e-mail de contato.

---

## Tecnologias

- HTML5
- CSS3 (organizado em camadas: tokens → base → componentes → seções)
- JavaScript (ES6+)
- Bootstrap 5 + Bootstrap Icons (local, sem CDN)
- Google Fonts (Inter + Space Grotesk)
- Sem build step, sem package manager
- Persistência frontend-only (localStorage)

---

## Estrutura do projeto
portfolio/
├── index.html # v2 (após intervenções)
├── css/
│ └── style.css # reorganizado em camadas (extract)
├── js/
│ └── script.js
├── assets/
│ ├── hero.jpg
│ ├── foto-perfil.jpg
│ ├── finview-capa.jpg
│ ├── graziela-capa.jpg
│ ├── favicon.svg
│ ├── apple-touch-icon.png
│ └── CvJoao.pdf
├── docs/
│ ├── PRODUCT.md # contexto do produto (init)
│ ├── DESIGN.md # sistema visual v2 (document)
│ ├── DESIGN-v1.md # sistema visual v1 (baseline)
│ ├── catalogo.md # catálogo dos 23 comandos do Impeccable
│ └── registros.md # resumo + registros detalhados
├── v1/ # (opcional) cópia congelada da v1
│ ├── index.html
│ ├── css/
│ └── js/
└── README.md
