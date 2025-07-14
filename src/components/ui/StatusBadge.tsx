import { Badge } from '@mantine/core';
import type { Gizmo } from '@/types/gizmo';

interface StatusBadgeProps {
  status: Gizmo['status'];
}

export function StatusBadge({ status }: StatusBadgeProps) {
  const colors = {
    active: 'tireTutorBlue',
    maintenance: 'tireTutorOrange',
    discontinued: 'red',
  };

  const labels = {
    active: 'Active',
    maintenance: 'Maintenance',
    discontinued: 'Discontinued',
  };

  return (
    <Badge color={colors[status]} variant="filled" size="sm">
      {labels[status]}
    </Badge>
  );
}