import { AppShell, Group, Title, Text, ThemeIcon } from '@mantine/core';
import { Cpu } from 'lucide-react';
import type { ReactNode } from 'react';

interface AppShellLayoutProps {
  children: ReactNode;
}

export function AppShellLayout({ children }: AppShellLayoutProps) {
  return (
    <AppShell
      header={{ height: 60 }}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify="space-between">
          <Group>
            <ThemeIcon color="tireTutorBlue" size="lg" variant="light">
              <Cpu size={20} />
            </ThemeIcon>
            <div>
              <Title order={3} c="tireTutorBlue">
                GizmoGear
              </Title>
              <Text size="xs" c="dimmed">
                Inventory Management Demo
              </Text>
            </div>
          </Group>
          <Group>
            <Text size="sm" c="dimmed">
              Built with Mantine + Zustand
            </Text>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}