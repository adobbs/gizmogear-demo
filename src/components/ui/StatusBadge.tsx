import { Badge } from '@mantine/core';
import type { Gizmo } from '@/types/gizmo';

interface StatusBadgeProps {
  status: Gizmo['status'];
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const colors = {
    active: 'gizmoGearBlue',
    'not recommended': 'gizmoGearGray',
    discontinued: 'gizmoGearOrange',
  };

  const labels = {
    active: 'Active',
    'not recommended': 'Not Recommended',
    discontinued: 'Discontinued',
  };

  // Fallback for unknown status values
  const color = colors[status] || 'gray';
  const label = labels[status] || status;

  return (
    <Badge color={color} variant="filled" size="sm">
      {label}
    </Badge>
  );
}