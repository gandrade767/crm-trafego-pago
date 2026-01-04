# Modelagem de Dados – CRM Marketing (Tráfego Pago)

## Visão Geral
O modelo de dados foi projetado para suportar:
- Funil de vendas rastreável
- Histórico completo de ações
- Gestão de campanhas e métricas
- Crescimento futuro do sistema

Banco de dados relacional (ex: PostgreSQL).

---

## Entidades Principais

### users
- id
- name
- email
- password
- role
- active
- created_at

Usuários do sistema (vendedores, gestores, tráfego).

---

### leads
- id
- name
- email
- phone
- source
- campaign_name
- funnel_stage
- owner_id
- status
- created_at

Representa oportunidades comerciais.

---

### lead_stage_history
- id
- lead_id
- from_stage
- to_stage
- changed_by
- changed_at

Histórico de movimentações no funil.

---

### clients
- id
- company_name
- contact_name
- email
- plan
- monthly_value
- start_date
- renewal_date
- status

Criado automaticamente quando uma venda é ganha.

---

### campaigns
- id
- client_id
- platform
- name
- objective
- daily_budget
- status
- start_date
- end_date

Campanhas de tráfego associadas a clientes.

---

### campaign_metrics
- id
- campaign_id
- date
- impressions
- clicks
- leads
- conversions
- cost
- revenue
- roas

Métricas de performance (lançamento manual no MVP).

---

### activities
- id
- lead_id (opcional)
- client_id (opcional)
- user_id
- type
- description
- created_at

Registro de interações com leads ou clientes.

---

## Relacionamentos
- users (1) → (N) leads
- leads (1) → (N) lead_stage_history
- leads (0,1) → (1) clients
- clients (1) → (N) campaigns
- campaigns (1) → (N) campaign_metrics
- users (1) → (N) activities

---

## Regras Importantes
- Nenhum lead muda de etapa sem gerar histórico
- Cliente sempre se origina de um lead
- Uma atividade pertence a um lead OU a um cliente
- Métricas sempre ligadas a campanhas