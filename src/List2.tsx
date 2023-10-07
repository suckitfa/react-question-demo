import { FC, useState, MouseEvent } from 'react'
const List2: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: 1, title: '问卷1', isPublished: false },
    { id: 2, title: '问卷2', isPublished: true },
    { id: 3, title: '问卷3', isPublished: false },
    { id: 4, title: '问卷4', isPublished: true },
    { id: 5, title: '问卷5', isPublished: false },
  ])

  const hanldeListItemEdit = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    console.log('e = ', e, 'id = ', id)
  }

  const hanldeListItemAdd = () => {
    const length = questionList.length
    setQuestionList(
      questionList.concat({
        id: length + 1,
        title: '问卷' + questionList.length + 1,
        isPublished: (length + 1) % 2 ? true : false,
      })
    )
  }

  const handleItemDelBtnClick = (id: number) => {
    setQuestionList(questionList.filter(item => item.id !== id))
  }
  return (
    <>
      <h1>问卷列表-使用useState重构</h1>
      <ul className="list-container">
        {questionList.map(qes => {
          const { id, isPublished, title } = qes
          return (
            <li className="list-item" key={id}>
              <strong>{title}</strong>
              <span style={{ color: isPublished ? 'green' : 'red' }}>
                {isPublished ? '已发布' : '未发布'}
              </span>
              <span className="btn-container">
                <button onClick={e => hanldeListItemEdit(e, id)}>编辑问卷</button>
                <button className="del-btn" onClick={() => handleItemDelBtnClick(id)}>
                  删除问卷
                </button>
              </span>
            </li>
          )
        })}
      </ul>
      <div>
        <button onClick={hanldeListItemAdd}>Add Item</button>
      </div>
    </>
  )
}

export default List2
