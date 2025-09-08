import { defineConfig } from 'vite'
import React from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'



export default defineConfig({
  plugins: [
    React(),
    tailwindcss()
  ],
})

export default {
  server: {
    allowedHosts: [
      "e055bdef-2055-469d-af90-9852b2d6f2e8-00-1kw2ty4lfzrg1.picard.replit.dev"
    ]
  }
}
