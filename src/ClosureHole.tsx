import { useState, useRef, useEffect } from 'react'

const Demo = () => {
  const [count, setCount] = useState(0)

  const countRef = useRef(0)
  useEffect(() => {
    countRef.current = count
  }, [count])

  const doAlert = () => {
    setTimeout(() => {
      //   alert(count)
      alert(countRef.current)
    }, 1000)
  }
  return (
    <>
      <div>
        <h2>count = {count}</h2>
        <button onClick={() => setCount(count + 1)}>add 1</button>
        <button onClick={doAlert}>alert</button>
      </div>
    </>
  )
}

export default Demo
