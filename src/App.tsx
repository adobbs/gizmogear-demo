import { useState } from 'react'
import { MantineProvider } from '@mantine/core'
import { ModalsProvider } from '@mantine/modals'
import { Notifications } from '@mantine/notifications'
import { theme } from '@/theme/theme'
import { AppShellLayout } from '@/components/AppShell'
import { GizmoTable } from '@/components/GizmoTable'
import { NewGizmoModal } from '@/components/NewGizmoModal'

import '@mantine/core/styles.css'
import '@mantine/notifications/styles.css'

function App() {
  const [modalOpened, setModalOpened] = useState(false)

  return (
    <MantineProvider theme={theme}>
      <ModalsProvider>
        <Notifications />
        <AppShellLayout>
          <GizmoTable onNewGizmo={() => setModalOpened(true)} />
          <NewGizmoModal opened={modalOpened} onClose={() => setModalOpened(false)} />
        </AppShellLayout>
      </ModalsProvider>
    </MantineProvider>
  )
}

export default App