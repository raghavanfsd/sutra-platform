# Sutra Platform

Sutra is a modular realtime Communication Platform backend built with **NestJS**, **TypeScript**, and **CucumberJS** and **Jest** for BDD/TDD apprroach. It provides a scalable and extensible foundation to build multiple business verticals with real-time communication services and GenAI/Conventional AI services.

---

## 📁 Monorepo Structure

This repository follows a modular monorepo layout:

sutra-platform/
├── apps/
│ └── sutra-api/ # Main API service (NestJS)
├── libs/
│ └── (core libraries...) # Shared modules (e.g., Redis, auth, utils)
├── tests/
│ └── features/ # BDD features and step definitions
├── .husky/ # Git hooks
├── .github/ # GitHub Actions CI
├── Makefile # Common dev commands
├── package.json
└── tsconfig.json

---

## 🚀 Quick Start

### 1. Install dependencies

```bash
npm install

### 2. Run development server

npm run start --prefix apps/sutra-api

### 3. Run BDD tests (Cucumber)

npm run test:e2e

### 4. API Endpoints

- GET / – Hello World

- GET /health – Health check

- GET /echo?msg=hello – Echo test

📌 Next Steps

- Modularize Redis, Auth, and PubSub into libs/core/

- Add Docker + CI workflows