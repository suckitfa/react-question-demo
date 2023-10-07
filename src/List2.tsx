import { FC, useState } from 'react'
import QuestionCard from './components/QuestionCard/QuestionCard'

const List2: FC = () => {
  const [questionList, setQuestionList] = useState([
    { id: '1', title: '问卷1', isPublished: false },
    { id: '2', title: '问卷2', isPublished: true },
    { id: '3', title: '问卷3', isPublished: false },
    { id: '4', title: '问卷4', isPublished: true },
    { id: '5', title: '问卷5', isPublished: false },
  ])

  const hanldeListItemAdd = () => {
    const length = questionList.length
    const r = Math.random().toString().slice(3)
    const newId = length + r
    setQuestionList(
      questionList.concat({
        id: newId,
        title: '问卷:' + newId,
        isPublished: (length + 1) % 2 ? true : false,
      })
    )
  }

  const handleItemDelBtnClick = (id: string) => {
    setQuestionList(questionList.filter(item => item.id !== id))
  }

  const handlePublishBtnClick = (id: string) => {
    const listCopy = questionList.slice()
    listCopy.forEach(item => {
      if (item.id === id) {
        item.isPublished = !item.isPublished
      }
    })
    setQuestionList(listCopy)
  }

  return (
    <>
      <h1>问卷列表-使用useState重构</h1>
      <ul className="list-container">
        {questionList.map(qes => {
          const { id, isPublished, title } = qes
          return (
            <QuestionCard
              key={id}
              id={id}
              title={title}
              isPublished={isPublished}
              deleteQuestion={handleItemDelBtnClick}
              publishQuestion={handlePublishBtnClick}
            />
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
