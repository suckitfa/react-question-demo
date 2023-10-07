import { useRef } from 'react'

const TestUseRef = () => {
  // 引用DOM
  const inputRef = useRef<HTMLInputElement>(null)
  const focusInput = () => {
    inputRef.current?.focus()
  }

  //   普通JS变量不会触发rerender
  const nameRef = useRef('cooper Tang')
  const changeName = () => {
    nameRef.current = 'Cooper Shit............'
    console.log('currentNameRef = ', nameRef.current)
  }
  return (
    <>
      <div>
        <h1>使用useRef</h1>
        <div>
          <input type="text" ref={inputRef} />
          <button onClick={focusInput}>focus</button>
        </div>
        <div>
          <div>
            <strong>{nameRef.current}</strong>
          </div>
          <button onClick={changeName}>change name</button>
        </div>
      </div>
    </>
  )
}

export default TestUseRef
