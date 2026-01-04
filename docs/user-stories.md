# User Stories – CRM para Marketing (Tráfego Pago)

Este documento descreve as funcionalidades do MVP do CRM em forma de user stories simples, organizadas por domínio do sistema.

O objetivo é guiar o desenvolvimento de forma clara e incremental.

---

## 1. Autenticação e Usuários

### Usuários
- Criar usuário do sistema
- Editar usuário
- Ativar/desativar usuário
- Definir papel do usuário (vendedor, gestor, tráfego)
- Realizar login
- Realizar logout

---

## 2. Leads

### Cadastro de Leads
- Criar lead manualmente
- Editar informações do lead
- Visualizar lista de leads
- Visualizar detalhes de um lead
- Excluir lead (soft delete)

---

### Origem e Responsável
- Definir origem do lead (Meta, Google, indicação, etc.)
- Atribuir lead a um vendedor
- Alterar vendedor responsável

---

## 3. Funil de Vendas

### Gestão do Funil
- Visualizar funil de vendas em formato de lista ou kanban simples
- Mover lead entre etapas do funil
- Registrar automaticamente o histórico de mudança de etapa
- Visualizar histórico completo do funil de um lead

---

### Perda de Lead
- Marcar lead como perdido
- Registrar motivo da perda
- Visualizar leads perdidos por motivo

---

## 4. Atividades

### Registro de Atividades
- Registrar atividade para um lead
- Registrar atividade para um cliente
- Definir tipo de atividade (ligação, reunião, mensagem, e-mail)
- Visualizar atividades por lead ou cliente
- Visualizar atividades por usuário

---

## 5. Propostas e Venda

### Processo de Venda
- Registrar envio de proposta
- Informar valor da proposta
- Informar data de validade da proposta
- Atualizar status da negociação

---

### Fechamento
- Marcar venda como ganha
- Converter lead em cliente automaticamente
- Marcar venda como perdida com motivo

---

## 6. Clientes

### Gestão de Clientes
- Criar cliente automaticamente a partir de lead ganho
- Editar dados do cliente
- Visualizar lista de clientes
- Visualizar detalhes do cliente
- Alterar status do cliente (ativo, cancelado)

---

### Renovação
- Definir data de renovação do cliente
- Visualizar clientes próximos da renovação
- Registrar renovação de contrato
- Registrar cancelamento (churn)

---

## 7. Campanhas

### Gestão de Campanhas
- Criar campanha para um cliente
- Editar campanha
- Ativar/desativar campanha
- Visualizar campanhas por cliente
- Definir plataforma da campanha (Meta, Google, etc.)
- Definir orçamento diário

---

## 8. Métricas de Tráfego

### Registro de Métricas
- Registrar métricas manualmente por campanha
- Visualizar métricas por campanha
- Visualizar métricas por período
- Calcular ROAS automaticamente

---

## 9. Dashboards (MVP)

### Dashboard Comercial
- Visualizar total de leads
- Visualizar leads por etapa do funil
- Visualizar vendas ganhas e perdidas
- Visualizar taxa de conversão

---

### Dashboard de Tráfego
- Visualizar investimento total
- Visualizar resultados por campanha
- Visualizar ROAS por cliente

---

## 10. Regras Gerais do Sistema

- Todo lead deve ter um responsável
- Toda movimentação no funil deve gerar histórico
- Um lead só pode gerar um cliente
- Uma atividade pertence a um lead OU a um cliente
- Métricas devem sempre estar vinculadas a uma campanha
- Usuários só podem acessar dados conforme seu papel

---

## Status
🟢 User stories do MVP definidas  
Pronto para iniciar a implementação técnica.