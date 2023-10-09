import './App.css'
import List from './List'
import MyButton from './MyButton'
import StateDemo from './StateDemo'
import List2 from './List2'
import ImmerDemo from './ImmerDemo'
import TestUseRef from './TestUseRef'
import UseMemoDemo from './UseMemoDemo'
import UseCallBackDemo from './UseCallBackDemo'
import useTitle from './hooks/useTitle'
function App() {
  // 声明事件

  // 自定义钩子
  useTitle('首页')
  return (
    <>
      {/* 拆分成组件 */}
      <div className="qes-container">
        <List />
        <MyButton />
        <StateDemo />
        <List2 />
        <ImmerDemo />
        <TestUseRef />
        <UseMemoDemo />
        <UseCallBackDemo />
      </div>
    </>
  )
}

export default App
