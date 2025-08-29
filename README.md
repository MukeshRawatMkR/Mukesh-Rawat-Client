# Portfolio Website

## Overview

This is a modern, frontend-only portfolio website built with React and TypeScript. The application features a clean, minimalist design with a black and white theme, showcasing personal projects, skills, and contact information. The website includes smooth animations, responsive design, and a comprehensive component library using shadcn/ui.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript for type safety and modern development
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
- **Frontend Only**: Pure React/TypeScript frontend application
- **Path Aliases**: Configured aliases for clean imports (@/, @assets/)
- **Type Safety**: TypeScript for component and prop type safety
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