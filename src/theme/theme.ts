import { createTheme } from '@mantine/core';
import type { MantineColorsTuple } from '@mantine/core';

const tireTutorBlue: MantineColorsTuple = [
  '#eff6ff',
  '#dbeafe', 
  '#bfdbfe',
  '#93c5fd',
  '#60a5fa',
  '#3b82f6',
  '#2563eb', // TireTutor primary
  '#1d4ed8',
  '#1e40af',
  '#1e3a8a'
];

const tireTutorOrange: MantineColorsTuple = [
  '#fff7ed',
  '#ffedd5',
  '#fed7aa',
  '#fdba74',
  '#fb923c',
  '#f97316', // TireTutor accent
  '#ea580c',
  '#dc2626',
  '#c2410c',
  '#9a3412'
];

export const theme = createTheme({
  primaryColor: 'tireTutorBlue',
  colors: {
    tireTutorBlue,
    tireTutorOrange,
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