import './QuestionCard.css'
import { FC, MouseEvent } from 'react'

type PropsType = {
  id: string
  title: string
  isPublished: boolean
  deleteQuestion: (id: string) => void
}

const QuestionCard: FC<PropsType> = props => {
  const { id, isPublished, title, deleteQuestion } = props
  const hanldeListItemEdit = (e: MouseEvent<HTMLButtonElement>) => {
    console.log('hanldeListItemEdit = ', e)
  }
  const handleItemDelBtnClick = (id: string) => {
    console.log('handleItemDelBtnClick = ')
    deleteQuestion(id)
  }
  return (
    <>
      <li className="list-item" key={id}>
        <strong>{title}</strong>
        <span style={{ color: isPublished ? 'green' : 'red' }}>
          {isPublished ? '已发布' : '未发布'}
        </span>
        <span className="btn-container">
          <button onClick={e => hanldeListItemEdit(e)}>编辑问卷</button>
          <button className="del-btn" onClick={() => handleItemDelBtnClick(id)}>
            删除问卷
          </button>
        </span>
      </li>
    </>
  )
}

export default QuestionCard
