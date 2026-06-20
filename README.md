# Hemant Verma — Portfolio

Personal portfolio of Hemant Verma, a Software Developer. Built as a single-page
app with project case studies.

🔗 **Live:** https://hemant-portfolio-liart.vercel.app/

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** (build/dev)
- **Tailwind CSS v4** (`@tailwindcss/vite`)
- **React Router 7** (home + per-project case-study routes)
- **Framer Motion** (animations)
- **EmailJS** (contact form)

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # type-check + production build
npm run preview  # preview the production build
npm run lint     # run ESLint
```

## Environment Variables

The contact form uses EmailJS. Create a `.env` file in the project root:

```
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

## Project Structure

```
src/
  components/   UI + section components (Hero, About, Skills, Projects, Contact, ...)
  pages/        Route-level components (HomePage)
  data/         projects.ts — all project content and case studies
  assets/       images (project screenshots)
public/         static assets, resume PDF, sitemap, robots
```

## Adding a Project

Add an entry to [`src/data/projects.ts`](src/data/projects.ts). Each project
supports a hero `image`, an optional `screenshots` gallery (`{ src, caption }`),
`tags`, `liveUrl`/`codeUrl` (use `"#"` to hide the button for private work), and
a `caseStudy` block. Import screenshots from `src/assets/projects/`.
