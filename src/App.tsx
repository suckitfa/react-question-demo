import './App.css'
import List from './List'
import MyButton from './MyButton'
import StateDemo from './StateDemo'
import List2 from './List2'
import ImmerDemo from './ImmerDemo'
import TestUseRef from './TestUseRef'
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
      </div>
    </>
  )
}

export default App
