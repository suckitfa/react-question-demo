import { useMemo, useState } from 'react'

const Demo = () => {
  const [num1, setNum1] = useState(10)
  const [num2, setNum2] = useState(20)
  const [text, setText] = useState('hello')
  const sum = useMemo(() => {
    console.log('useMemo执行了........')
    return num1 + num2
  }, [num1, num2])

  return (
    <>
      <p>
        text = {text} <button onClick={() => setText('change....text...')}>change text</button>
      </p>
      <p>sum = {sum}</p>
      <p>
        num1 = {num1} <button onClick={() => setNum1(num1 + 1)}>add num1</button>
      </p>
      <p>
        num2 = {num2} <button onClick={() => setNum2(num2 + 1)}>add num2</button>
      </p>
    </>
  )
}

export default Demo
