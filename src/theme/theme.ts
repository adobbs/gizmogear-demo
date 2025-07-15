import { createTheme } from '@mantine/core';
import type { MantineColorsTuple } from '@mantine/core';

const gizmoGearBlue: MantineColorsTuple = [
  '#f0f4ff',
  '#d6e2ff', 
  '#adc4ff',
  '#7ea0ff',
  '#4e7bff',
  '#1f56ff',
  '#0e2987', // GizmoGear primary navy
  '#0c2470',
  '#0a1f59',
  '#081a42'
];

const gizmoGearOrange: MantineColorsTuple = [
  '#fff5f0',
  '#ffe8d6',
  '#ffd4ac',
  '#ffba7a',
  '#ff9545',
  '#ff6f0e',
  '#fa4f01', // GizmoGear primary orange
  '#e04401',
  '#c63901',
  '#a82f01'
];

const gizmoGearGray: MantineColorsTuple = [
  '#f8f9fa',
  '#e9ecef',
  '#dee2e6',
  '#ced4da',
  '#adb5bd',
  '#6c757d',
  '#495057', // GizmoGear dark gray
  '#343a40',
  '#212529',
  '#1a1e22'
];

export const theme = createTheme({
  primaryColor: 'gizmoGearBlue',
  colors: {
    gizmoGearBlue,
    gizmoGearOrange,
    gizmoGearGray,
  },
  fontFamily: 'Inter, system-ui, sans-serif',
  headings: {
    fontFamily: 'Inter, system-ui, sans-serif',
    fontWeight: '600',
  },
  other: {
    containerSize: '1200px',
    headerHeight: '60px',
  },
});