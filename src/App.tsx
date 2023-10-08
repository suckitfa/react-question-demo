import './App.css'
import List from './List'
import MyButton from './MyButton'
import StateDemo from './StateDemo'
import List2 from './List2'
import ImmerDemo from './ImmerDemo'
import TestUseRef from './TestUseRef'
import UseMemoDemo from './UseMemoDemo'
function App() {
  // 声明事件
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
      </div>
    </>
  )
}

export default App
