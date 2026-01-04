# Decisões Técnicas

## ORM
- Prisma ORM (versão 7)
- Schema como fonte da verdade
- Migrations versionadas

## Banco de Dados
- PostgreSQL
- Banco criado manualmente
- Estrutura gerenciada via Prisma

## Configuração
- Uso de prisma.config.ts conforme padrão Prisma 7
- .env não versionado

## Padrões
- Sem SQL manual
- Evolução incremental via migrations