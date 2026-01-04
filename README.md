# CRM para Empresa de Marketing (Tráfego Pago)

> Status: Em desenvolvimento — fase de modelagem e infraestrutura

Sistema de CRM especializado para empresas de marketing digital focadas em tráfego pago, com o objetivo de centralizar **leads, vendas, clientes, campanhas e resultados** em um único lugar.

---

## Visão do Produto

Este projeto visa desenvolver um CRM que acompanhe todo o ciclo do cliente, desde a entrada do lead até a renovação do contrato, permitindo maior controle comercial, operacional e estratégico para empresas de marketing digital.

O sistema será utilizado inicialmente de forma interna, com possibilidade de evolução futura para um produto SaaS.

---

## Problemas que Resolvemos

- Leads espalhados em planilhas, WhatsApp e e-mails  
- Falta de controle do funil de vendas  
- Dificuldade de relacionar investimento em anúncios com resultados  
- Pouco histórico estruturado de clientes e campanhas  
- Relatórios manuais e pouco confiáveis  
- Falta de previsibilidade de renovação de contratos  

---

## Público-alvo / Perfis de Usuário

- **Vendedor**: gerenciamento de leads e funil  
- **Gestor Comercial**: acompanhamento de vendas e performance  
- **Gestor de Tráfego**: gestão de campanhas e métricas  
- **Cliente Final**: visualização de resultados e relatórios  

---

## Objetivos do Negócio

- Aumentar a taxa de conversão de leads  
- Reduzir o tempo de resposta ao primeiro contato  
- Melhorar a organização do funil comercial  
- Monitorar ROI e ROAS por cliente  
- Aumentar retenção e renovações  
- Apoiar decisões estratégicas com dados  

---

## Escopo do MVP

### Funcionalidades incluídas
- Cadastro de leads  
- Funil de vendas configurável  
- Cadastro de clientes  
- Registro de atividades (ligações, reuniões, mensagens)  
- Cadastro básico de campanhas  
- Lançamento manual de métricas de tráfego  
- Dashboard simples (comercial e tráfego)  
- Controle de usuários e permissões  

### Fora do escopo inicial
- Integrações automáticas com plataformas de anúncios  
- Inteligência artificial  
- Automações avançadas  
- Relatórios personalizados  
- Módulo financeiro completo  

Essas funcionalidades poderão ser adicionadas em versões futuras.

---

## Funil de Vendas

### Etapas do Funil
1. Lead Recebido  
2. Primeiro Contato  
3. Lead Qualificado  
4. Reunião Agendada  
5. Proposta Enviada  
6. Negociação  
7. Venda Ganha  
8. Onboarding  
9. Cliente Ativo  
10. Renovação  

### Regras do Funil
- Todo lead possui um vendedor responsável  
- Toda mudança de etapa é registrada no histórico  
- Propostas possuem validade  
- Vendas perdidas exigem motivo  
- Venda ganha gera cliente automaticamente  
- Cliente ativo não retorna ao funil de leads  

---

## Fluxo do Negócio

Lead → Qualificação → Proposta → Cliente → Campanhas → Métricas → Renovação

---

## Stack Tecnológica (Atual)

- **Backend**: Node.js + Express  
- **ORM**: Prisma  
- **Banco de Dados**: PostgreSQL  
- **Autenticação**: JWT  

---

## Estrutura do Repositório

```text
/docs        → Documentação do produto e regras de negócio
/prisma      → Schema, configurações e migrations do banco
/backend     → API (Node.js + Express)
/frontend    → Aplicação web (futuro)