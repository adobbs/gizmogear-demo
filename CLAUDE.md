# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- `npm run dev` - Start development server with hot module replacement
- `npm run build` - Build the application for production (runs TypeScript compilation followed by Vite build)
- `npm run lint` - Run ESLint to check code quality and style
- `npm run preview` - Preview the production build locally

## Architecture Overview

This is a React TypeScript application built with Vite, using Mantine UI components and Zustand for state management.

### Key Technologies
- **Frontend Framework**: React 19 with TypeScript
- **Build Tool**: Vite with HMR support
- **UI Library**: Mantine v8 (core, form, hooks, modals, notifications)
- **State Management**: Zustand for global store management
- **Icons**: Lucide React
- **Styling**: CSS with PostCSS and Mantine theme system

### Project Structure
- `src/store/` - Zustand stores for state management
- `src/types/` - TypeScript type definitions
- `src/data/` - Seed data and data utilities
- `src/theme/` - Mantine theme configuration with TireTutor branding
- `src/assets/` - Static assets

### State Management
The application uses Zustand for state management with a main `gizmoStore` that handles:
- CRUD operations for gizmo inventory items
- Search functionality
- Selection management for bulk operations
- Toast notifications via Mantine

### Theme System
Custom Mantine theme with TireTutor brand colors:
- Primary: `tireTutorBlue` (blue palette)
- Accent: `tireTutorOrange` (orange palette)
- Font: Inter system font

### Path Aliases
- `@/*` maps to `src/*` for cleaner imports

### Development Notes
- Uses crypto.randomUUID() for generating unique IDs
- Notifications are handled through Mantine's notification system
- The application appears to be a gizmo/inventory management demo