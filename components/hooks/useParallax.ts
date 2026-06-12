'use client'

import { useEffect, useRef } from 'react'

export function useParallax<T extends HTMLElement>(speed: number = 0.1) {
  const ref = useRef<T>(null)

  useEffect(() => {
    if (typeof window === 'undefined') return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    let rafId: number

    const tick = () => {
      const el = ref.current
      if (el) {
        const section = el.closest<HTMLElement>('[data-section]') ?? el.parentElement
        if (section) {
          const rect = section.getBoundingClientRect()
          const center = rect.top + rect.height / 2 - window.innerHeight / 2
          el.style.transform = `translateY(${center * speed}px)`
        }
      }
      rafId = requestAnimationFrame(tick)
    }

    rafId = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafId)
  }, [speed])

  return ref
}
