# React + TypeScript + Vite

This project uses **Vite** for lightning-fast development and build tooling, along with **React** and **TypeScript**. ESLint is included for code quality checks.

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Start the development server

```bash
npm run dev
```

Runs the app in development mode at [http://localhost:5173](http://localhost:5173).

### 3. Build for production

```bash
npm run build
```

Outputs a static production-ready site in the `dist/` folder.

### 4. Preview the production build

```bash
npm run preview
```

Locally preview the production build before deploying.

---

## 🧪 Linting

To run ESLint:

```bash
npm run lint
```

To auto-fix issues:

```bash
npm run lint -- --fix
```

---

## 🛠 Expanding ESLint (Advanced)

For production apps, you can enable **type-aware rules** and **React-specific rules**.

Example configuration:

```ts
// eslint.config.js
import reactX from 'eslint-plugin-react-x';
import reactDom from 'eslint-plugin-react-dom';

export default tseslint.config([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      ...tseslint.configs.recommendedTypeChecked,
      ...tseslint.configs.strictTypeChecked,
      ...tseslint.configs.stylisticTypeChecked,
      reactX.configs['recommended-typescript'],
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
]);
```

---

## 📁 Project Structure

```
your-project/
├── public/                  # Static assets
├── src/                     # Source code
│   ├── components/          # Reusable components
│   ├── App.tsx              # Main app component
│   └── main.tsx             # Entry point
├── tsconfig.json            # TypeScript config
├── vite.config.ts           # Vite config
└── README.md
```

---

## 📦 Tech Stack

- ⚡ [Vite](https://vitejs.dev/)
- ⚛️ [React](https://reactjs.org/)
- 🟦 [TypeScript](https://www.typescriptlang.org/)
- 📏 [ESLint](https://eslint.org/)

---

## 🌐 Deployment

You can easily deploy this project to platforms like:

- [Vercel](https://vercel.com/)
- [Netlify](https://www.netlify.com/)
- [GitHub Pages](https://pages.github.com/)

---

## 🧑‍💻 Author

> Replace this section with your name, GitHub profile, or portfolio link.

---

## 📜 License

This project is open-source and available under the [MIT License](LICENSE).
