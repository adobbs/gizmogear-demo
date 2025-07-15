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
- `src/theme/` - Mantine theme configuration with GizmoGear branding
- `src/assets/` - Static assets

### State Management
The application uses Zustand for state management with a main `gizmoStore` that handles:
- CRUD operations for gizmo inventory items
- Search functionality
- Selection management for bulk operations
- Toast notifications via Mantine

### Theme System
Custom Mantine theme with GizmoGear brand colors:
- Primary: `gizmoGearBlue` (blue palette)
- Accent: `gizmoGearOrange` (orange palette)
- Neutral: `gizmoGearGray` (gray palette)
- Font: Inter system font

### Path Aliases
- `@/*` maps to `src/*` for cleaner imports

### Development Notes
- Uses crypto.randomUUID() for generating unique IDs
- Notifications are handled through Mantine's notification system
- Seed data generates 50 initial gizmo items on app load
- The store contains outdated color reference (`tireTutorOrange` in notifications) that should be updated to `gizmoGearOrange`

### Component Architecture
- **AppShell**: Main layout with branded header featuring two-tone "Gizmo"/"Gear" logo
- **GizmoTable**: Data table with sorting, pagination, search, and bulk operations
- **NewGizmoModal**: Form modal for adding inventory items
- **StatusBadge**: Color-coded status indicators (Active/Not Recommended/Discontinued)

### Status System
Gizmo status values and their visual representations:
- `active`: Blue badge (`gizmoGearBlue`)
- `not recommended`: Dark gray badge (`gizmoGearGray`) 
- `discontinued`: Orange badge (`gizmoGearOrange`)