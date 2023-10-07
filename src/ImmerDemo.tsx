import { useState } from 'react'
import { produce } from 'immer'
const ImmerDemo = () => {
  const [userInfo, setUserInfo] = useState({
    name: 'Cooper Tang',
    age: 20,
  })

  const handleBtnClick = () => {
    setUserInfo(
      produce(draft => {
        draft.name = 'shit '
      })
    )
  }
  const addAge = () => {
    setUserInfo(
      produce(draft => {
        draft.age++
      })
    )
  }
  return (
    <>
      <h1>Immer Demo-这个框架能够支持直接修改state</h1>
      <div>{JSON.stringify(userInfo)}</div>
      <button onClick={handleBtnClick}>change</button>
      <button onClick={addAge}>add age</button>
    </>
  )
}

export default ImmerDemo
