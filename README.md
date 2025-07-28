# 🌐 Full Stack Automation – UI + API

This project demonstrates automation testing on a sample **React frontend** and **Node.js backend** using Cypress (UI) and Postman/Newman (API). It includes a full CI setup via GitHub Actions.

---

## 📁 Features

- 🔐 **Login Tests** (valid/invalid)
- 🧑‍💼 **Manage Roles and Permissions** CRUD (Create, Read, Update, Delete)
- ✅ API and UI tested end-to-end
- 🔄 GitHub Actions for CI
- 🧪 Cypress + Newman test coverage

---

## 🚀 Quick Setup (1–2 mins)

> Requires **Node.js v23.5.0 or Latest**

🔹 Install from Node.js Official Website

``` bash
Go to: https://nodejs.org/en/download

Click "Other Downloads"

Choose version v23.5.0 for your OS:

.msi for Windows

.pkg for macOS

.tar.xz for Linux

After installation, verify with:

node -v

Expected Output:
v23.5.0
```

### 1. Clone the Repository

```bash
git clone https://github.com/SulemanBhatti912/QA_Engineer_Challenge_Suleman.git
cd QA_Engineer_Challenge_Suleman.git
```

### 2. Install Dependencies

```bash
npm install
```

### 3 If not globally installed, install Cypress and Newman locally:

```bash
npm install cypress newman --save-dev
```

### 4. Run Tests

#### 👉 UI Tests (Cypress)

```bash
npm run test:ui
```

#### 👉 API Tests (Postman via Newman)

```bash
npm run test:api
```

---

## 🧪 Test Scripts

```json
"scripts": {
  "test:ui": "npx cypress run --spec cypress/e2e/LoginAndCRUD.cy.js",
  "test:api": "newman run Schesti.postman_collection.json -e Schesti.postman_environment.json -r cli,html --reporter-html-export reports/api-report.html"
}
```

---

## 🛠 Tools Used

- **Cypress** – UI Automation
- **Postman/Newman** – API Automation
- **GitHub Actions** – CI integration
- **Node.js** – App + test runners

---

## 📂 Folder Structure

```
.github/workflows/        → GitHub CI workflow
cypress/e2e/              → UI test specs
Schesti.postman_collection.json → API collection
Schesti.postman_environment.json → API environment
```

---

## 📄 Author

**Suleman Bhatti**  
Software QA Automation Engineer
