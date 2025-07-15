import type { Gizmo } from '@/types/gizmo';

const gizmoNames = [
  'UltraSonic Sensor Pro', 'Digital Display Matrix', 'Servo Motor X3000',
  'Thermal Imaging Module', 'Pressure Gauge Elite', 'Smart Controller Hub',
  'LED Strip Array', 'Gyroscope Stabilizer', 'Battery Management Unit',
  'Wireless Communication Pod', 'Temperature Sensor Grid', 'Motor Driver Board',
  'Diagnostic Scanner Plus', 'Tire Pressure Monitor', 'POS Terminal Pro',
  'Inventory Scanner HD', 'Payment Gateway Module', 'Security Camera Set',
  'Network Switch Gigabit', 'Power Supply Ultra', 'Cooling Fan Assembly',
  'Touch Screen Interface', 'Barcode Reader Max', 'RFID Tag System',
  'Voice Recognition Unit', 'Motion Detector Pro', 'GPS Tracking Device',
  'Bluetooth Beacon Kit', 'Solar Panel Array', 'Wind Speed Indicator'
];

const suppliers = [
  'TechnoGadgets Inc', 'AutoParts Direct', 'ElectroSupply Co', 
  'MegaComponents Ltd', 'Industrial Solutions', 'GizmoCorp',
  'Future Tech Systems', 'Precision Parts Co'
];

const categories: Gizmo['category'][] = ['electronics', 'mechanical', 'software', 'automotive'];
const statuses: Gizmo['status'][] = ['active', 'not recommended', 'discontinued'];

export function generateSeedData(count: number = 50): Gizmo[] {
  return Array.from({ length: count }, (_, index) => {
    const category = categories[Math.floor(Math.random() * categories.length)];
    const status = statuses[Math.floor(Math.random() * statuses.length)];
    const name = gizmoNames[index % gizmoNames.length];
    
    return {
      id: crypto.randomUUID(),
      name: `${name} ${index + 1}`,
      category,
      status,
      price: Math.floor(Math.random() * 1000) + 50,
      stockQuantity: Math.floor(Math.random() * 100),
      lastUpdated: new Date(Date.now() - Math.random() * 90 * 24 * 60 * 60 * 1000),
      supplier: suppliers[Math.floor(Math.random() * suppliers.length)],
      sku: `SKU-${category.toUpperCase()}-${String(index + 1).padStart(3, '0')}`,
      description: `Professional grade ${category} component for industrial applications`,
    };
  });
}