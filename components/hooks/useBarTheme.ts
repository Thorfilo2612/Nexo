'use client'

import { useEffect, useState } from 'react'

export type BarTheme = 'dark' | 'light'

export function useBarTheme(): BarTheme {
  const [theme, setTheme] = useState<BarTheme>('dark')

  useEffect(() => {
    const sync = () => {
      const probe = window.innerHeight - 50
      const panels = document.querySelectorAll<HTMLElement>('[data-section]')

      for (const panel of panels) {
        const rect = panel.getBoundingClientRect()
        if (rect.top <= probe && rect.bottom >= probe) {
          setTheme(panel.dataset.theme === 'light' ? 'light' : 'dark')
          break
        }
      }
    }

    sync()
    window.addEventListener('scroll', sync, { passive: true })
    return () => window.removeEventListener('scroll', sync)
  }, [])

  return theme
}
