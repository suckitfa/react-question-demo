import { useState } from 'react'
const MyButton = () => {
  const [count, setCount] = useState(0)
  const add = () => {
    // setCount(count + 1)
    // setCount(count + 1)
    // setCount(count + 1)

    setCount(count => count + 1) // 使用函数来更新，则不会被合并
    setCount(count => count + 1)
    setCount(count => count + 1)
  }
  return (
    <div>
      <button onClick={add}>{count}</button>
    </div>
  )
}
export default MyButton
