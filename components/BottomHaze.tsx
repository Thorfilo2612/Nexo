export default function BottomHaze() {
  return (
    <div
      aria-hidden="true"
      className="fixed left-0 right-0 bottom-0 pointer-events-none z-[150]"
      style={{
        height: 90,
        backdropFilter: 'blur(6px)',
        WebkitBackdropFilter: 'blur(6px)',
        maskImage: 'linear-gradient(to top, black 30%, transparent)',
        WebkitMaskImage: 'linear-gradient(to top, black 30%, transparent)',
      }}
    />
  )
}
