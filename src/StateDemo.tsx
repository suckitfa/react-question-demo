import { FC, useState } from 'react'

const StateDemo: FC = () => {
  const [userInfo, setUserInfo] = useState({
    name: '双月',
    age: 20,
  })
  const handleAgeChangeBtnClick = () => {
    // 不可变数据-不去修改原来的数据的值，而是通过setUserInfo来传入一个新的值
    setUserInfo({
      ...userInfo,
      age: 21,
    })
  }

  //   数组形式的
  const [list, setList] = useState(['x', 'y'])
  const handleItemAddBtnClick = () => {
    setList(list.concat('z'))
  }
  return (
    <>
      <div>
        <div>State Demo-state不可变数据</div>
        <div>{JSON.stringify(userInfo)}</div>
        <button onClick={handleAgeChangeBtnClick}>change age</button>
        <div>{JSON.stringify(list)}</div>
        <button onClick={handleItemAddBtnClick}>add item</button>
      </div>
    </>
  )
}

export default StateDemo
