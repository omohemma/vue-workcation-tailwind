## Designing with Tailwind CSS- Setting up Tailwind and PostCSS

---

- Initiate project
  ```
  npm init
  ```
- Install packages

  ```
   npm install tailwindcss postcss-cli
   autoprefixer
  ```

- Initiate tailwind config file

  ```
  npx tailwind init
  ```

- Configure Postcss
- Setup tailwindcss file

  ```

  @tailwind base;
  @tailwind components;
  @tailwind utilities;

  ```

- Setup Build command

  ```
      "scripts": {
      "build": "postcss css/tailwind.css -o dist/css/tailwind.css"
      }
  ```

---

## Designing with Tailwind CSS Customizing Your Design System
___

> npx tailwind init tailwind-full.config.js --full
