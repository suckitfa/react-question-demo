import './App.css'
function App() {
  const questionList = [
    {
      id: 1,
      title: '问卷1',
      isPublished: false,
    },
    {
      id: 2,
      title: '问卷2',
      isPublished: true,
    },
    {
      id: 3,
      title: '问卷3',
      isPublished: false,
    },
    {
      id: 4,
      title: '问卷4',
      isPublished: true,
    },
    {
      id: 5,
      title: '问卷5',
      isPublished: false,
    },
  ]

  // 声明事件
  return (
    <>
      <div className="qes-container">
        <h1>问卷列表</h1>
        <ul className="list-container">
          {questionList.map(qes => {
            return (
              <li className="list-item" key={qes.id}>
                <strong>{qes.title}</strong>
                <span style={{ color: qes.isPublished ? 'green' : 'red' }}>
                  {qes.isPublished ? '已发布' : '未发布'}
                </span>
                <button>编辑问卷</button>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}

export default App
