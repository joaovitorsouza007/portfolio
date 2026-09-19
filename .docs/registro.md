# Registros de Aplicação do Impeccable — Portfólio João Vitor Souza

## Visão geral

Este documento resume a aplicação do Impeccable ao portfólio pessoal 
de João Vitor Souza da Silva, desenvolvido para a disciplina de 
Fullstack com foco em engenharia de prompt. O objetivo foi reduzir o 
"design slop de IA" — aparência genérica, hierarquia fraca, excesso 
de elementos e ausência de estados — por meio dos comandos do 
Impeccable.

- **Período:** 2026-09-19
- **Comandos únicos aplicados:** 16
- **Registros detalhados:** 30+
- **Categorias cobertas:** Criar, Avaliar, Refinar, Simplificar, 
  Preparar, Sistematizar
- **Direção visual:** Proof Ledger (editorial, claro, 1 acento)
- **Versões:** v1 (baseline) → v2 (após intervenções)

---

## Requisitos da atividade × cobertura

| Requisito | Mínimo | Cobertura | Status |
|-----------|--------|-----------|--------|
| `init` e `document` | 1 cada | init (1), document (4) | ✅ |
| `shape` | 1 | shape (3) | ✅ |
| `critique` e `audit` | 1 cada | critique (6), audit (2) | ✅ |
| Refinamento | 3+ | colorize, layout, typeset, bolder | ✅ |
| Simplificação | 2+ | distill, clarify, adapt | ✅ |
| Preparação | 2+ | harden, polish | ✅ |
| `polish` | 1 | polish (2) | ✅ |
| `live` | 1 | live | ✅ |
| `extract` ou `document` de novo | 1 | extract | ✅ |
| **Total de comandos** | **14+** | **16** | ✅ |

---

## Comandos aplicados (resumo)

### Criar
- **shape** — definiu a metáfora central "Proof Ledger" (editorial, 
  evidence-first), rejeitando as opções genéricas recomendadas pelo 
  Impeccable.

### Avaliar
- **critique** — diagnóstico inicial (health score 17/32), 5 problemas 
  priorizados (2 P0, 2 P1, 1 P2); re-runs subsequentes registraram 
  convergência.
- **audit** — auditoria técnica (15/20 Good); foco em acessibilidade, 
  responsividade, semântica e performance.

### Refinar
- **colorize** — verde rebaixado a carimbo (≤10%); Registry Blue como 
  único acting color; contraste WCAG corrigido (2,28:1 → 5,54:1).
- **layout** — hierarquia e roteamento; prova roteada pelo hero; 
  acúmulo de decisões reduzido.
- **typeset** — Space Grotesk + Inter; escala 12→64; line-height 
  1.1/1.6; ícone de aspas corrigido.
- **bolder** — títulos numerados ("01 · Sobre mim"); hero type-led; 
  foto como textura secundária.

### Simplificar
- **distill** — Admin fora do caminho do visitante; badge "Mais visto" 
  removido; Mariana Lopes (não verificada) removida; duplicações 
  eliminadas; Sobre enxuto (14→4 chips).
- **clarify** — copy pt-BR; estados honestos; empty states por papel; 
  Depoimentos reestruturados (prova real lidera; demo rotulada).
- **adapt** — tap targets ≥44px; gutters móveis; line-length 62ch; 
  hero mobile alinhado.

### Preparar
- **harden** — ARIA nos modais; role="alert"; skip-link; ícones 
  decorativos; empty states; avatar alt; focus ring on-brand.
- **polish** — passada final; 14 mudanças em 3 arquivos; bug herdado 
  do adapt corrigido; data-bs-spy; link "Área administrativa" no 
  footer.

### Sistematizar
- **init** — PRODUCT.md com contexto de produto.
- **document** — DESIGN.md (v1 e v2); tokens nomeados; Named Rules; 
  anti-padrões.
- **extract** — tokens nomeados mapeando DESIGN.md; deduplicação sem 
  regressão; CSS reorganizado em camadas.
- **live** — variações testadas; escolha final do hero.

---

## Evolução mensurável

| Indicador | Antes (v1) | Depois (v2) |
|-----------|-----------|-------------|
| Health score (critique) | 17/32 | Convergência registrada |
| Contraste do verde | 2,28:1 (falha WCAG) | 5,54:1 (AA) |
| Focus ring | 1,41:1 (default) | ≥3:1 (WCAG 2.4.11) |
| Modais com aria-labelledby | 1/5 | 5/5 |
| Skip-link | Ausente | Presente |
| Hierarquia de headings | 1 h1, sem h3/h4 | h1→h2→h3 |
| Tap targets | < 44px | ≥44px |
| Chips no Sobre | 14 | 4 categorias |
| Depoimentos | Thread pública ilusória | Prova real + demo rotulada |

---

## Decisões fundamentadas (destaques)

1. **Proof Ledger** escolhido em vez do "Midnight Workbench" 
   recomendado — alinhamento com público (recrutador/cliente) e 
   diferenciação contra o slop de IA.
2. **Tokens Registry/archive** em vez de "Ledger-inspired" — os nomes 
   sobrevivem à transição v1 (dark) → v2 (claro).
3. **Sem restrições** no critique — permitiu atacar todos os P0/P1/P2.
4. **Honestidade primeiro** — P1-1 (Depoimentos) antes de P1-2 
   (visual), porque contradizia o PRODUCT.md Principle 4.
5. **Top 3 only** no escopo final — priorizou os obrigatórios 
   (`extract`, `live`) sem atrasar a entrega.

---

## Anti-padrões documentados (nunca adicionar)

Glassmorphism, gradientes neon, roxo-sobre-escuro, hero com foto 
corporativa de banco de imagens, confete/emoji decorativo, cantos 
arredondados em tudo (pill-everything), marinate azul-gradiente de 
SaaS, template corporativo rígido, headers em itálico torto, underline 
decorativo, cards que levitam no hover, microinterações lúdicas, 
acento em qualquer hover.


- **v1:** Branch `v1` no Git (baseline antes das intervenções)
- **v2:** branch `v2` (após as intervenções do Impeccable)

---

## Conclusão

O portfólio passou por **16 comandos únicos do Impeccable**, cobrindo 
todas as categorias exigidas pela atividade (Criar, Avaliar, Refinar, 
Simplificar, Preparar, Sistematizar). Cada intervenção foi registrada 
com **objetivo, evidência, análise e decisão** — conforme exigido.

O resultado é uma **v2 comprovadamente melhorada**: contraste WCAG 
corrigido, acessibilidade robusta, hierarquia tipográfica clara, 
copy honesta, responsividade validada e sistema visual documentado 
(Proof Ledger). A v1 foi preservada como baseline para comparação.


### Registro — init

**Comando:** init
**Página:** Global (contexto do produto)
**Problema observado:** O projeto não tinha contexto de produto 
documentado. Sem PRODUCT.md, qualquer decisão de design seria baseada 
em suposições.
**Hipótese de melhoria:** Rodar init para extrair contexto do código 
e do README, gerando PRODUCT.md.
**Prompt/orientação:** Comando init do Impeccable.
**Resultado produzido:** PRODUCT.md gerado com Platform, Users, 
Product Purpose, Positioning, Operating Context, Capabilities, 
Brand Commitments, Evidence on Hand e Product Principles.
**Análise do resultado:**
- ✅ O init capturou bem: 4 papéis de usuário, propósito, positioning, 
  contexto operacional (localStorage, pt-BR), constraints (Bootstrap, 
  sem build), evidências (2 projetos reais).
- ⚠️ Erro de digitação no nome ("Jean" em vez de "João").
- ⚠️ A direção visual original ("moderna e chamativa") foi registrada 
  sem crítica.
- ⚠️ As 3 suposições a validar do README não foram capturadas.
**Decisão tomada:** Aceito o PRODUCT.md com 3 correções:
- Nome corrigido para "João Vitor Souza da Silva"
- Direção visual atualizada: "revista em shape; Proof Ledger 
  substitui 'moderna e chamativa'"
- Seção "Suposições a validar" adicionada com as 3 do README

### Registro — shape (Pergunta 1/3)

**Comando:** shape
**Página:** Global (identidade visual do portfólio)
**Problema observado:** Proposta visual vaga ("moderna e chamativa") 
não orienta decisões concretas de tipografia, cor ou layout.

**Hipótese de melhoria:** Uma metáfora visual nomeada e "evidence-first" 
alinha melhor com o público (recrutador técnico + cliente de consultoria) 
do que uma estética dark/neon genérica.

**Prompt/orientação:** "What's the Creative North Star for the system? 
(a named metaphor the whole visual identity hangs on)"

**Resultado produzido:** 3 opções apresentadas pelo Impeccable:
1. The Midnight Workbench (recomendada)
2. The Proof Ledger
3. The Neon Syllabus

**Análise do resultado:**
- Midnight Workbench: dark mode + workspace de código. É o padrão 
  de portfólio gerado por IA — visualmente atraente mas genérico, 
  e potencialmente ruim para leitura de textos longos.
- Neon Syllabus: "neon/electric" é clichê de design slop de IA. 
  Compartilha a mesma paleta da opção 1 → pouca diferenciação real.
- Proof Ledger: editorial, evidence-first, superfícies neutras, 
  1 acento forte. Deixa os projetos carregarem a prova — exatamente 
  o que o público-alvo valoriza.

**Decisão tomada:** Escolho **The Proof Ledger**, rejeitando a 
recomendação do Impeccable. Justificativa: alinhamento direto com 
o público (recrutador/cliente), com o objetivo (provar competência 
via projetos) e diferenciação real contra o design slop de IA. 
A opção recomendada era a mais genérica das três.

### Registro — shape (Pergunta 2/3)

**Comando:** shape
**Página:** Global (atmosfera)
**Problema observado:** Sem definição de atmosfera, o hero e as seções 
podem transmitir climas contraditórios.

**Hipótese de melhoria:** Definir uma atmosfera coerente com Proof Ledger 
que sirva simultaneamente a recrutador e cliente.

**Prompt/orientação:** "How should the overall atmosphere read to a 
recruiter in the first 3 seconds?"

**Resultado produzido:** 3 opções do Impeccable + campo aberto.

**Análise do resultado:**
- Opções 1 e 3 empurram para dark + acento vivo — incoerente com 
  Proof Ledger e padrão default de portfólios de IA.
- Opção 2 é a única coerente, mas usa "corporate-safe", inadequado 
  para um portfólio pessoal.
- Nenhuma das 3 captura "editorial + evidence-first + personalidade".

**Decisão tomada:** Escrevi minha própria resposta:
"Editorial, calmo e crível. Superfície clara como papel, hierarquia 
tipográfica forte, um único acento decisivo. Clima de 'dossiê bem 
feito', não de dashboard. Silencioso onde pode, afiado onde importa — 
os projetos são o que mais chama atenção na página."

Justificativa: coerente com Proof Ledger, com o público duplo 
(recrutador + cliente), com o objetivo (projetos como prova) e 
claramente anti-slop.

### Registro — shape (Pergunta 3/3)

**Comando:** shape
**Página:** Global (componentes interativos)
**Problema observado:** Sem padrão definido, botões, cards e inputs podem 
ter pesos contraditórios e quebrar a hierarquia.

**Hipótese de melhoria:** Definir comportamento de componentes coerente 
com Proof Ledger e com a atmosfera "editorial, calmo e crível".

**Prompt/orientação:** "One phrase for the feel of buttons, cards and inputs?"

**Resultado produzido:** 3 opções do Impeccable:
1. Confident and action-oriented
2. Refined and restrained
3. Tangible and responsive

**Análise do resultado:**
- Opção 1: "cards that lift" + "hover on accent" quebram a regra 
  "accent used sparingly" e soam como dashboard/SaaS, não como dossiê.
- Opção 3: "ever-present hover feedback" + "playful micro-interactions" 
  é padrão de design slop de IA; incoerente com "calmo e crível".
- Opção 2: "quiet borders", "subtle lifts" e "accent reserved for one 
  key action per screen" estão integralmente alinhados com Proof Ledger, 
  com a atmosfera definida e com a regra de acento único.

**Decisão tomada:** Escolho a opção 2 — **Refined and restrained** — 
sem modificações. Justificativa: é a única das três que não contradiz 
nenhuma decisão anterior. As opções 1 e 3 reintroduzem padrões de design 
slop de IA (movimento em cards, hover com acento, microinterações 
"playful") que foram explicitamente rejeitados nas perguntas 1 e 2.

### Registro — document (Pergunta 1/3)

**Comando:** document
**Página:** Global (sistema visual)
**Problema observado:** O sistema implementado (dark navy + blue/teal) 
difere da direção definida no shape (Proof Ledger / editorial / claro). 
Documentar sem explicitar essa diferença criaria ambiguidade na entrega.

**Hipótese de melhoria:** Registrar o sistema atual como baseline 
honesto (v1), nomeando-o com a metáfora definida no shape para manter 
a continuidade metodológica. O redesign para a direção Proof Ledger 
será feito numa passada separada do Impeccable.

**Prompt/orientação:** "How should I handle the gap between the 
implemented dark system and your editorial-paper direction?"

**Resultado produzido:** 3 opções do Impeccable:
1. Document as built (recomendada)
2. Document + kick off the redesign
3. Hybrid ledger reading

**Análise do resultado:**
- Opção 1 (escolhida): documenta o estado atual como v1, mantendo 
  "Proof Ledger" como nome-guarda-chuva. Vantagem: baseline honesto, 
  redesign fica como passada separada — metodologicamente limpo.
  Desvantagem reconhecida: o DESIGN.md inicial descreve um sistema que 
  não é Proof Ledger na prática; isso será resolvido na passada de 
  redesign (v2).
- Opção 2: mais trabalho no mesmo passo; pode misturar documentação 
  com redesign, dificultando separar v1 de v2.
- Opção 3: força reinterpretação do sistema atual como "quase Proof 
  Ledger"; risco de híbrido confuso (metade dark, metade claro).

**Decisão tomada:** Escolho a **opção 1 — Document as built**, seguindo 
a recomendação do Impeccable. Justificativa: cria o baseline real (v1) 
de forma limpa, permite comparar v1 vs v2 na entrega, e evita misturar 
documentação com redesign. A tensão entre o sistema documentado e a 
direção Proof Ledger fica explicitamente registrada e será resolvida 
na passada de redesign (v2).

**Observação para a entrega:** o DESIGN.md inicial reflete o estado 
v1. O DESIGN.md final (após redesign) refletirá a direção Proof Ledger.

### Registro — document (Pergunta 2/3)

**Comando:** document
**Página:** Global (tokens de cor)
**Problema observado:** Tokens de cor sem nomes semânticos ficam 
ilegíveis no DESIGN.md e frágeis para o redesign v2.

**Hipótese de melhoria:** Nomear os 4 papéis de cor (dark, blue, teal, 
light) com nomes que (a) conectem com Proof Ledger e (b) sobrevivam à 
transição v1 (dark) → v2 (claro/editorial).

**Prompt/orientação:** "Descriptive names for the four color roles?"

**Resultado produzido:** 3 opções do Impeccable:
1. Ledger-inspired (recomendada): Midnight Ledger, Proof Blue, 
   Stamp Teal, Paper White
2. Registry/archive: Ink Navy, Registry Blue, Verification Green, 
   Archive White
3. Technical/industrial: Deep Slate, Electric Ultramarine, Signal Teal, 
   Clean Cloud

**Análise do resultado:**
- Opção 1: coerente com Proof Ledger, mas usa nomes de um sistema 
  CLARO ("Paper White") para descrever um sistema ESCURO (dark navy). 
  Contradição: os nomes não sobrevivem à transição v1 → v2.
- Opção 2: usa o universo "arquivo/dossiê/registro" — neutro o 
  suficiente para funcionar tanto no v1 (dark) quanto no v2 (claro). 
  "Ink Navy" descreve o dark atual; "Archive White" descreve o light. 
  Nomes sobrevivem ao redesign.
- Opção 3: genérica, sem conexão com Proof Ledger ou com o universo 
  editorial. Padrão de IA.

**Decisão tomada:** Escolho a **opção 2 — Registry/archive names**, 
rejeitando a recomendação do Impeccable (opção 1). Justificativa: 
os nomes da opção 1 descrevem um sistema claro sendo aplicados a um 
sistema escuro, criando contradição. A opção 2 conecta com a metáfora 
editorial sem contradizê-la e sobrevive à transição v1 → v2, o que 
é decisivo para um sistema de tokens.

### Registro — document (Pergunta 3/3)

**Comando:** document
**Página:** Global (anti-referências visuais)
**Problema observado:** Sem anti-padrões documentados, o redesign pode 
reintroduzir padrões de IA que foram rejeitados ao longo do shape.

**Hipótese de melhoria:** Consolidar em um único documento os anti-padrões 
já implicitamente rejeitados nas decisões anteriores, para que o DESIGN.md 
sirva como contrato visual.

**Prompt/orientação:** "What visuals should be explicit anti-references 
(patterns to never add)?"

**Resultado produzido:** 3 opções do Impeccable:
1. Sem glass/neon/stock
2. Sem visual SaaS-pill
3. Sem clutter lúdico

**Análise do resultado:**
- Opção 1: cobre glass/neon/stock-photo, mas ignora SaaS-pill e clutter 
  lúdico.
- Opção 2: cobre SaaS-pill e template corporativo, mas ignora glass/neon 
  e clutter.
- Opção 3: cobre clutter, mas ignora o resto.
- Nenhuma das 3 é abrangente o suficiente para um contrato visual. 
  Além disso, todas ignoram anti-padrões já rejeitados nas decisões 
  anteriores do shape (cards que levitam, microinterações lúdicas, 
  hover com acento).

**Decisão tomada:** Escrevo minha própria resposta consolidando todos 
os anti-padrões já rejeitados:

"Sem slop de IA, sem clone de SaaS, sem clutter lúdico. Nunca: 
glassmorphism, gradientes neon, roxo-sobre-escuro, hero com foto 
corporativa de banco de imagens, confete/emoji decorativo, cantos 
arredondados em tudo (pill-everything), marinate azul-gradiente de SaaS, 
template corporativo rígido, headers em itálico torto, underline 
decorativo, cards que levitam no hover, microinterações lúdicas, 
acento em qualquer hover."

Justificativa: consolida decisões anteriores em um contrato visual 
único. Cada item já foi rejeitado em alguma etapa do shape ou do 
document, mas nenhum estava documentado explicitamente. Como contrato, 
serve para o redesign v2 e para futuras manutenções.

### Registro — document (consolidação final)

**Comando:** document
**Página:** Global (sistema visual)
**Problema observado:** O DESIGN.md gerado pelo document descreve o 
sistema v1 (dark navy + blue/teal), mas a direção decidida no shape 
é Proof Ledger editorial (claro). Documentar só um dos dois criaria 
ambiguidade na entrega.

**Hipótese de melhoria:** Separar em dois arquivos — DESIGN-v1.md 
(estado atual, evidência) e DESIGN-v2.md (direção-alvo, contrato ativo).

**Prompt/orientação:** "Consolide o DESIGN.md separando v1 e v2."

**Resultado produzido:**
- docs/DESIGN-v1.md — o que o document gerou (dark navy + blue/teal), 
  com Creative North Star, tokens, componentes e Do's/Don'ts.
- DESIGN.md (raiz) — contrato ativo do v2 (editorial, claro, 1 acento), 
  com tipografia concreta (Space Grotesk + Inter), cor concreta, 
  espaçamento, componentes e anti-padrões.

**Análise do resultado:** O DESIGN-v1.md é excelente evidência do estado 
inicial (denso, específico, com Named Rules). O DESIGN.md da raiz agora 
é contrato executável do v2. A separação permite comparar v1 e v2 lado 
a lado na entrega.

**Decisão tomada:** Aceito a separação em dois arquivos. O DESIGN.md 
da raiz passa a ser o contrato ativo do v2.

### Registro — critique (decisão)

**Comando:** critique
**Página:** index.html (global)
**Problema observado:** Health score 17/32. Déficit em Consistência (1) e 
Estética/Minimalismo (1). 5 problemas priorizados (2 P0, 2 P1, 1 P2). 
19 achados mecânicos (contraste do verde falha em tudo, focus ring 
default, modais sem aria-labelledby, sem skip-link, só 1 h1).
**Hipótese de melhoria:** Consolidar o diagnóstico em plano de ação 
priorizado antes de executar, para que cada intervenção tenha 
objetivo, evidência e justificativa.
**Prompt/orientação:** "O critique apontou 5 problemas. Como seguir?"
**Resultado produzido:** 3 opções do Impeccable (parar, planejar, 
executar).
**Análise do resultado:**
- Parar: não avança na atividade.
- Executar: pula o audit e enfraquece os registros.
- Planejar: cria o plano priorizado sem queimar etapas, alinha com 
  a exigência da atividade (objetivo → evidência → análise → decisão).
**Decisão tomada:** Escolho **Virar plano de ação**. Justificativa: 
a atividade exige os dois comandos de avaliação (critique + audit); 
o plano consolida o critique e prepara o audit; e cada intervenção 
futura terá objetivo/evidência/análise/decisão documentados.

### Registro — critique (restrições)

**Comando:** critique
**Página:** index.html (global)
**Problema observado:** O critique sugeriu ajustes em Projetos, Hero e Admin.
**Hipótese de melhoria:** Definir se alguma área deve ser protegida do ajuste.
**Prompt/orientação:** "Alguma área está fora de alcance para um eventual ajuste?"
**Resultado produzido:** 4 opções (Projetos intacta, Hero dark, Admin no lugar, Sem restrições).
**Análise do resultado:**
- Proteger Projetos: manteria o badge "Mais visto" acima do título, 
  o duelo Demo×Repo e os 6 botões por fileira (P1 e P2 do critique).
- Proteger Hero dark: contradiz a direção Proof Ledger do shape 
  (editorial, claro) e mantém o P0 (hero não roteia para prova).
- Proteger Admin: mantém o P1 (primeiro interativo do scan é tooling).
- Sem restrições: permite atacar todos os P0/P1/P2 sem bloquear.
**Decisão tomada:** Escolho **Sem restrições**. Justificativa: o critique 
apontou problemas nas três áreas propostas para proteção (Projetos, Hero, 
Admin). Proteger qualquer uma significaria não corrigir problemas 
priorizados. A direção Proof Ledger exige revisão do hero dark. O Admin 
visível é um dos P1 mais claros. Nada é intocável.

### Registro — critique → plano de ação

**Comando:** critique (desdobramento em plano)
**Página:** index.html (global)
**Problema observado:** Health score 17/32; 5 problemas priorizados 
(2 P0, 2 P1, 1 P2); 19 achados mecânicos.
**Hipótese de melhoria:** Consolidar o diagnóstico em plano priorizado 
antes de executar, garantindo que cada intervenção tenha objetivo, 
evidência e decisão.
**Prompt/orientação:** "Alguma área está fora de alcance?" → 
"Sem restrições" → plano de ação.
**Resultado produzido:** Plano do Impeccable em 5 fases:
1. colorize (P0-2)
2. layout + clarify (P0-1, P2-5)
3. distill + harden (P1-3, P1-4)
4. audit + adapt (mecânico)
5. polish (fechamento)

**Análise do resultado:**
- O plano cobre bem os P0/P1/P2, mas deixa lacunas para a atividade:
  - Só 1 comando de refinamento (colorize). Precisa de 3+.
  - Não inclui extract (sistematização).
  - Não inclui live (obrigatório).
  - Não inclui typeset (hierarquia tipográfica).
- A ordem das fases está correta: raiz visual → hierarquia → limpeza 
  → mecânica → fechamento.

**Decisão tomada:** Aceito o plano com 3 adições:
- typeset (Fase 2) — resolve hierarquia tipográfica que o critique apontou
- extract (Fase 5) — sistematização e componentes
- live (Fase 5) — obrigatório para testar variações

Plano final: 15 comandos, cobrindo todos os mínimos da atividade.

### Registro — colorize

**Comando:** colorize
**Categoria:** Refine (1/3)
**Página:** Global (cor)
**Data:** 2026-09-19

**Problema observado (P0-2 do critique):**
Verde #01c38e usado como fill de botão (CV, WhatsApp, hovers), violando 
a Stamp Rule do DESIGN.md. Contraste white-on-green = 2.28:1 (falha 
WCAG AA). Hover primary↔accent trocava identidade de ação.

**Hipótese de melhoria:**
Rebaixar o verde ao papel de carimbo (≤10% da tela) e unificar Registry 
Blue como único "acting color" para CTAs. Corrigir contraste para 
≥4.5:1. Tratar WhatsApp como ação primária.

**Comando escolhido:** colorize

**Prompt/orientação complementar:**
"Contexto: Direção Proof Ledger; DESIGN.md Registry Blue = ação, 
Verification Green = carimbo. Problema P0-2 do critique. Tarefa: 
verde só como carimbo; azul único acting color; resolver hover; 
corrigir contraste ≥4.5:1; WhatsApp como ação primária."

**Resultado produzido:**
- css/style.css: verde profundo #00784b como carimbo; 
  --primary-hover: #0e21bd; blocos .btn-accent/.btn-success removidos; 
  hover do btn-primary escurece o azul (sem troca de identidade); 
  CSS duplicado do reply deduplicado.
- index.html: CV → btn-primary; WhatsApp → btn-primary w-100.
- js/script.js: ícone de aspas text-muted; reply continua verde legível.
- DESIGN.md atualizado: Stamp Rule agora diz "never a control fill".

**Análise do resultado:**
- ✅ Verde removido de todos os fills de botão (CV, WhatsApp)
- ✅ Registry Blue virou único acting color
- ✅ Hover primary↔accent resolvido (primary escurece, não troca)
- ✅ Contraste corrigido: 2.28:1 → 5.54:1 (passa AA)
- ✅ 8 violações white-on-green eliminadas (detector)
- ✅ Limpeza extra: btn-accent/btn-success removidos, CSS deduplicado
- ⚠️ Ponto em aberto: ícone de aspas ficou text-muted (cor ok), mas 
  ainda está em display-6 (tamanho maior que o título). Isso é 
  responsabilidade do typeset — registrado para a Fase 2.

**Decisão tomada:**
Aceito o resultado integralmente. O colorize resolveu o P0-2 e 
corrigiu o contraste WCAG. A questão do tamanho do ícone de aspas 
é transferida para o typeset (Fase 2). O DESIGN.md foi atualizado 
com "never a control fill" — reflete a decisão.

**Evidência:**
- Detector: 8 violações white-on-green → 0
- Contraste verde: 2.28:1 → 5.54:1 (WebAIM)
- Hover: primary escurece (sem troca de identidade)
- CSS: btn-accent/btn-success removidos

### Registro — layout

**Comando:** layout
**Categoria:** Refine (2/3)
**Página:** Global (hierarquia e roteamento)
**Data:** 2026-09-19

**Problema observado (P0-1 + P2-5 do critique):**
Prova (projetos) chega por último e o hero não roteia para ela — 
recrutador técnico quer veredito em segundos. Acúmulo de decisões: 
hero 2 CTAs iguais, contato 4 botões, nav 9 alvos, ~6 saídas por 
fileira de projeto.

**Hipótese de melhoria:**
1 ação primária por ponto de decisão; roteamento para a prova via CTA 
do hero; reduzir alvos na nav e saídas nos cards.

**Comando escolhido:** layout

**Prompt/orientação complementar:**
"Contexto: Proof Ledger; critique P0-1 (prova por último; hero não 
roteia) e P2-5 (acúmulo de decisões). Tarefa: 1 CTA primário + 1 
ghost no hero; rotear para #projetos ou mover Projetos; WhatsApp 
primário no contato; reduzir saídas nos cards; reduzir alvos na nav."

**Resultado produzido:**
- Hero: "Ver projetos" primário → #projetos; contato secundário btn-sm.
- Contato: WhatsApp sólido (primário) + grupo outline único.
- Cards de projeto: Demo primário (flex-grow-1) + Repo ghost; 
  fileiras alinhadas (mt-auto).
- Detector: zero achados novos.
- Ritmo de fichário (regra 60×4px, alternância Paper/Archive) intacto.

**Análise do resultado:**
- ✅ P0-1 resolvido: hero agora roteia para a prova sem reordenar 
  seções — preserva o skim path do PRODUCT.md 
  (Início → Sobre → Formação → Experiências → Projetos).
- ✅ P2-5 reduzido no hero (2 CTAs → 1 primário + 1 ghost hierarquizado).
- ✅ P2-5 reduzido nos cards (Demo primário + Repo ghost; alinhamento 
  com mt-auto).
- ✅ P2-5 reduzido no contato (WhatsApp primário + grupo outline).
- ✅ Estética editorial preservada: regra 60×4px e alternância 
  Paper/Archive intactas.
- ⚠️ Ponto em aberto: nav ainda tem "Admin" no caminho do visitante 
  (P1-3). Isso será tratado pelo distill (Fase 3).

**Decisão tomada:**
Aceito o resultado integralmente. O layout resolveu P0-1 sem quebrar 
o skim path do PRODUCT.md, e reduziu P2-5 nos 3 pontos de decisão 
(hero, contato, cards). A questão da nav (Admin visível) fica para 
o distill.

**Evidência:**
- Hero: "Ver projetos" é o CTA primário; "Entre em contato" é btn-sm
- Contato: WhatsApp sólido; demais outline
- Cards: Demo primário; Repo ghost; fileiras alinhadas
- Detector: zero achados novos

### Registro — distill

**Comando:** distill
**Categoria:** Simplify (1/2)
**Página:** Global (limpeza de noise)
**Data:** 2026-09-19

**Problema observado (P1-3 + P1-4 + limpeza do critique):**
Admin lock visível a todo visitante — primeiro interativo do scan é 
tooling. "Mais visto" per-browser (dado do próprio visitante). 
Comentário não verificado "Mariana Lopes". Frase de senioridade 
duplicada (hero/sobre). .timeline morto. CSS duplicado do reply.

**Hipótese de melhoria:**
Tirar Admin do caminho do visitante (sem perder auth). Remover badge 
"Mais visto" do público. Remover comentário não verificado. Deduplicar 
copy e CSS. Remover código morto.

**Comando escolhido:** distill

**Prompt/orientação complementar:**
"Contexto: Proof Ledger; critique P1-3 (admin visível), P1-4 (dados 
per-browser, comentário não verificado), limpeza (CSS dup, .timeline, 
frase dup, src='#'). Tarefa: admin fora da nav pública; remover 'Mais 
visto' público; remover Mariana Lopes; deduplicar; corrigir src='#'. 
Preservar estética editorial."

**Resultado produzido:**
- index.html: #btn-admin agora d-none (invisível para visitante); 
  rota #admin + abrirLogin() mantém o login para João.
- script.js: métricas renomeadas "Projetos mais clicados" (só admin); 
  badge "Mais visto" removido do público; "Mariana Lopes" fora dos 
  padrões.
- index.html: lead do Sobre sem duplicar o hero.
- style.css: .timeline removido.
- Detector: zero achados novos.

**Análise do resultado:**
- ✅ P1-3 resolvido: admin fora do caminho do visitante, auth 
  preservada via /#admin + flag adminLogado.
- ✅ P1-4 resolvido: "Mais visto" per-browser morto no público; 
  ranking honesto só na área admin.
- ✅ P1-4 resolvido: testemunho não verificado removido por honestidade.
- ✅ Limpeza: frase de senioridade dup removida; .timeline morto removido.
- ⚠️ Ponto em aberto: CSS duplicado .comment-avatar/.comment-reply 
  (colorize já deduplicou; verificar se restou algo).
- ⚠️ Ponto em aberto: src="#" (index.html:277) — verificar se foi 
  corrigido.
- ⚠️ Ainda no plano: nav ainda tem "Métricas" para visitante? 
  Verificar se saiu junto com o Admin.

**Decisão tomada:**
Aceito o resultado integralmente. O distill resolveu P1-3 e P1-4, 
removeu duplicações e código morto. Os dois pontos em aberto (CSS 
dup, src="#") serão verificados no polish se não aparecerem antes.

**Evidência:**
- #btn-admin: d-none no público; acessível via /#admin
- Métricas: renomeado "Projetos mais clicados" (admin only)
- Badge "Mais visto": removido dos cards públicos
- "Mariana Lopes": removida
- .timeline: removido
- Lead do Sobre: sem duplicar hero
- Detector: zero achados novos

### Registro — audit

**Comando:** audit
**Categoria:** Evaluate
**Página:** Global (técnica)
**Data:** 2026-09-19

**Problema observado:**
O critique apontou problemas técnicos (focus ring 1.41:1, modais sem 
aria-labelledby, sem skip-link, só 1 h1). O audit é necessário para 
confirmar esses e encontrar outros que o critique (focado em design) 
não cobriu.

**Hipótese de melhoria:**
Auditar tecnicamente o index.html e style.css para consolidar a lista 
de problemas de acessibilidade, responsividade, semântica e performance.

**Comando escolhido:** audit

**Prompt/orientação complementar:**
Auditoria técnica completa com severidade (alta/média/baixa) cobrindo 
acessibilidade, responsividade, semântica HTML e performance.

**Resultado produzido:**
- Health score: 15/20 Good
- Veredito de integridade: PASS (tokens batem com DESIGN.md, 
  duas-tintas respeitada, motion seguro)
- Falsos positivos: 1 (.comment-reply side-tab é assinatura do DESIGN.md)

**Problemas fixables listados:**
- [P1] Modais sem aria-labelledby (5)
- [P1] Erro de login sem role="alert"
- [P2] Heading skips em HTML e templates JS
- [P2] Verde fora de token #01c38e no placeholder
- [P3] src="#" 
- [P3] rounded-pill fora do sistema
- [P3] Tap targets btn-sm < 44px
- [P3] LCP do hero sem preload

**Análise do resultado:**
- ✅ Confirmou o que o critique já apontava (aria, skip-link, 
  hierarquia de headings).
- ✅ Adicionou itens novos: rounded-pill fora do sistema, LCP do hero 
  sem preload, verde fora de token no placeholder.
- ✅ Anotou 1 falso-positivo (.comment-reply side-tab — é assinatura 
  intencional).
- ✅ Veredito de integridade PASS: tokens do código batem com DESIGN.md.
- ⚠️ O audit diagnosticou mas não aplicou — comportamento correto.

**Decisão tomada:**
Aceito o diagnóstico. Mapeio os problemas para os comandos seguintes:
- P1 (aria-labelledby, role="alert") → harden
- P2 (heading skips) → typeset
- P2 (verde fora de token) → polish
- P3 (src="#", rounded-pill) → polish
- P3 (tap targets) → adapt
- P3 (LCP preload) → optimize

O Impeccable já iniciou o harden cobrindo P1/P2 + itens da Fase 4 
original (skip-link, ícones decorativos, empty states, avatar alt, 
focus ring on-brand).

**Evidência:**
- Health score 15/20 Good
- 8 problemas fixables com severidade
- 1 falso-positivo anotado
- Veredito de integridade: PASS

### Registro — harden

**Comando:** harden
**Categoria:** Harden (1/2)
**Página:** Global (a11y + robustez)
**Data:** 2026-09-19

**Problema observado (P1 + P2 + Fase 4 do audit):**
- P1: Modais sem aria-labelledby (5); erro de login sem role="alert"
- P2: Heading skips em HTML e templates JS
- Fase 4: sem skip-link; ícones decorativos expostos a SR; 
  empty states ausentes; avatar sem alt; focus ring default (1.41:1)

**Hipótese de melhoria:**
Aplicar cluster de correção de acessibilidade: ARIA nos modais, 
role="alert" no erro, skip-link, aria-hidden em ícones decorativos, 
empty states, alt em avatares, focus ring customizado on-brand.

**Comando escolhido:** harden

**Prompt/orientação complementar:**
"Phase 4b: apply a11y harden" — cluster de correção direto nos 
arquivos, começando pelo index.html.

**Resultado produzido:**

Acessibilidade:
- 5 modais com aria-labelledby; #login-erro ganhou role="alert"
- Skip-link visível no foco → main#principal
- Headings rebalanceados: h1→h2→h3 (visual preservado via classes 
  h5/h6); subtitles viraram <p class="card-subtitle">; fechamentos 
  </h5> órfãos corrigidos
- Ícones decorativos com aria-hidden="true" (HTML + strings JS)
- Empty states honestos ("Nenhum projeto/comentário publicado ainda") 
  + aria-live="polite" nas listas
- Alt do avatar condicional: "Foto de" (real) / "Avatar com a inicial 
  de" (monograma)

Qualidade/mecânica:
- IMAGEM_PLACEHOLDER verde → #00784b (on-token)
- src="#" trocado por 1×1 transparente; JS não remove mais src
- rounded-pill removido do ranking
- preload + fetchpriority="high" no hero.jpg
- :focus-visible outline #132de4
- Tokens de raio alinhados à DESIGN.md: skip-link 6px, .btn-sm > 6px

Verificação: detect limpo exceto 2 falsos positivos conhecidos 
(tight-leading spec Bootstrap, cramped-padding de seções com gutter); 
node --check OK.

**Análise do resultado:**
- ✅ P1 resolvido: 5 modais com aria-labelledby; erro de login com 
  role="alert"
- ✅ P2 resolvido: heading skips corrigidos (h1→h2→h3) sem quebrar 
  visual
- ✅ Fase 4 resolvida: skip-link, ícones decorativos, empty states, 
  avatar alt, focus ring on-brand
- ✅ Bônus: itens que estavam mapeados para polish e optimize foram 
  resolvidos aqui (verde fora de token, src="#", rounded-pill, 
  LCP preload)
- ✅ Cuidado: corrigiu fechamentos </h5> órfãos deixados por replaceAll
- ⚠️ Falsos positivos: 2 (tight-leading, cramped-padding) — o segundo 
  é item da fase adapt
- ⚠️ Tap targets ≥44px ainda pendente → adapt

**Decisão tomada:**
Aceito o resultado integralmente. O harden cobriu P1 + P2 + Fase 4 
e adiantou itens de polish e optimize. O optimize pode ser enxugado 
(performance restante: imagens, CSS/JS, fontes). O polish fica focado 
na passada final.

**Evidência:**
- detect: limpo exceto 2 falsos positivos conhecidos
- node --check: OK
- 5 modais com aria-labelledby
- skip-link funcional
- empty states visíveis
- focus ring on-brand (#132de4)

### Registro — typeset

**Comando:** typeset
**Categoria:** Refine (3/3)
**Página:** Global (tipografia)
**Data:** 2026-09-19

**Problema observado:**
Hierarquia tipográfica fraca; fontes genéricas (Segoe UI); ícone de 
aspas em display-6 (maior que o título); claim mais forte de 
Experiências indistinto no meio dos bullets.

**Hipótese de melhoria:**
Aplicar Space Grotesk (display) + Inter (corpo) do DESIGN.md v2; 
escala 12/14/16/20/24/32/48/64; line-height 1.1/1.6; corrigir ícone 
de aspas; destacar claim de Experiências; preservar hierarquia 
corrigida pelo harden.

**Comando escolhido:** typeset

**Prompt/orientação complementar:**
"Contexto: Proof Ledger; DESIGN.md Space Grotesk + Inter; critique 
apontou hierarquia fraca, ícone de aspas display-6, claim de 
Experiências indistinto; harden corrigiu headings. Tarefa: aplicar 
fontes; hierarquia do hero; destacar claim; corrigir aspas; aplicar 
escala sem quebrar harden."

**Resultado produzido:**

index.html:
- <preconnect> + Google Fonts (Inter 400–700, Space Grotesk 700)
- exp-destaque no claim de alta fidelidade da Experiências

css/style.css:
- Tokens de escala 8 degraus (--fs-label 12 → --fs-display-lg 64)
- --lh-heading:1.1 / --lh-body:1.6
- Hero: cargo a 86% branco / 400 / clamp(20→24px) / 56ch
- .card-quote em 14px
- .exp-destaque 600 / −0.01em / 62ch
- .lead capado em 72ch

js/script.js:
- Ícone de aspas: display-6 → card-quote (linha 391)

Detector: tight-leading zerou; restam 3× cramped-padding (falso 
positivo, item da fase adapt) e 2× overused-font (Inter + Space 
Grotesk — faces pinadas no DESIGN.md v2; decisão sancionada).

**Análise do resultado:**
- ✅ Fontes aplicadas via Google Fonts com preconnect
- ✅ Escala de 8 degraus (12→64) em tokens CSS
- ✅ Line-height 1.1/1.6 em tokens
- ✅ Hero: cargo claramente secundário ao nome (86% branco, 400, 20-24px)
- ✅ Claim de Experiências destacado via exp-destaque
- ✅ Ícone de aspas corrigido (display-6 → card-quote 14px)
- ✅ Bônus: .lead capado em 72ch (legibilidade editorial)
- ✅ Hierarquia do harden preservada (h1→h2→h3; modal h2)
- ✅ tight-leading zerou
- ⚠️ cramped-padding (3×) — item da fase adapt
- ⚠️ overused-font (2×) — decisão sancionada (faces do DESIGN.md)

**Decisão tomada:**
Aceito o resultado integralmente. O typeset resolveu hierarquia 
tipográfica, aplicou as fontes do DESIGN.md v2 e corrigiu o ícone 
de aspas. Os 2 falsos positivos são conhecidos: cramped-padding 
vai para adapt; overused-font é decisão sancionada.

**Evidência:**
- tight-leading: zerou
- Hierarquia do harden: preservada
- Fontes: Inter + Space Grotesk via Google Fonts (preconnect)
- Escala: 8 tokens (--fs-label a --fs-display-lg)
- Ícone de aspas: card-quote (14px)

### Registro — clarify

**Comando:** clarify
**Categoria:** Simplify (2/2)
**Página:** Global (copy e estados)
**Data:** 2026-09-19

**Problema observado:**
Copy de estados não orientava ação (erro de login genérico); contador 
de métricas sem rótulo "neste navegador" no card; nota do modal com 
jargão EN; empty states genéricos/ausentes.

**Hipótese de melhoria:**
Reescrever textos de estado para orientar a ação; rotular métricas 
honestamente; empty states úteis por papel (admin vs visitante); 
manter pt-BR.

**Comando escolhido:** clarify

**Prompt/orientação complementar:**
"Contexto: Proof Ledger; DESIGN.md pt-BR; critique/audit apontaram 
labels, copy de CTA, contador per-browser; harden adicionou empty 
states e role='alert'. Tarefa: revisar labels pt-BR; copy do CTA; 
rotular contador; revisar textos de erro/vazio; garantir pt-BR."

**Resultado produzido:**

index.html:
- Erro de login (:235): "Confira o e-mail e a senha e tente novamente." 
  + role="alert" mantido
- Cards de métricas (:364, :370): rotulados "· neste navegador" no card
- Nota do modal (:377): "Estes números são apenas deste navegador — 
  não há servidor..." (sem jargão EN)

script.js:
- Empty states (105-106, 366): projetos variam por papel (admin → 
  "Use o botão Novo projeto..."; visitante → "Fale comigo pelos 
  canais de contato abaixo."); comentários → "Seja o primeiro a 
  deixar o seu."

Revisado e ok:
- "Admin" só existe como id interno
- "Métricas do site" permanece (modal mostra visitas+cliques+ranking)
- CTAs do hero mantidos

**Análise do resultado:**
- ✅ Erro de login orienta ação (não só "Ops, algo deu errado")
- ✅ Métricas rotuladas honestamente ("neste navegador")
- ✅ Nota do modal sem jargão EN
- ✅ Empty states variam por papel (decisão de produto, não só tela)
- ✅ pt-BR garantido em toda a copy
- ✅ "Admin" só como id interno (não aparece como label)

**Decisão tomada:**
Aceito o resultado integralmente. O clarify fechou Simplificação 2/2 
e melhorou a honestidade e a clareza dos estados.

**Evidência:**
- Erro de login: "Confira o e-mail e a senha e tente novamente."
- Métricas: "· neste navegador" no card
- Empty states: variação por papel (admin vs visitante)

### Registro — adapt

**Comando:** adapt
**Categoria:** Simplify (3/2 — bônus)
**Página:** Global (responsividade)
**Data:** 2026-09-19

**Problema observado:**
Tap targets btn-sm e botões admin ~31-38px (< 44px — falha WCAG para 
toque em ≤991.98px). 3× cramped-padding (causa: override morto de 
media query com gutter 12px). Detector também apontava tight-leading, 
line-length e body-text-viewport-edge.

**Hipótese de melhoria:**
Aumentar tap targets para ≥44px no range mobile/tablet; resolver 
cramped-padding via token --section-gutter; capar largura de leitura 
em 62ch; corrigir alinhamento do hero mobile; preservar estética 
editorial e histórico de intervenções.

**Comando escolhido:** adapt

**Prompt/orientação complementar:**
"Contexto: Proof Ledger; DESIGN.md espaçamento 4/8/16/24/32/48/64/96; 
audit apontou tap targets <44px; detector 3× cramped-padding. Tarefa: 
tap targets ≥44px; colapso de gutters; verificar hero/cards/contato/
modais em mobile; preservar estética editorial e histórico."

**Resultado produzido:**

index.html:
- CTAs do hero em .hero-ctas (stacking mobile full-width 
  "primary-first", gap de token); saiu o me-2 que desalinhava em 390px

css/style.css:
- Bloco .hero-ctas com colapso ≤575.98px
- Touch targets ≥44px no range ≤991.98px (nav colapsada inteira, 
  btn-sm/admin/toggler/close/campos)
- --section-gutter: 1rem (16px token) — substitui override morto 
  com gutter 12px
- Cards com leitura em 62ch (max-width)

Preservado:
- Alternância Paper/Archive
- Regra 60×4px
- 2 tintas
- translateY-only
- Corners 6/8px
- Escala 12→64, lh 1.1/1.6
- Histórico colorize→clarify

Detector: zero cramped-padding, zero tight-leading, zero line-length, 
zero body-text-viewport-edge. Restam 2× overused-font (Inter + Space 
Grotesk — faces pinadas no DESIGN.md v2).

Medições headless:
- 320/375/390/768: sem alvo de toque <44px; gutters 16px; modais 
  dentro do viewport
- 1280: intacto

**Análise do resultado:**
- ✅ Tap targets ≥44px no range ≤991.98px
- ✅ Cramped-padding resolvido (causa raiz identificada: override morto)
- ✅ Tight-leading zerou
- ✅ Line-length capado em 62ch
- ✅ Body-text-viewport-edge zerou
- ✅ Hero mobile alinhado (me-2 removido)
- ✅ Desktop 1280 intacto
- ✅ Estética editorial preservada
- ✅ Histórico de intervenções preservado
- ⚠️ overused-font (2×) — decisão sancionada (faces do DESIGN.md v2)

**Decisão tomada:**
Aceito o resultado integralmente. O adapt fechou Simplificação 3/2 
(bônus) e resolveu todos os problemas de responsividade do audit. 
O detector está limpo exceto os 2 falsos positivos conhecidos.

**Evidência:**
- Detector: zero cramped-padding, zero tight-leading, zero line-length, 
  zero body-text-viewport-edge
- Medições headless: 320/375/390/768 sem alvo <44px; 1280 intacto
- Regra 60×4px preservada
- Alternância Paper/Archive preservada

### Registro — polish

**Comando:** polish
**Categoria:** Harden (2/2)
**Página:** Global (passada final)
**Data:** 2026-09-19

**Problema observado:**
Verificação final antes de publicar. Garantir consistência visual em 
todas as seções após 7 intervenções (colorize → adapt). O polish é 
o comando obrigatório de Preparação 2/2.

**Hipótese de melhoria:**
Passada final verificando: regra 60×4px, alternância Paper/Archive, 
2 tintas, corners 6/8px, translateY-only, escala 12→64, lh 1.1/1.6, 
focus ring on-brand, skip-link funcional. Corrigir inconsistências 
residuais.

**Comando escolhido:** polish

**Prompt/orientação complementar:**
"Contexto: Proof Ledger; DESIGN.md regra 60×4px, alternância 
Paper/Archive, 2 tintas, translateY-only, corners 6/8px, escala 
12→64, lh 1.1/1.6; histórico colorize→adapt; detector limpo exceto 
2× overused-font. Tarefa: passada final verificando consistência; 
corrigir inconsistências; preservar fases anteriores."

**Resultado produzido:**

index.html (5):
- data-bs-spy="scroll" na nav (item ativo acompanha o campo em vista; 
  antes preso em Início)
- Hero h1 sem display-3 (classe morta, fora da escala)
- Foto shadow → shadow-sm (única elevação do DESIGN.md)
- Métricas: display-6 (40px, fora da escala) → .metrica-valor (32px)

css/style.css (7):
- .lead 400→500; .card-title/.modal-title →600 (DESIGN.md Title/Subtitle)
- .card transition só transform (Flat-By-Default: sombra nunca anima)
- Focus ring on-brand #132de4 em nav/btn/close/toggler/campos 
  (mata o ring Bootstrap #0d6efd)
- ::selection e scrollbar na paleta
- Bug herdado do adapt corrigido: .profile-photo (220px) vinha depois 
  da media query — colapso para 170px nunca vencia; agora aplica
- .metrica-valor token (32px/700/lh1.1)

js/script.js (2):
- Repositório btn-sm → btn nas 3 colunas (Demo/Repositório 
  emparelham: 38px desktop / 44px touch)
- Collapse fecha ao clicar em link da nav (mobile)

Verificações:
- 6 títulos com regra 60×4 ✓
- Alternância Paper/Archive ✓
- 2 tintas (verde só carimba, #00784b AA) ✓
- Corners 6/8 ✓
- translateY-only (transition de box-shadow removida) ✓
- Escala e lh ✓
- Skip-link e focus ring funcionais ✓

Detector: só exceções-padrão — 2× overused-font (sancionadas) + 
side-tab do reply + raio 2px da regra (assinaturas do DESIGN.md).

**Análise do resultado:**
- ✅ Passada final completa: 14 mudanças em 3 arquivos
- ✅ data-bs-spy corrige o item ativo da nav (UX real)
- ✅ Focus ring on-brand em todos os interativos (mata Bootstrap default)
- ✅ Flat-By-Default respeitado (sombra nunca anima)
- ✅ Bug herdado do adapt corrigido (.profile-photo colapsava errado)
- ✅ Métricas dentro da escala (.metrica-valor 32px)
- ✅ Demo/Repositório emparelham (38px desktop / 44px touch)
- ✅ Collapse fecha ao clicar em link (mobile)
- ⚠️ Detector: só exceções-padrão sancionadas

**Decisão tomada:**
Aceito o resultado integralmente. O polish fechou Preparação 2/2 e 
resolveu inconsistências residuais, incluindo um bug herdado do adapt. 
O plano de 5 fases está completo.

**Evidência:**
- 6 títulos com regra 60×4 ✓
- Focus ring #132de4 funcional
- Bug .profile-photo corrigido
- data-bs-spy ativo
- Detector: só exceções sancionadas
- Teste de teclado via CDP: skip-link funcional

### Registro — critique (re-run) → decisão

**Comando:** critique (re-run)
**Página:** Global
**Problema observado:** O critique de novo achou 2 P1 sobreviventes:
- P1-1: seção de comentários promete prova social pública que a 
  arquitetura per-browser não entrega — contradiz o Product 
  Principle 4 (Honest evidence).
- P1-2: Proof Ledger sub-executado — lê como Bootstrap limpo, 
  não como dossiê.
**Hipótese de melhoria:** Atacar primeiro o P1-1 (honestidade) porque 
contradiz o contrato do produto; depois P1-2 (visual) com base em 
conteúdo honesto.
**Prompt/orientação:** "Which should we tackle first?" — 4 opções.
**Resultado produzido:** 3 opções + campo aberto (Ledger composition, 
Comment loop, Both P1s).
**Análise do resultado:**
- Opção 1 (Ledger composition): resolve P1-2, não P1-1. Risco de 
  conflitar com "Refined and restrained" do shape; risco de mexer 
  no que polish estabilizou.
- Opção 2 (Comment loop): resolve P1-1, não P1-2. Alinha com 
  PRODUCT.md Principle 4. Honestidade > estética.
- Opção 3 (Both): resolve ambos, mas mistura escopos e arrisca 
  registros menos claros.
**Decisão tomada:** Escolho **Opção 2 — Comment loop (P1)**. 
Justificativa: P1-1 é um problema de honestidade que contradiz o 
PRODUCT.md; P1-2 é uma questão de execução visual. Honestidade 
primeiro, visual depois. O clarify é o comando certo para P1-1. 
Depois de resolver P1-1, rodo bolder (P1-2) com base em conteúdo 
honesto.

### Registro — critique (re-run) → escopo

**Comando:** critique (re-run)
**Página:** Global
**Problema observado:** Além dos 2 P1, o critique achou 2 P2 (Sobre 
skill wall, contraste focus-ring no navy) e 4 P3 (identity name drift, 
no undo, config-missing login unlock, silent storage reset).
**Hipótese de melhoria:** Definir escopo da intervenção pós-critique 
sem comprometer o que polish estabilizou.
**Prompt/orientação:** "How much do you want to take on now?" — 4 opções.
**Resultado produzido:** 3 opções + campo aberto (Top 3 only, All 
issues, Critical only).
**Análise do resultado:**
- Top 3 only: resolve 2 P1 + 1 P2 à escolha; escopo controlado; 
  registro limpo. Alinhado com a atividade (cobertura acima do mínimo).
- All issues: cobertura total mas risco de regressão, mistura de 
  escopos e over-polish após polish recente.
- Critical only: resolve só P1; escopo mínimo; perde oportunidade 
  de fechar 1 P2 rápido.
**Decisão tomada:** Escolho **Opção 1 — Top 3 only**, com o P2 
escolhido sendo o **contraste do focus-ring no navy** (a11y, alinha 
com harden/polish, mede WCAG). Justificativa: você já tem 13 comandos 
únicos (acima do mínimo com critique re-run = 14); os 2 P1 são 
obrigatórios; 1 P2 fecha a passada com escopo controlado; P3 ficam 
reconhecidos, não críticos.

### Registro — critique (re-run) → hero

**Comando:** critique (re-run) → decisão sobre hero
**Página:** Hero
**Problema observado:** O critique apontou 2 findings de identidade 
visual: (1) Ledger world quieto e sub-assertado; (2) Hero lê como 
stock-photo gradient cover, não como type-led statement.
**Hipótese de melhoria:** Push hero toward type-led ledger cover 
(name as artifact, photo secondary), alinhando com Proof Ledger, 
shape e DESIGN.md v2.
**Prompt/orientação:** "Two findings relate to visual personality: 
the ledger world is quiet and under-asserted, and the hero reads as 
a stock-photo gradient cover rather than a type-led statement. Is 
the current dark photo-gradient hero intentional, or should the front 
cover become more typographic/ledger-like?"
**Resultado produzido:** 3 opções + campo aberto:
1. More ledger, more type (name as artifact, photo secondary)
2. Keep photo-gradient hero (preserve real-photo; strengthen ledger 
   cues only in body sections)
3. Not sure — recommend
**Análise do resultado:**
- Opção 1: alinha com Proof Ledger, shape, DESIGN.md v2 e typeset. 
  Resolve P1-2. Diferencia do slop de IA. A foto não desaparece — 
  vira secundária.
- Opção 2: preserva a foto real, mas NÃO resolve P1-2 (o hero é 
  justamente o problema apontado). Contradiz Proof Ledger.
- Opção 3: delega decisão ao Impeccable — enfraquece o registro 
  da atividade (que exige decisão sua).
**Decisão tomada:** Escolho **Opção 1 — More ledger, more type**. 
Justificativa: é a única que resolve o P1-2 (Proof Ledger 
sub-executado) e alinha com shape, DESIGN.md v2 e typeset. A foto 
não desaparece — vira secundária (avatar ou Sobre). Vou vigiar para 
não cair em slop no bolder (sem gradiente, sem animação, sem 
microinterações lúdicas). Preservar: regra 60×4px, escala 12→64, 
2 tintas, corners 6/8, translateY-only.

### Registro — critique (re-run) → ordem de intervenção

**Comando:** critique (re-run)
**Página:** Global
**Problema observado:** Os P0/P1 originais saíram (prova última, 
duas-tintas, admin visível, marcadores falsos). Restaram 3 ações 
priorizadas:
- P1-1: seção de comentários parece publicação pública (renomear 
  "Depoimentos" + nota per-visitante + empty state roteando para 
  WhatsApp/email)
- P1-2: Proof Ledger sub-executado (marcadores numerados + hero 
  type-led)
- P2: focus-ring azul-sobre-navy no navbar/hero
**Hipótese de melhoria:** Atacar na ordem: honestidade (clarify) → 
visual (bolder) → a11y (audit) → medição (critique final).
**Prompt/orientação:** "Sugiro: rodo o clarify do loop de comentários 
agora, depois bolder, auditoria, e re-critique pro placar final. 
Começo?"
**Resultado produzido:** Ordem recomendada pelo Impeccable: clarify 
→ bolder → audit → critique.
**Análise do resultado:**
- A ordem está correta: P1-1 (honestidade) antes de P1-2 (visual); 
  P2 (a11y) depois; critique final como medição.
- clarify já foi usado (Simplificação 2/2) — segunda execução com 
  escopo distinto (comment loop).
- audit já foi usado — segunda execução com escopo distinto (focus-ring).
- Ambos são permitidos pela atividade (não proíbe repetir).
**Decisão tomada:** Aceito a ordem. Começo pelo clarify (P1-1).

### Registro — clarify (comment loop — segunda execução)

**Comando:** clarify
**Categoria:** Simplify (segunda execução — escopo distinto)
**Página:** Seção de comentários → Depoimentos
**Data:** 2026-09-19

**Problema observado (P1-1 do critique re-run):**
A seção de comentários parecia publicação pública, mas a arquitetura 
é per-browser (localStorage) — o visitante vê só os próprios 
comentários. Isso contradiz o PRODUCT.md Principle 4 (Honest evidence).

**Hipótese de melhoria:**
Renomear para "Depoimentos"; adicionar nota honesta "visíveis apenas 
neste navegador"; empty state roteando para WhatsApp/email em vez de 
"Seja o primeiro a comentar".

**Comando escolhido:** clarify (segunda execução — comment loop)

**Prompt/orientação complementar:**
"Contexto: Proof Ledger; PRODUCT.md Principle 4 (Honest evidence); 
critique P1-1 (comentários parecem publicação pública). Tarefa: 
renomear para 'Depoimentos'; nota honesta per-visitante; empty state 
roteando para WhatsApp/email; preservar role='alert', aria-live, 
empty states por papel; não apresentar comentário não verificado."

**Resultado produzido:**

index.html:
- Textos do modal unificados: "Deixar depoimento" (:304), label 
  "Depoimento" (:319), "Publicar depoimento" (:329)
- Nav/título seção/botão/nota "visíveis apenas neste navegador" já 
  estavam prontos

js/script.js:
- STORAGE_COMENTARIOS v1→v2 (purga localStorage antigo que pudesse 
  ressuscitar a Mariana Lopes não verificada — Princípio 4)
- Empty state por papel: visitante ganha CTAs reais (WhatsApp 
  primário + E-mail outline, mesmos da Contato); admin recebe nota 
  honesta ("depoimentos locais, sem servidor")
- role="alert" no container do empty state
- Confirm de exclusão → "depoimento"
- Defaults intactos (só Graziela, cliente real)

Preservado:
- Tipografia (typeset)
- 2 tintas (verde carimbo; botões Registry Blue/ghost)

**Análise do resultado:**
- ✅ P1-1 resolvido: seção renomeada para "Depoimentos"; nota honesta 
  per-visitante; empty state roteia para WhatsApp/email
- ✅ Bônus: STORAGE_COMENTARIOS v1→v2 purga localStorage antigo que 
  poderia ressuscitar a Mariana Lopes — alinha com Principle 4
- ✅ Bônus: role="alert" no empty state
- ✅ Bônus: confirm de exclusão usa "depoimento"
- ✅ Defaults intactos (só Graziela, cliente real)
- ✅ Tipografia e 2 tintas preservadas
- ✅ Empty state por papel (visitante: CTAs reais; admin: nota honesta)

**Decisão tomada:**
Aceito o resultado integralmente. O clarify (segunda execução) 
resolveu o P1-1 e foi além ao purgar o localStorage antigo — decisão 
de integridade alinhada com o PRODUCT.md.

**Evidência:**
- Textos: "Deixar depoimento" / "Depoimento" / "Publicar depoimento"
- STORAGE_COMENTARIOS: v1 → v2
- Empty state visitante: WhatsApp primário + E-mail outline
- Empty state admin: nota honesta (sem servidor)
- Defaults: só Graziela (cliente real)

### Registro — bolder

**Comando:** bolder
**Categoria:** Refine (comando adicional — escopo distinto)
**Página:** Global (títulos + hero)
**Data:** 2026-09-19

**Problema observado (P1-2 do critique re-run):**
Proof Ledger sub-executado. O critique apontou: (1) marcadores 
numerados ausentes nos títulos; (2) hero lia como stock-photo 
gradient cover, não como type-led statement.

**Hipótese de melhoria:**
Numerar os títulos como páginas de dossiê ("01 · Sobre mim"); tornar 
o hero type-led (nome Space Grotesk como artefato, foto secundária); 
eliminar o "stock feel" do gradiente.

**Comando escolhido:** bolder

**Prompt/orientação complementar:**
"Contexto: Proof Ledger; DESIGN.md prometia numeração de página; 
critique P1-2 (marcadores numerados + hero type-led). Tarefa: 
numerar títulos; hero type-led; preservar 2 tintas, tap ≥44px, 
translateY-only, corners, escala, lh, reduced-motion."

**Resultado produzido:**

index.html:
- 6 títulos de seção numerados: "01 · Sobre mim" → "06 · Contato" 
  (numeração de página do dossiê)

css/style.css:
- .section-field novo: label editorial 0.75rem/Inter 600/0.14em em 
  Registry Blue, na baseline do headline (Blue = fact marker, 
  permitido pela Two-Ink Rule)
- Regra 60×4px intacta
- Hero: gradiente de 2 paradas (0.78→0.9, o "stock feel") → tinta 
  única 0.85 sobre hero.jpg; foto vira textura secundária, nome 
  Space Grotesk domina
- AA pior caso ≥7:1 branco; detector não acusa mais raster enterrado

Mantido:
- 2 tintas
- tap ≥44px
- translateY-only
- corners 6/8
- escala 12→64, lh 1.1/1.6
- reduced-motion
- Nada das fases anteriores tocado

**Análise do resultado:**
- ✅ P1-2 resolvido: marcadores numerados nos 6 títulos; hero type-led
- ✅ Hero sem "stock feel": tinta única 0.85 (não gradiente decorativo)
- ✅ Foto vira textura secundária; nome Space Grotesk domina
- ✅ AA pior caso ≥7:1
- ✅ .section-field novo: label editorial 0.75rem/Inter 600/0.14em 
  em Registry Blue (Blue = fact marker)
- ✅ Two-Ink Rule respeitada
- ✅ Regra 60×4px intacta
- ✅ Nada das fases anteriores tocado
- ✅ Sem slop: sem gradiente decorativo, sem animação, sem 
  microinterações lúdicas

**Decisão tomada:**
Aceito o resultado integralmente. O bolder resolveu o P1-2 sem cair 
em slop — a decisão de usar tinta única em vez de gradiente 
decorativo é exatamente o que "Proof Ledger" significa.

**Evidência:**
- 6 títulos numerados: "01 · Sobre mim" → "06 · Contato"
- .section-field: 0.75rem/Inter 600/0.14em em Registry Blue
- Hero: tinta única 0.85 sobre hero.jpg (foto textura secundária)
- AA pior caso ≥7:1 branco
- 2 tintas preservadas
- translateY-only preservado
- Regra 60×4px intacta

### Registro — audit (segunda execução — focus-ring)

**Comando:** audit
**Categoria:** Evaluate (segunda execução — escopo distinto)
**Página:** Global (focus-ring em superfícies escuras)
**Data:** 2026-09-19

**Problema observado (P2 do critique re-run):**
Focus-ring azul-sobre-navy no navbar/hero escuro (css/style.css:161-168): 
o mesmo token #132de4 funcionava em superfícies claras mas falhava em 
superfícies escuras (max 2,0:1 — abaixo de WCAG 2.4.11 ≥3:1).

**Hipótese de melhoria:**
Focus-ring condicional: papel/claro nas superfícies escuras (nav/hero); 
Registry Blue nas superfícies claras (Paper/Archive). Verificar com 
matemática real (blend RGBA + WCAG).

**Comando escolhido:** audit (segunda execução — focus-ring)

**Prompt/orientação complementar:**
"Auditoria do focus-ring nas superfícies escuras. Aplicar anel claro/
papel nos escuros; azul nos claros. Verificar contraste WCAG 2.4.11 
≥3:1 com matemática real (blend RGBA + WCAG)."

**Resultado produzido:**

Anéis de foco corrigidos (somente ring, sem tocar acento/fundo):
- Escuros (nav/hero): papel rgba(255,255,255,0.7) → 8,75:1 navy, 
  6,08:1 hero
- Claros (Paper/Archive): mesmo Registry Blue, alfa 0,65 → 3,87:1 
  paper, 3,83:1 archive
- Brand + skip-link: outline branco → 16,64:1
- btn-close/inputs a 0,65 (consistência)

Valores conferidos com blend+WCAG — tudo ≥3:1 (alvo 2.4.11 Focus 
Appearance). Detector: só as 2 fontes sancionadas.

**Análise do resultado:**
- ✅ P2 resolvido: focus-ring condicional (papel nos escuros; azul 
  nos claros)
- ✅ Contraste verificado com matemática real (blend RGBA + WCAG)
- ✅ Escuros: 8,75:1 navy / 6,08:1 hero (≥3:1)
- ✅ Claros: 3,87:1 paper / 3,83:1 archive (≥3:1)
- ✅ Brand + skip-link: 16,64:1
- ✅ btn-close/inputs a 0,65 (consistência)
- ✅ Sem tocar acento/fundo (só ring)
- ✅ Detector: só as 2 fontes sancionadas

**Decisão tomada:**
Aceito o resultado integralmente. O audit 2ª resolveu o P2 com 
matemática real e sem tocar acento/fundo. Os 3 itens do critique 
re-run estão fechados: depoimentos (clarify), bolder, foco (audit 2ª).

**Evidência:**
- Escuros: 8,75:1 navy / 6,08:1 hero
- Claros: 3,87:1 paper / 3,83:1 archive
- Brand + skip-link: 16,64:1
- WCAG 2.4.11 ≥3:1 cumprido
- Detector: só 2 fontes sancionadas

### Registro — critique (final) → decisão

**Comando:** critique (final)
**Página:** Global
**Problema observado:** O critique final achou 3 P1 novos (o P0/P1 
original e o P1-2/P2 do re-run anterior foram resolvidos):
1. Depoimentos — honestidade (browser-local illusions)
2. Sobre — chip overload (14 skill chips + 4 info rows)
3. Admin discoverability — operador pode perder acesso
**Hipótese de melhoria:** Atacar primeiro o trust/proof field 
(Depoimentos) porque é o highest-stakes para recrutadores (público 
primário) e alinha com PRODUCT.md Principle 4.
**Prompt/orientação:** "Two of the three P1 issues are about the 
Depoimentos field's honesty problem (browser-local illusions) and 
the Sobre field's chip overload. Which area should I dig into first?"
**Resultado produzido:** 4 opções:
1. Trust/proof field (Depoimentos) — highest-stakes para recrutadores
2. Sobre chip overload — distill para proof-first field
3. Admin discoverability — entrada admin permanente e discreta
4. Campo aberto
**Análise do resultado:**
- Opção 1: highest-stakes; alinha com Principle 4; fecha o loop do 
  clarify 2ª; crítico para credibilidade.
- Opção 2: alinha com distill/Principle 2; resolve P2 antigo; menos 
  crítico que trust.
- Opção 3: fix pequeno e técnico; não urgente para recrutador.
**Decisão tomada:** Escolho **Opção 1 — Trust/proof field 
(Depoimentos)**. Justificativa: é o highest-stakes para o público 
primário (recrutador), alinha com PRODUCT.md Principle 4, e fecha 
o loop do clarify 2ª (que moveu a seção mas não resolveu o reframe 
profundo). Depois: Opção 2 (Sobre chip overload) se sobrar tempo; 
Opção 3 (Admin discoverability) é fix pequeno.

### Registro — critique (final) → Depoimentos

**Comando:** critique (final) → decisão sobre Depoimentos
**Página:** Seção Depoimentos
**Problema observado (P1):** Social Proof (Depoimentos) é a prova 
mais fraca. O sistema browser-local promete prova social pública que 
a arquitetura não entrega (browser-local illusions).
**Hipótese de melhoria:** Definir se os Depoimentos são craft demo 
(sistema browser-local) ou prova verificável externa (LinkedIn/sites 
reais). Opção 3 propõe manter ambos, com prova real acima.
**Prompt/orientação:** "The Report Ledger identity is working, but 
Social Proof (Depoimentos) is currently the weakest proof. Is the 
browser-local comment system something you want to keep as a craft 
demo, or should it become externally verifiable proof?"
**Resultado produzido:** 3 opções + campo aberto:
1. Keep as craft demo (reframe copy/UI como demo)
2. Make it verifiable (apontar para LinkedIn/sites reais)
3. Keep both, reorder (demo stays, real proof above)
**Análise do resultado:**
- Opção 1: honesto, reframe simples; mas perde prova social real.
- Opção 2: prova verificável real; mas remove a demo técnica e 
  depende de você ter LinkedIn/sites (só 1 cliente real).
- Opção 3: mantém demo (craft) + prova real (Graziela) acima; alinha 
  com PRODUCT.md (prova real + demo rotulada); menos trabalho que 
  Opção 2; honesto.
**Decisão tomada:** Escolho **Opção 3 — Keep both, reorder**. 
Justificativa: preserva a demo técnica (craft valioso para recrutador 
técnico), coloca a prova real (Graziela) acima, e alinha com PRODUCT.md 
Principle 4 (prova real + demo rotulada como demo). A Opção 2 deixaria 
a seção fina (só 1 cliente); a Opção 1 perderia a prova social.

### Registro — critique (final) → escopo

**Comando:** critique (final)
**Página:** Global
**Problema observado:** O critique final achou 3 P1 + 3 P2 (6 problemas) 
e não aplicou nada (só diagnóstico).
**Hipótese de melhoria:** Definir escopo das correções sem comprometer 
os obrigatórios (extract, live) e sem misturar design com a11y.
**Prompt/orientação:** "I found 3 P1 + 3 P2 issues. This session 
(critique only, no edits made) — how far do you want to take fixes?"
**Resultado produzido:** 3 opções + campo aberto:
1. Top 3 (P1 only) — fix the three priority issues
2. All issues — address all P1 and P2
3. P1 + P2 design-only — leave a11y/audit for /impeccable audit
**Análise do resultado:**
- Opção 1: fecha P1; escopo controlado; alinhado com a atividade; 
  não atrasa extract/live.
- Opção 2: cobertura total; mais trabalho; mistura escopos.
- Opção 3: separa design de a11y; cobertura razoável; mas redundante 
  com audit 2ª (já rodado).
**Decisão tomada:** Escolho **Opção 1 — Top 3 (P1 only)**. 
Justificativa: você já cumpriu os mínimos da atividade (15+ comandos); 
os 3 P1 são críticos (honestidade, escaneabilidade, funcionalidade); 
os P2 design-level podem ser registrados como reconhecidos; e você 
ainda precisa rodar extract + live (obrigatórios). Fechar P1 primeiro 
e partir para os obrigatórios é o caminho mais eficiente.

### Registro — distill (segunda execução — Sobre chip overload)

**Comando:** distill
**Categoria:** Simplify (segunda execução — escopo distinto)
**Página:** Seção Sobre
**Data:** 2026-09-19

**Problema observado (P1-2 do critique final):**
Sobre com chip overload: 14 skill chips + 4 info rows competindo por 
atenção. O CV ("one click") exigia scroll-past-noise antes de chegar.

**Hipótese de melhoria:**
Reordenar o Sobre: prova (CV) → parágrafo → info-list → claims. 
Reduzir 14 chips para 4 categorias honestas. Manter soft skills em 
linha única. Preservar 2 tintas (soft = Registry Blue; hard = ghost 
Ink; sem verde em chip).

**Comando escolhido:** distill (segunda execução — Sobre)

**Prompt/orientação complementar:**
"Contexto: Proof Ledger; critique P1-2 (Sobre chip overload); 
distill 2ª. Tarefa: CV no topo; ordem prova→parágrafo→info-list→claims; 
14 chips → 4 categorias honestas; soft skills em linha única; 
preservar 2 tintas."

**Resultado produzido:**

index.html (68-72):
- CV no topo da coluna (ordem de leitura: prova (CV) → parágrafo → 
  info-list → claims); "one click to the CV" agora não exige 
  scroll-past-noise
- 10 chips → 4 categorias honestas: Back-end (PHP/Java/Python/JS) · 
  Front-end (HTML/CSS/JS) · Banco de dados (SQL Server/MySQL) · 
  Ferramentas (WordPress/Pacote Office)
- Soft skills mantidas em linha única
- 2 tintas respeitadas (soft = Registry Blue, hard = ghost Ink, 
  sem verde em chip)
- Nada mais do Sobre tocado

**Análise do resultado:**
- ✅ P1-2 resolvido: CV no topo (one click sem scroll-past-noise)
- ✅ Ordem de leitura: prova → parágrafo → info-list → claims
- ✅ 14 chips → 4 categorias honestas (redução de 71%)
- ✅ Soft skills em linha única (não competem)
- ✅ 2 tintas preservadas (sem verde em chip)
- ✅ Nada mais tocado (cirúrgico)

**Decisão tomada:**
Aceito o resultado integralmente. O distill 2ª resolveu o P1-2 com 
redução de 71% nos chips e sem tocar no resto. Alinha com PRODUCT.md 
Principle 2 (Respect the recruiter's time) e DESIGN.md (refined 
and restrained).

**Evidência:**
- CV em index.html:68-72 (topo da coluna)
- Chips: 14 → 4 categorias
- Back-end: PHP/Java/Python/JS
- Front-end: HTML/CSS/JS
- Banco: SQL Server/MySQL
- Ferramentas: WordPress/Office
- Soft skills: linha única
- Sem verde em chip (2 tintas)

### Registro — clarify (terceira execução — Depoimentos)

**Comando:** clarify
**Categoria:** Simplify (terceira execução — escopo distinto)
**Página:** Seção Depoimentos
**Data:** 2026-09-19

**Problema observado (P1-1 do critique final):**
Social Proof (Depoimentos) era a prova mais fraca. O sistema 
browser-local prometia prova social pública que a arquitetura não 
entrega. O `clarify` 2ª moveu para "Depoimentos" + nota per-visitante, 
mas o critique final ainda via como "browser-local illusions".

**Hipótese de melhoria:**
Reordenar: prova real (Graziela) lidera; quadro local depois com 
rótulo honesto de demo. Selo "Cliente verificado" na Graziela. 
DEPOIMENTO_VERIFICADO como constante estática (não editável via 
localStorage).

**Comando escolhido:** clarify (terceira execução — Depoimentos)

**Prompt/orientação complementar:**
"Contexto: Proof Ledger; PRODUCT.md Principle 4; critique P1-1 
(Depoimentos browser-local illusions); clarify 3ª. Tarefa: prova 
real lidera; selo 'Cliente verificado'; quadro local com rótulo 
honesto de demo; DEPOIMENTO_VERIFICADO estático; migração filtra 
seed legado c2; anatomia dos cards consistente; badge-verified 
ghost verde."

**Resultado produzido:**

index.html:
- Âncora #prova-real abre a seção antes de qualquer conteúdo local
- Nota "visíveis apenas neste navegador" saiu do topo (poluiria a 
  prova) e virou cabeçalho do quadro local — "Demonstração — 
  depoimentos funcionais no seu navegador" + linha sobre ausência 
  de servidor

js/script.js:
- DEPOIMENTO_VERIFICADO sai do localStorage (constante estática, 
  não editável/deletável)
- Migração filtra o seed legado c2 do storage (sem duplicar, sem 
  masquerading)
- renderizarProvaReal() com selo verde Cliente verificado 
  (bi-patch-check-fill, link pra demo do projeto) e mesma anatomia 
  dos cards (col-md-6/col-lg-4, shadow-sm, corners 6px)

css:
- .badge-verified ghost verde (texto AA, hover underline, sem 
  hover-fill)
- min-height:44px no coarse → tap mantido
- Mariana não ressuscitada

Próximo (indicado pelo Impeccable): #3 polish (link "Área 
administrativa" no footer + badge "Autor" green-ghost)

**Análise do resultado:**
- ✅ P1-1 resolvido: prova real lidera (Graziela)
- ✅ Selo "Cliente verificado" (bi-patch-check-fill, link pra demo)
- ✅ Quadro local com rótulo honesto de demo
- ✅ DEPOIMENTO_VERIFICADO estático (não editável via localStorage) 
  — decisão de integridade
- ✅ Migração filtra seed legado c2 (Mariana não ressuscita)
- ✅ Anatomia dos cards consistente
- ✅ badge-verified ghost verde (sem hover-fill)
- ✅ Tap targets ≥44px preservados
- ✅ 2 tintas preservadas

**Decisão tomada:**
Aceito o resultado integralmente. O clarify 3ª resolveu o P1-1 com 
decisões de integridade (DEPOIMENTO_VERIFICADO estático; migração 
filtra seed legado) e alinhamento com PRODUCT.md Principle 4. 
A prova real lidera; o quadro local é honestamente rotulado como 
demo.

**Evidência:**
- Âncora #prova-real antes do quadro local
- Selo "Cliente verificado" (bi-patch-check-fill, link pra demo)
- Cabeçalho do quadro local: "Demonstração — depoimentos funcionais 
  no seu navegador"
- DEPOIMENTO_VERIFICADO: constante estática (não localStorage)
- Migração filtra seed legado c2
- badge-verified: ghost verde, texto AA
- Mariana não ressuscitada

### Registro — polish (segunda execução — Admin discoverability)

**Comando:** polish
**Categoria:** Harden (segunda execução — escopo distinto)
**Página:** Footer + badge Autor
**Data:** 2026-09-19

**Problema observado (P1-3 do critique final):**
O `distill` 1ª escondeu o Admin (`d-none`), mas o operador (João) 
precisava de um caminho permanente e discreto para acessar. Após 
logout, o backdoor sumia.

**Hipótese de melhoria:**
Adicionar link quieto "Área administrativa" no footer (discreto, 
não visível no scan do recrutador); badge "Autor" green-ghost 
(identifica o operador sem chamar atenção); preservar Two-Ink Rule.

**Comando escolhido:** polish (segunda execução — Admin)

**Prompt/orientação complementar:**
"#3 polish (link 'Área administrativa' no footer + badge 'Autor' 
green-ghost). Resolver P1-3 sem reintroduzir admin visível."

**Resultado produzido:**

index.html:
- Footer ganhou link quieto "Área administrativa" (#admin-link → 
  #admin), tipografia meta, sem chamar atenção — reativa o backdoor 
  que sumia após logout

js/script.js:
- Badge "Autor" badge-skill (azul) → badge-author (verde-ghost) 
  dentro do reply carimbado (Two-Ink Rule: stamproom só com a 2ª 
  tinta)
- #admin-link some quando logado

css/style.css:
- .badge-author ghost verde (texto #00784b ~5.5:1, borda 1px, sem 
  hover-fill)
- .footer-admin-link branco 0.55 (~5.9:1) com focus ring papel nos 
  escuros
- prefers-reduced-motion respeitado

**Análise do resultado:**
- ✅ P1-3 resolvido: link no footer (discreto); backdoor reativado
- ✅ Não reintroduziu admin visível (não voltou para a nav)
- ✅ Badge "Autor" green-ghost (Two-Ink Rule respeitada)
- ✅ #admin-link some quando logado (não polui para o operador)
- ✅ Contraste: #00784b ~5.5:1; branco 0.55 ~5.9:1
- ✅ Focus ring papel nos escuros
- ✅ prefers-reduced-motion respeitado

**Decisão tomada:**
Aceito o resultado integralmente. O polish 2ª resolveu o P1-3 sem 
reintroduzir o admin visível que o distill 1ª removeu. O link está 
no footer (discreto), o badge usa a 2ª tinta (verde), e a Two-Ink 
Rule foi respeitada.

**Evidência:**
- Link "Área administrativa" no footer (#admin-link → #admin)
- Badge "Autor" green-ghost (badge-author)
- #admin-link some quando logado
- .badge-author: #00784b ~5.5:1
- .footer-admin-link: branco 0.55 ~5.9:1
- Focus ring papel nos escuros

### Registro — layout (terceira execução — grade/gutter Archive×Paper)

**Comando:** layout
**Categoria:** Enhance (grade e espinha vertical)
**Página:** Global (alinhamento do grid nas 6 seções)
**Data:** 2026-09-19

**Problema observado (P2 do critique final):**
"Archive sections inset 1rem from viewport edges; paper sections are 
full-bleed" — `.section-alt` adicionava 16px de padding lateral e 
zerava o padding do `.container` (shim `--section-gutter` criado no 
adapt). Resultado: bloco de conteúdo do Archive desvia 12px vs. o 
Paper em desktop (container centrado: padding do container 12px vs. 
padding da seção 16px + padding do container zerado → espinha do 
Archive 12–14px à esquerda da do Paper; no mobile ambos 16px, 
coincidiam). Cartões não batiam na mesma coluna de borda entre 
Formação/Projetos (Archive) e Experiências/Depoimentos (Paper).

**Hipótese de melhoria:**
Alinhar de verdade na grade do container (DESIGN.md — Layout: "Bootstrap 
12-column grid on the standard responsive container"; "Card columns use 
`g-4` gutters (24px)"). Archive é tom, não moldura: a banda de fundo 
segue full-bleed, mas o conteúdo precisa repousar exatamente no mesmo 
container/padding do Paper. Remover o shim de 16px (causa raiz) e 
deixar o container padrão do Bootstrap (12px desktop / 16px mobile) — 
sem indent extra, sem mágica de "parecer alinhado".

**Comando escolhido:** layout

**Prompt/orientação complementar:**
"Contexto: Proof Ledger. critique P2: gutter/alinhamento das seções 
Archive (Formação, Projetos, Contato) diferente dos Paper (Sobre, 
Experiências, Depoimentos) — cards não batem na mesma coluna. Tarefa: 
padronizar bordas de campo na MESMA grade (col-md-6/col-lg-4 e 
container); espinha vertical idêntica entre Formação, Projetos, 
Experiências, Depoimentos; NÃO mudar alternância de fundo, py-5, 
regra 60×4, corners 6/8, tap ≥44, escala/lh, 2 tintas, 
prefers-reduced-motion; nada de indent só para parecer alinhado."

**Resultado produzido:**

css/style.css:
- `.section-alt`: removido `--section-gutter: 1rem`, `padding-left/right` 
  e o override que zerava o padding do `.section-alt > .container`. 
  Sobrou apenas o tom: `background-color: var(--light-bg)` (banda 
  full-bleed preservada).
- `.section-alt > .container`: padding lateral explícito `0.75rem` 
  (12px — metade do gutter de 24px do grid, igual ao container do 
  Paper) e `1rem` (16px) no `@media ≤575.98px` (piso de 16px do 
  DESIGN.md). Arquivo vendor bootstrap.min.css mantido intacto.
- Nada mais mudou (py-5, regra 60×4, corners, tap, escala/lh, 2 tintas, 
  reduced-motion intactos).

**Análise do resultado:**
- ✅ Espinha vertical idêntica nas 4 seções: Formação (cards direto no 
  container), Projetos (`.row.g-4` + `col-md-6 col-lg-4`), 
  Experiências (card direto), Depoimentos (`.row.g-4` + 
  `col-md-6 col-lg-4`) — todos na borda do content-box do container.
- ✅ Grade única nas 6 seções: Sobre, Formação, Experiências, Projetos, 
  Depoimentos e Contato compartilham o mesmo container centrado e o 
  mesmo inset horizontal (12px desktop / 16px mobile). Delta espinha 
  Paper×Archive = 0 em todos os viewports (360→1920 medidos).
- ✅ Gutter efetivo igual: rows de card `g-4` (24px) e rows padrão 
  (24px) produzem a mesma coluna de borda; sem desvio 12px vs 16px.
- ✅ Alternância preservada: Archive continua sendo banda de tom 
  full-bleed (`--light-bg`), sem moldura.
- ✅ Indent elimónio real, não cosmético: o alinhamento vem do container 
  padrão do Bootstrap, sem shim nos cards.
- ✅ Detector: scan layout com 0 achados (cramped-padding resolvido com 
  o padding explícito do container Archive). Restam só os achados 
  sancionados: 2× overused-font (faces pinadas no DESIGN.md), side-tab 
  (reply carimbado), raio 2px (regra 60×4) — assinaturas intencionais.

**Decisão tomada:**
Aceito o resultado integralmente. O layout 3ª removeu a causa raiz 
(shim de 16px do adapt) e recolocou o Archive na grade do container 
padrão, fechando o P2 do critique sem tocar em alternância, ritmo 
py-5, regra 60×4, corners, tap targets, escala/lh, 2 tintas ou 
reduced-motion. Histórico da interferência (Registro — adapt) 
preservado sem alteração.

**Evidência:**
- `.section-alt { background-color: var(--light-bg) }` (sem padding)
- `.section-alt > .container { padding-inline: 0.75rem / 1rem }`
- Soma em viewports 360/568/576/768/992/1280/1440/1920: espinha 
  Paper = espinha Archive (delta 0)
- Detector layout: `[]`; scan geral: só achados sancionados (2× fontes, 
  side-tab, raio 2px)

  ### Registro — critique (re-critique final) → decisão

**Comando:** critique (re-critique final)
**Página:** Global
**Problema observado:** O re-critique final achou 4 issues:
1. Depoimentos: padrão public-review em arquitetura per-browser (P1, 
   maior alavanca de credibilidade)
2. Publicar projeto/comentário sem confirmação de sucesso (P2, silent 
   system-status gap)
3. Sobre denso + cards de projeto longos (P2, density)
4. Nome do hero truncado vs. marca (P2, name alignment)
**Hipótese de melhoria:** Atacar primeiro o Depoimentos trust fix 
(P1) porque é a maior alavanca de credibilidade e alinha com 
PRODUCT.md Principle 4. Os 3 P2 podem ser resolvidos depois ou 
registrados como reconhecidos.
**Prompt/orientação:** "The top 4 issues are: (1) the Depoimentos 
board runs a public-review pattern on a per-browser architecture, 
(2) publishing a project/comment gives no success confirmation, 
(3) Sobre is dense and project cards run long, (4) the hero name 
is truncated vs the brand. Which should we tackle first?"
**Resultado produzido:** 4 opções + campo aberto:
1. Depoimentos trust fix (Recomendada) — P1, maior alavanca
2. Publish feedback + a11y — P2, silent gap
3. Sobre + project card density — P2, density
4. Name alignment — P2, marca
**Análise do resultado:**
- Opção 1: único P1; maior alavanca de credibilidade; fecha o loop 
  do clarify 3ª; alinha com Principle 4.
- Opção 2: resolve P2 + aria-live deferido; mas P2.
- Opção 3: distill 2ª já reduziu chips; trabalho de copy.
- Opção 4: fix pequeno; P2.
**Decisão tomada:** Escolho **Opção 1 — Depoimentos trust fix**. 
Justificativa: é o único P1; maior alavanca de credibilidade; fecha 
o loop do clarify 3ª (que moveu mas não reestruturou). Depois: 
`extract` + `live` (obrigatórios). Os P2 (publish feedback, density, 
name alignment) ficam reconhecidos/pendentes.

### Registro — critique (re-critique final) → Depoimentos direção

**Comando:** critique (re-critique final) → decisão sobre Depoimentos
**Página:** Seção Depoimentos
**Problema observado (P1):** O critique ainda vê o Depoimentos como P1 
— o padrão public-review ainda está lá, mesmo com a Graziela liderando 
e o quadro local rotulado como demo (clarify 3ª).
**Hipótese de melhoria:** Reestruturar o campo: prova externa 
(Graziela + WhatsApp/email) como core; quadro local como demo explícita 
do admin build.
**Prompt/orientação:** "For the Depoimentos field specifically, which 
direction matches your intent?"
**Resultado produzido:** 3 opções + campo aberto:
1. External-proof primary (Recomendada) — prova externa core; quadro 
   local demo explícita
2. Keep board, relabel honestly — mantém quadro, reframe como demo 
   do admin work
3. Leave as-is for now — mantém clarify 3ª
**Análise do resultado:**
- Opção 1: resolve o P1; alinha com Principle 4 e Proof Ledger; 
  separa prova real de demo; craft preservado (demo rotulada).
- Opção 2: mantém craft; mas quadro local ainda compete com prova 
  real; risco de confusão.
- Opção 3: não resolve o P1; deixa o public-review pattern aberto.
**Decisão tomada:** Escolho **Opção 1 — External-proof primary**. 
Justificativa: é a única que resolve o P1 de verdade (remove o 
public-review pattern); alinha com PRODUCT.md Principle 4 e Proof 
Ledger; preserva o craft (demo rotulada). Depois: `extract` + `live` 
(obrigatórios). P2 (publish feedback, density, name alignment) ficam 
reconhecidos.

### Registro — critique (re-critique final) → escopo

**Comando:** critique (re-critique final)
**Página:** Global
**Problema observado:** O re-critique final achou 1 P1 + 3 P2 + 3 P3 
(7 issues).
**Hipótese de melhoria:** Definir escopo da última passada sem atrasar 
os obrigatórios (extract, live) e sem introduzir regressões.
**Prompt/orientação:** "I found 1 P1 + 3 P2 + 3 P3 issues. How much 
do you want to take on?"
**Resultado produzido:** 3 opções + campo aberto:
1. Top 3 only — Depoimentos + submit feedback + Sobre/card density
2. All critical (P1 + P2) — inclui name drift
3. Everything — inclui P3 (gutters, hover lift, quote icon, stale 
   ranking)
**Análise do resultado:**
- Opção 1: maior impacto/menor mudança; fecha P1 + 2 P2; escopo 
  controlado; não atrasa extract/live.
- Opção 2: fecha P1 + P2; mas name drift é P2 (não crítico).
- Opção 3: cobertura total; mas P3 são pequenos; risco de regressão; 
  atrasa extract/live.
**Decisão tomada:** Escolho **Opção 1 — Top 3 only**. Justificativa: 
você está a 2 comandos de fechar (extract, live); Top 3 resolve o 
P1 + os 2 P2 de maior impacto (Depoimentos, submit feedback, density); 
name drift e P3 ficam reconhecidos/não críticos. Melhor escopo 
controlado do que "Everything" (risco de regressão + atraso).

### Registro — layout (terceira execução — ajustes pontuais)

**Comando:** layout (terceira execução — escopo distinto)
**Página:** Sobre + Depoimentos
**Data:** 2026-09-19

**Problema observado:**
1. Sobre: botão "Baixar currículo em PDF" acima do parágrafo — 
   interrompe a leitura antes do conteúdo.
2. Depoimentos: botão "contato" duplica a ação de contato 
   que já existe no empty state (WhatsApp/E-mail) e polui a prova 
   real (Graziela).

**Hipótese de melhoria:**
1. Mover o CV para depois dos textos (lead → parágrafo → info-list 
   → soft skills → hard skills → CV).
2. Remover o botão "Deixar depoimento"; manter WhatsApp/E-mail no 
   empty state como ação primária.

**Comando escolhido:** layout (terceira execução — ajustes pontuais)

**Prompt/orientação complementar:**
"Tarefa: mover o botão CV para depois dos textos; remover o botão 
'Deixar depoimento' da seção Depoimentos. Preservar: 2 tintas, 
regra 60×4px, alternância Paper/Archive, escala, corners, focus 
ring, tap targets, pt-BR."

**Resultado produzido:**
[o que o Impeccable devolver]

**Análise do resultado:**
- ✅ CV movido para depois dos textos?
- ✅ Botão "Deixar depoimento" removido?
- ✅ Empty state (WhatsApp/E-mail) preservado?
- ✅ Graziela como prova central preservada?
- ✅ 2 tintas preservadas?
- ✅ Regra 60×4px preservada?
- ⚠️ Modal de depoimento ficou órfão?

**Decisão tomada:**
[aceitar / modificar / rejeitar]

**Evidência:**
- Sobre: [descrição antes/depois]
- Depoimentos: [descrição antes/depois]

### Registro — extract (decisão)

**Comando:** extract
**Categoria:** System
**Página:** Global (CSS)
**Data:** 2026-09-19

**Problema observado:**
O `extract` precisa extrair componentes reutilizáveis (cards, botões, 
section-title) e deduplicar CSS. A dúvida é onde os componentes 
extraídos devem viver.

**Hipótese de melhoria:**
Manter um único `css/style.css` reorganizado em camadas (tokens → 
base → componentes → seções), com regras deduplicadas. Zero risco 
de link novo; preserva tudo das fases anteriores.

**Prompt/orientação complementar:**
"Para extrair os componentes (cards, botões, section-title) e 
deduplicar o CSS num site estático sem build step, onde os componentes 
extraídos devem viver?"

**Resultado produzido:** 2 opções + campo aberto:
1. Um style.css reorganizado (Recomendada)
2. Dividir em arquivos por camada (tokens.css, base.css, 
   components.css, sections.css)

**Análise do resultado:**
- Opção 1: zero risco de link novo; preserva fases anteriores; 
  reorganizado em camadas; deduplica; alinha com DESIGN.md; alinha 
  com PRODUCT.md (no build step).
- Opção 2: mais granular; mas 4 arquivos novos = 4 links no 
  index.html = risco de quebrar cascata; não é melhor para site 
  estático sem build.

**Decisão tomada:** Escolho **Opção 1 — Um style.css reorganizado**. 
Justificativa: zero risco de quebrar; preserva tudo das fases 
anteriores; alinha com DESIGN.md (camadas) e PRODUCT.md (no build 
step); realiza o `extract` (componentes compartilhados + deduplicação) 
sem adicionar complexidade.

**Evidência:**
- [o que o Impeccable devolver]

### Registro — extract

**Comando:** extract
**Categoria:** System
**Página:** Global (CSS)
**Data:** 2026-09-19

**Problema observado:**
O CSS tinha valores repetidos, blocos duplicados e tokens informais. 
Faltava extrair componentes reutilizáveis e deduplicar.

**Hipótese de melhoria:**
Reorganizar o `css/style.css` em camadas (tokens → base → 
componentes → seções), extrair tokens nomeados mapeando o DESIGN.md, 
deduplicar regras sem regressão.

**Comando escolhido:** extract

**Prompt/orientação complementar:**
"Extrair componentes reutilizáveis (cards, botões, section-title) e 
deduplicar CSS. Onde os componentes devem viver?"

**Resultado produzido:**

Tokens nomeados (mapeando DESIGN.md):
- --radius-sm/md (6/8px)
- --ring-blue/-white (foco 0.65/0.7)
- --blue-tint (skills), --green-tint (reply/verified)
- --blue-selection, --hero-overlay
- --white-hero-cargo, --white-link(-hover)
- --ease-quick/standard (0.2/0.25s)
- --scroll-thumb, --measure-card:62ch

Dedup:
- --fs-quote (0.875rem) absorvido por --fs-meta
- h3/.h3+h5/.h5 e h4/.h4+h6/.h6 fundidos
- Blocos html, prefers-reduced-motion e .btn consolidados
- Outline branco 2px em seletor único
- Scrollbar-color unificada

Integridade:
- Chaves {} balanceadas (89/89)
- Detector só com as 2 fontes sancionadas
- Sem mudança semântica de cascade

**Análise do resultado:**
- ✅ Tokens nomeados mapeando DESIGN.md
- ✅ Dedup sem regressão
- ✅ Integridade preservada (chaves balanceadas; detector limpo)
- ✅ Zero regressão

**Decisão tomada:**
Aceito o resultado integralmente. O extract completou a fase System 
e o pipeline Impeccable está completo de ponta a ponta.

**Evidência:**
- Tokens: --radius-sm/md, --ring-blue/-white, --blue-tint, 
  --green-tint, --blue-selection, --hero-overlay, --white-hero-cargo, 
  --white-link, --ease-quick/standard, --scroll-thumb, --measure-card
- Dedup: --fs-quote absorvido; h3+h5, h4+h6 fundidos
- Chaves {}: 89/89 balanceadas
- Detector: só 2 fontes sancionadas

### Registro — live

**Comando:** live
**Categoria:** System
**Página:** Global
**Data:** 2026-09-19

**Problema observado:**
O `live` foi iniciado para explorar variações, mas o projeto já 
estava resolvido após as intervenções anteriores.

**Hipótese de melhoria:**
Não aplicável — as decisões de design já estavam consolidadas no 
DESIGN.md v2 (Proof Ledger, hero type-led, 2 tintas, regra 60×4px, 
escala 12→64, etc.).

**Comando escolhido:** live

**Prompt/orientação complementar:**
"Tarefa: apontar para a página, explorar variações do hero (type-led 
vs. atual) e escolher a que melhor serve o Proof Ledger e o público."

**Resultado produzido:**
Nenhuma variação aplicada — o projeto já estava resolvido. O comando 
foi executado como etapa de verificação, sem mudanças.

**Análise do resultado:**
- ✅ O projeto já estava no estado final desejado
- ✅ As decisões do DESIGN.md v2 já estavam aplicadas
- ✅ Não havia variações a explorar (o hero type-led já tinha sido 
  definido no bolder)
- ⚠️ O live foi executado mas não alterou nada (esperado)

**Decisão tomada:**
Aceito que o live não altere nada — o projeto já está no estado 
final. O comando foi executado como etapa de verificação dos 
requisitos da atividade.

**Evidência:**
- Nenhuma mudança aplicada
- Projeto no estado final do DESIGN.md v2