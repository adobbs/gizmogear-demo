import { useMemo, useState } from 'react';
import {
  Paper,
  Group,
  Button,
  TextInput,
  ActionIcon,
  Text,
  Stack,
  Table,
  Checkbox,
  Badge,
  Pagination,
  Select,
  ScrollArea,
  UnstyledButton,
} from '@mantine/core';
import {
  Search,
  Plus,
  Trash2,
  RefreshCw,
  ChevronUp,
  ChevronDown,
} from 'lucide-react';
import { useGizmoStore } from '@/store/gizmoStore';
import type { Gizmo } from '@/types/gizmo';
import { StatusBadge } from '@/components/ui/StatusBadge';

interface GizmoTableProps {
  onNewGizmo: () => void;
}

type SortField = keyof Gizmo | null;
type SortDirection = 'asc' | 'desc';

export function GizmoTable({ onNewGizmo }: GizmoTableProps) {
  const {
    gizmos,
    searchTerm,
    setSearchTerm,
    deleteGizmo,
  } = useGizmoStore();

  const [selectedIds, setSelectedIds] = useState<Set<string>>(new Set());
  const [sortField, setSortField] = useState<SortField>('name');
  const [sortDirection, setSortDirection] = useState<SortDirection>('asc');
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(25);

  const filteredData = useMemo(() => {
    if (!searchTerm) return gizmos;
    
    return gizmos.filter((gizmo) =>
      gizmo.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gizmo.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gizmo.supplier.toLowerCase().includes(searchTerm.toLowerCase()) ||
      gizmo.sku.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [gizmos, searchTerm]);

  const sortedData = useMemo(() => {
    if (!sortField) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aVal = a[sortField];
      const bVal = b[sortField];
      
      let comparison = 0;
      if (aVal !== undefined && bVal !== undefined) {
        if (aVal < bVal) comparison = -1;
        if (aVal > bVal) comparison = 1;
      }
      
      return sortDirection === 'desc' ? -comparison : comparison;
    });
  }, [filteredData, sortField, sortDirection]);

  const paginatedData = useMemo(() => {
    const start = (page - 1) * pageSize;
    return sortedData.slice(start, start + pageSize);
  }, [sortedData, page, pageSize]);

  const handleSort = (field: keyof Gizmo) => {
    if (sortField === field) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortDirection('asc');
    }
  };

  const handleSelectAll = () => {
    if (selectedIds.size === paginatedData.length) {
      setSelectedIds(new Set());
    } else {
      setSelectedIds(new Set(paginatedData.map(g => g.id)));
    }
  };

  const handleSelectOne = (id: string) => {
    const newSelected = new Set(selectedIds);
    if (newSelected.has(id)) {
      newSelected.delete(id);
    } else {
      newSelected.add(id);
    }
    setSelectedIds(newSelected);
  };

  const handleBulkDelete = () => {
    selectedIds.forEach(id => deleteGizmo(id));
    setSelectedIds(new Set());
  };

  const SortableHeader = ({ children, field }: { children: React.ReactNode; field: keyof Gizmo }) => (
    <UnstyledButton onClick={() => handleSort(field)} style={{ width: '100%' }}>
      <Group justify="space-between" wrap="nowrap">
        <Text fw={500}>{children}</Text>
        {sortField === field && (
          sortDirection === 'asc' ? <ChevronUp size={14} /> : <ChevronDown size={14} />
        )}
      </Group>
    </UnstyledButton>
  );

  const totalPages = Math.ceil(sortedData.length / pageSize);

  return (
    <Stack>
      <Group justify="space-between">
        <Group>
          <TextInput
            placeholder="Search gizmos..."
            leftSection={<Search size={16} />}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.currentTarget.value)}
            w={300}
          />
          <Button
            leftSection={<Plus size={16} />}
            onClick={onNewGizmo}
            color="gizmoGearBlue"
          >
            New Gizmo
          </Button>
          {selectedIds.size > 0 && (
            <Button
              leftSection={<Trash2 size={16} />}
              color="red"
              variant="light"
              onClick={handleBulkDelete}
            >
              Delete Selected ({selectedIds.size})
            </Button>
          )}
        </Group>
        <Group>
          <Text size="sm" c="dimmed">
            {sortedData.length} gizmos
          </Text>
          <ActionIcon
            variant="light"
            color="gizmoGearBlue"
            onClick={() => window.location.reload()}
          >
            <RefreshCw size={16} />
          </ActionIcon>
        </Group>
      </Group>

      <Paper shadow="sm" withBorder>
        <ScrollArea>
          <Table striped highlightOnHover>
            <Table.Thead>
              <Table.Tr>
                <Table.Th>
                  <Checkbox
                    checked={selectedIds.size === paginatedData.length && paginatedData.length > 0}
                    indeterminate={selectedIds.size > 0 && selectedIds.size < paginatedData.length}
                    onChange={handleSelectAll}
                  />
                </Table.Th>
                <Table.Th><SortableHeader field="name">Name</SortableHeader></Table.Th>
                <Table.Th><SortableHeader field="sku">SKU</SortableHeader></Table.Th>
                <Table.Th><SortableHeader field="category">Category</SortableHeader></Table.Th>
                <Table.Th><SortableHeader field="status">Status</SortableHeader></Table.Th>
                <Table.Th><SortableHeader field="price">Price</SortableHeader></Table.Th>
                <Table.Th><SortableHeader field="stockQuantity">Stock</SortableHeader></Table.Th>
                <Table.Th><SortableHeader field="supplier">Supplier</SortableHeader></Table.Th>
                <Table.Th><SortableHeader field="lastUpdated">Updated</SortableHeader></Table.Th>
              </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
              {paginatedData.map((gizmo) => (
                <Table.Tr key={gizmo.id}>
                  <Table.Td>
                    <Checkbox
                      checked={selectedIds.has(gizmo.id)}
                      onChange={() => handleSelectOne(gizmo.id)}
                    />
                  </Table.Td>
                  <Table.Td>
                    <Text fw={500}>{gizmo.name}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm" c="dimmed">{gizmo.sku}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Badge variant="light" tt="capitalize">
                      {gizmo.category}
                    </Badge>
                  </Table.Td>
                  <Table.Td>
                    <StatusBadge status={gizmo.status} />
                  </Table.Td>
                  <Table.Td>
                    <Text>${gizmo.price.toFixed(2)}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text
                      c={gizmo.stockQuantity < 10 ? 'red' : gizmo.stockQuantity < 25 ? 'gizmoGearOrange' : 'gizmoGearBlue'}
                      fw={gizmo.stockQuantity < 10 ? 'bold' : 'normal'}
                    >
                      {gizmo.stockQuantity}
                    </Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm">{gizmo.supplier}</Text>
                  </Table.Td>
                  <Table.Td>
                    <Text size="sm" c="dimmed">
                      {gizmo.lastUpdated.toLocaleDateString()}
                    </Text>
                  </Table.Td>
                </Table.Tr>
              ))}
            </Table.Tbody>
          </Table>
        </ScrollArea>

        {totalPages > 1 && (
          <Group justify="space-between" p="md">
            <Group>
              <Text size="sm" c="dimmed">
                Rows per page:
              </Text>
              <Select
                value={pageSize.toString()}
                onChange={(value) => {
                  setPageSize(Number(value));
                  setPage(1);
                }}
                data={['10', '25', '50', '100']}
                w={80}
              />
            </Group>
            <Pagination
              value={page}
              onChange={setPage}
              total={totalPages}
              size="sm"
            />
            <Text size="sm" c="dimmed">
              {(page - 1) * pageSize + 1}-{Math.min(page * pageSize, sortedData.length)} of {sortedData.length}
            </Text>
          </Group>
        )}
      </Paper>
    </Stack>
  );
}