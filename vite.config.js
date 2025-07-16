// import { defineConfig } from 'vite'
// import react from '@vitejs/plugin-react'

// import tailwindcss from '@tailwindcss/vite'
// import svgr from 'vite-plugin-svgr';

// // https://vite.dev/config/
// export default defineConfig(({ command }) => {
//   const config = {
//     plugins: [
//       react(),
//       tailwindcss(),
//       svgr(),
//     ],
//   }

//   if (command === 'serve') {
//     // dev
//     config.base = '/'
//   } else {
//     // production
//     config.base = '/portfolio/'
//   }

//   return config
// })


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import tailwindcss from '@tailwindcss/vite'
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
    svgr(),
  ],
  base: '/portfolio/',
})