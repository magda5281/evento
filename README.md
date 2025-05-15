# 🎉 Evento

**Evento** is a content-focused application built with [Next.js](https://nextjs.org/) that showcases the core capabilities of the framework including dynamic routing, server-side rendering, static generation, API integration, animations, and database connectivity. It is designed to demonstrate best practices for building a performant and scalable full-stack app.

---

🔗 **<a href="https://evento-azure-pi.vercel.app/" target="_blank">Live
Demo</a>**

---

## 🚀 Features

- ✅ Built with **Next.js App Router**
- 🎨 Styled using **Tailwind CSS**, extended with custom theme colours
- 🧠 Intelligent class merging with [`clsx`](https://github.com/lukeed/clsx) and [`tailwind-merge`](https://www.npmjs.com/package/tailwind-merge)
- 📍 Active route tracking using `usePathname` hook
- ⚡ Smooth header animations with **Framer Motion**
- 💽 Local development with **SQLite** and **Prisma ORM**
- 🐘 Production deployment using **PostgreSQL** on **Vercel**
- 💡 Suspense and loading skeletons for both individual event and event list pages
- 🔄 `notFound()` and `error.tsx` for graceful error handling
- 🔁 Server-side pagination for event listing
- 🛡️ Type-safe validation with **Zod**
- 🧭 Redirect handling via custom `middleware.ts`
- 🧱 Static generation with `generateStaticParams`, `revalidate`, and `dynamicParams`
- 📦 Cached network requests using `unstable_cache`
- 🔗 Prefetching enabled for detail pages using `Link` component
- 🖼️ Auto-generated Open Graph images for social sharing
- 📱 Fully responsive design for mobile, tablet, and desktop
- ♿ Accessible components with semantic HTML and best practices

---

## 🛠️ Tech Stack

- **Framework:** [Next.js 14+](https://nextjs.org/)
- **Database (Dev):** SQLite
- **Database (Prod):** PostgreSQL (hosted via Vercel)
- **ORM:** [Prisma](https://www.prisma.io/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Validation:** [Zod](https://zod.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Class Utils:** [`clsx`](https://github.com/lukeed/clsx), [`tailwind-merge`](https://github.com/dcastil/tailwind-merge)
- **Deployment:** [Vercel](https://vercel.com/)

---
