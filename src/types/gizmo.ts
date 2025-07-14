export interface Gizmo {
  id: string;
  name: string;
  category: 'electronics' | 'mechanical' | 'software' | 'automotive';
  status: 'active' | 'maintenance' | 'discontinued';
  price: number;
  stockQuantity: number;
  lastUpdated: Date;
  supplier: string;
  sku: string;
  description?: string;
}

export interface GizmoFormValues {
  name: string;
  category: Gizmo['category'];
  status: Gizmo['status'];
  price: number;
  stockQuantity: number;
  supplier: string;
  sku: string;
  description?: string;
}

export interface GizmoStore {
  gizmos: Gizmo[];
  loading: boolean;
  searchTerm: string;
  selectedIds: Set<string>;
  
  // Actions
  addGizmo: (gizmo: Omit<Gizmo, 'id' | 'lastUpdated'>) => void;
  updateGizmo: (id: string, updates: Partial<Gizmo>) => void;
  deleteGizmo: (id: string) => void;
  deleteSelected: () => void;
  setSearchTerm: (term: string) => void;
  toggleSelection: (id: string) => void;
  clearSelection: () => void;
  selectAll: () => void;
}