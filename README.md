# Portfolio Website

## Overview

This is a modern portfolio website built with React and Vite. It features a clean, minimalist design with a black and white theme, showcasing personal projects, skills, and contact information. The contact form uses a Node.js/Express API and Neon PostgreSQL to store submissions.

## Contact API setup

1. Create a Neon PostgreSQL database and set `DATABASE_URL` in your local `.env` file (copy `.env.example`).
2. Run the SQL in `db/migrations/0001_create_contact_messages.sql` against that database.
3. Run `npm run dev` to start the Express API and Vite frontend together. The Vite development server proxies `/api` requests to the API.
4. For Vercel, add `DATABASE_URL` to the project's environment variables and deploy. The API is available at `POST /api/contact`; submissions are stored in the `contact_messages` table.

The API validates request data, limits JSON payload size, applies security headers, and rate-limits submissions. Set `DATABASE_URL` only in environment variables; never commit database credentials.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with JavaScript for modern development
- **Styling**: Tailwind CSS with a custom design system featuring black and white theming
- **Component Library**: shadcn/ui components built on Radix UI primitives for accessibility
- **State Management**: React hooks for local component state
- **Routing**: React Router DOM for client-side navigation
- **Build Tool**: Vite for fast development and optimized production builds


### UI/UX Design System
- **Theme**: Comprehensive design system with CSS custom properties
- **Dark/Light Mode**: Theme provider with system preference detection
- **Responsive Design**: Mobile-first approach with Tailwind breakpoints
- **Accessibility**: Radix UI components ensure ARIA compliance and keyboard navigation
- **Animations**: Smooth scroll behavior and intersection observer-based animations

### Project Structure
- **Project Structure**: React frontend with an Express contact API
- **Path Aliases**: Configured aliases for clean imports (@/, @assets/)
- **API Validation**: Zod validates contact submissions on the server
- **Development Workflow**: Vite development server with hot module replacement

## External Dependencies

### UI Components & Styling
- **@radix-ui/***: Complete set of unstyled, accessible UI primitives
- **tailwindcss**: Utility-first CSS framework with custom configuration
- **class-variance-authority**: Type-safe component variants
- **lucide-react**: Modern icon library with consistent design

### Development & Build Tools
- **vite**: Next-generation frontend build tool with HMR
- **@vitejs/plugin-react**: React support for Vite

### Forms & Interactions
- **react-hook-form**: Performant forms with minimal re-renders
- **zod**: Runtime type validation and schema definition

### Utilities & Helpers
- **clsx**: Utility for constructing className strings
- **date-fns**: Modern JavaScript date utility library
- **nanoid**: URL-friendly unique ID generator

### Development Environment
- **@replit/vite-plugin-runtime-error-modal**: Enhanced error reporting in Replit
- **@replit/vite-plugin-cartographer**: Development tools integration