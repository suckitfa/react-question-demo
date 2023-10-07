import './App.css'
import List from './List'
import MyButton from './MyButton'
function App() {
  // 声明事件
  return (
    <>
      {/* 拆分成组件 */}
      <div className="qes-container">
        <List />
        <MyButton />
      </div>
    </>
  )
}

export default App
