# React + TypeScript + Vite eslint husky lint-staged cicd devepment to production

1. antfu eslint-config | https://github.com/antfu/eslint-config

2. antfu eslint-config settings | https://gist.github.com/rcreativity/f677295369dd41d2dcfd1937d1b4433d

3. ESLint Stylistic | https://eslint.style/

4. Husky | https://typicode.github.io/husky/

5. lint-staged | https://www.npmjs.com/package/lint-staged

6. Building and testing Node.js | https://docs.github.com/en/actions/tutorials/build-and-test-code/nodejs

7. Triggering a workflow | https://docs.github.com/en/actions/how-tos/write-workflows/choose-when-workflows-run/trigger-a-workflow

8. act (local workflow testing) | https://nektosact.com/

### app caching (use if applicable)

9. use `Cache-Control "public, max-age=31536000, immutable"` for (js|css) and Static Asset Caching (?:ico|gif|jpg|jpeg|png|woff2?|ttf|svg|eot)
10. use `Cache-Control: no-cache, no-store, must-revalidate` for html so that it will fetch newly files hashed called Cache Busting
11. use gzip or brotli compression to reduce file size by 50% to load
12. Workbox PWA application if requited for offline site

ETag: A unique hash representing file content. Browser sends it back to server to check if file changed.
Last-Modified: Timestamp of the last modification. Server can respond with 304 Not Modified if file hasn’t changed.

Saves bandwidth because the browser only downloads changed files.
\*\* <meta http-equiv="Cache-Control" content="max-age=3600">

##

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
import reactDom from "eslint-plugin-react-dom";
// eslint.config.js
import reactX from "eslint-plugin-react-x";

export default defineConfig([
  globalIgnores(["dist"]),
  {
    files: ["**/*.{ts,tsx}"],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs["recommended-typescript"],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ["./tsconfig.node.json", "./tsconfig.app.json"],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
]);
```
