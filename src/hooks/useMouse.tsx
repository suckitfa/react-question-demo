import { useEffect, useState } from 'react'

function useMouse() {
  const [x, setX] = useState(0)
  const [y, setY] = useState(0)
  const mouseHanlder = (e: MouseEvent) => {
    setX(e.clientX)
    setY(e.clientY)
  }

  useEffect(() => {
    window.addEventListener('mousemove', mouseHanlder)
    return () => window.removeEventListener('mousemove', mouseHanlder)
  }, [])

  return {
    x,
    y,
  }
}

export default useMouse
