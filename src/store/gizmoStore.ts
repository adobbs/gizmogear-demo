import { create } from 'zustand';
import type { GizmoStore, Gizmo } from '@/types/gizmo';
import { generateSeedData } from '@/data/seedData';
import { notifications } from '@mantine/notifications';

export const useGizmoStore = create<GizmoStore>((set, get) => ({
  gizmos: generateSeedData(50), // Start with 50 items
  loading: false,
  searchTerm: '',
  selectedIds: new Set(),

  addGizmo: (gizmoData) => {
    const newGizmo: Gizmo = {
      ...gizmoData,
      id: crypto.randomUUID(),
      lastUpdated: new Date(),
    };

    set((state) => ({
      gizmos: [newGizmo, ...state.gizmos],
    }));

    notifications.show({
      title: 'Success!',
      message: `${newGizmo.name} has been added to inventory`,
      color: 'tireTutorOrange',
    });
  },

  updateGizmo: (id, updates) => {
    set((state) => ({
      gizmos: state.gizmos.map((gizmo) =>
        gizmo.id === id
          ? { ...gizmo, ...updates, lastUpdated: new Date() }
          : gizmo
      ),
    }));
  },

  deleteGizmo: (id) => {
    const gizmo = get().gizmos.find(g => g.id === id);
    
    set((state) => ({
      gizmos: state.gizmos.filter((g) => g.id !== id),
      selectedIds: new Set([...state.selectedIds].filter(selectedId => selectedId !== id)),
    }));

    notifications.show({
      title: 'Deleted',
      message: `${gizmo?.name || 'Item'} has been removed from inventory`,
      color: 'red',
    });
  },

  deleteSelected: () => {
    const { selectedIds } = get();
    const count = selectedIds.size;
    
    set((state) => ({
      gizmos: state.gizmos.filter((g) => !selectedIds.has(g.id)),
      selectedIds: new Set(),
    }));

    notifications.show({
      title: 'Bulk Delete',
      message: `${count} items have been removed from inventory`,
      color: 'red',
    });
  },

  setSearchTerm: (term) => set({ searchTerm: term }),

  toggleSelection: (id) => {
    set((state) => {
      const newSelectedIds = new Set(state.selectedIds);
      if (newSelectedIds.has(id)) {
        newSelectedIds.delete(id);
      } else {
        newSelectedIds.add(id);
      }
      return { selectedIds: newSelectedIds };
    });
  },

  clearSelection: () => set({ selectedIds: new Set() }),

  selectAll: () => {
    const { gizmos } = get();
    set({ selectedIds: new Set(gizmos.map(g => g.id)) });
  },
}));