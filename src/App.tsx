import './App.css'
// import List from './List'
// import MyButton from './MyButton'
// import StateDemo from './StateDemo'
// import List2 from './List2'
// import ImmerDemo from './ImmerDemo'
// import TestUseRef from './TestUseRef'
// import UseMemoDemo from './UseMemoDemo'
// import UseCallBackDemo from './UseCallBackDemo'
import useTitle from './hooks/useTitle'
import useMouse from './hooks/useMouse'
import useGetInfo from './hooks/useGetInfo'
function App() {
  // 声明事件

  // 自定义钩子
  useTitle('首页')

  const { x, y } = useMouse()

  const { loading, info } = useGetInfo()
  return (
    <>
      {/* 拆分成组件 */}
      <div className="qes-container">
        {/* <List />
        <MyButton />
        <StateDemo />
        <List2 />
        <ImmerDemo />
        <TestUseRef />
        <UseMemoDemo />
        <UseCallBackDemo /> */}
        <h2>
          X = {x}, Y = {y}
          <div>useGetInfo :{loading ? 'Loading...........' : info}</div>
        </h2>
      </div>
    </>
  )
}

export default App
