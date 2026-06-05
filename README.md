# Harsha Vardhan Sri Ramoji Portfolio

A premium portfolio built with React, Vite, Tailwind CSS, Framer Motion, GSAP, Three.js, and React Three Fiber.

## Stack

- Frontend: React, Vite, TypeScript, Tailwind CSS, Framer Motion, GSAP, Three.js, React Three Fiber
- Tooling: Reusable content-driven sections, SEO metadata, responsive design

## Project Structure

- `client/` - Vite frontend

## Deployment Guide

### Frontend on Netlify

The site is deployed as a static site on Netlify. The pre-built `client/dist` folder is served directly.

1. Connect your GitHub repository to Netlify
2. Netlify will automatically detect `netlify.toml` and deploy
3. Publish directory: `client/dist` (configured in netlify.toml)
4. No build step required - the dist folder is already built and ready to serve
4. Add `VITE_API_URL` to point to the Render backend.

### Backend on Render

1. Create a Web Service from the `server` folder.
2. Build command: `npm install && npm run build`.
3. Start command: `npm start`.
4. Add `MONGODB_URI`, `PORT`, and `CORS_ORIGIN` in Render environment variables.

### MongoDB

Use MongoDB Atlas and connect the backend with a connection string stored in `MONGODB_URI`.

## SEO Assets

The client includes `robots.txt` and `sitemap.xml` under `client/public/` plus meta and Open Graph tags in `client/index.html`.