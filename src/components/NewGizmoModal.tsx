import {
  Modal,
  TextInput,
  Select,
  NumberInput,
  Textarea,
  Button,
  Group,
  Stack,
} from '@mantine/core';
import { useForm } from '@mantine/form';
import type { GizmoFormValues } from '@/types/gizmo';
import { useGizmoStore } from '@/store/gizmoStore';

interface NewGizmoModalProps {
  opened: boolean;
  onClose: () => void;
}

export function NewGizmoModal({ opened, onClose }: NewGizmoModalProps) {
  const addGizmo = useGizmoStore((state) => state.addGizmo);

  const form = useForm<GizmoFormValues>({
    initialValues: {
      name: '',
      category: 'electronics',
      status: 'active',
      price: 0,
      stockQuantity: 0,
      supplier: '',
      sku: '',
      description: '',
    },
    validate: {
      name: (value) => (value.length < 2 ? 'Name must have at least 2 characters' : null),
      price: (value) => (value <= 0 ? 'Price must be greater than 0' : null),
      stockQuantity: (value) => (value < 0 ? 'Stock quantity cannot be negative' : null),
      supplier: (value) => (value.length < 2 ? 'Supplier name is required' : null),
      sku: (value) => (value.length < 3 ? 'SKU must have at least 3 characters' : null),
    },
  });

  const handleSubmit = (values: GizmoFormValues) => {
    addGizmo(values);
    form.reset();
    onClose();
  };

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Add New Gizmo"
      size="md"
    >
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Stack>
          <TextInput
            label="Gizmo Name"
            placeholder="Enter gizmo name"
            {...form.getInputProps('name')}
          />

          <Group grow>
            <Select
              label="Category"
              data={[
                { value: 'electronics', label: 'Electronics' },
                { value: 'mechanical', label: 'Mechanical' },
                { value: 'software', label: 'Software' },
                { value: 'automotive', label: 'Automotive' },
              ]}
              {...form.getInputProps('category')}
            />
            <Select
              label="Status"
              data={[
                { value: 'active', label: 'Active' },
                { value: 'maintenance', label: 'Maintenance' },
                { value: 'discontinued', label: 'Discontinued' },
              ]}
              {...form.getInputProps('status')}
            />
          </Group>

          <Group grow>
            <NumberInput
              label="Price"
              placeholder="0.00"
              prefix="$"
              decimalScale={2}
              {...form.getInputProps('price')}
            />
            <NumberInput
              label="Stock Quantity"
              placeholder="0"
              {...form.getInputProps('stockQuantity')}
            />
          </Group>

          <TextInput
            label="Supplier"
            placeholder="Enter supplier name"
            {...form.getInputProps('supplier')}
          />

          <TextInput
            label="SKU"
            placeholder="Enter SKU"
            {...form.getInputProps('sku')}
          />

          <Textarea
            label="Description"
            placeholder="Enter description (optional)"
            {...form.getInputProps('description')}
            rows={3}
          />

          <Group justify="flex-end" mt="md">
            <Button variant="subtle" onClick={onClose}>
              Cancel
            </Button>
            <Button type="submit" color="tireTutorBlue">
              Add Gizmo
            </Button>
          </Group>
        </Stack>
      </form>
    </Modal>
  );
}