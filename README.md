# GizmoGear Demo

A modern inventory management demo application showcasing React, TypeScript, and Mantine UI components.

## Overview

GizmoGear is a demonstration inventory management system for tracking electronic components, mechanical parts, software tools, and automotive equipment. The application features a clean, responsive interface with comprehensive CRUD operations, search functionality, and bulk management capabilities.

## Features

- **Inventory Management**: Add, edit, delete, and view gizmo inventory items
- **Advanced Search**: Real-time search across name, category, supplier, and SKU
- **Bulk Operations**: Select multiple items for batch deletion
- **Status Tracking**: Monitor item status (Active, Not Recommended, Discontinued)
- **Responsive Design**: Optimized for desktop and mobile devices
- **Data Persistence**: Client-side state management with Zustand

## Tech Stack

- **React 19** with TypeScript for type-safe development
- **Vite** for fast development and optimized builds
- **Mantine v8** for comprehensive UI components
- **Zustand** for lightweight state management
- **Lucide React** for consistent iconography
- **PostCSS** with Mantine preset for styling

## Getting Started

### Prerequisites

- Node.js 18+ and npm

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development

Start the development server:
```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) to view the application.

### Build

Create a production build:
```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

### Code Quality

Run ESLint to check code quality:
```bash
npm run lint
```

## Demo Data

The application starts with 50 sample gizmo items generated automatically. All data is stored in browser memory and will reset on page refresh.

## License

This project is a demonstration application and is not intended for production use.