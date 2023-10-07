import './QuestionCard.css'
import { FC } from 'react'

type PropsType = {
  id: string
  title: string
  isPublished: boolean
  deleteQuestion?: (id: string) => void
  publishQuestion?: (id: string) => void
}

const QuestionCard: FC<PropsType> = props => {
  const { id, isPublished, title, deleteQuestion, publishQuestion } = props
  const handleItemPublish = (id: string) => {
    publishQuestion && publishQuestion(id)
  }
  const handleItemDelBtnClick = (id: string) => {
    deleteQuestion && deleteQuestion(id)
  }

  // useEffect(() => {
  //   console.log('QuestionCard mounted')

  //   return () => {
  //     // 组件销毁的时候执行
  //     console.log('QuestionCard unmounted')
  //   }
  // }, [])
  return (
    <>
      <li className="list-item" key={id}>
        <strong>{title}</strong>
        <span style={{ color: isPublished ? 'green' : 'red' }}>
          {isPublished ? '已发布' : '未发布'}
        </span>
        <span className="btn-container">
          <button className="pub-btn" onClick={() => handleItemPublish(id)}>
            {isPublished ? '下架问卷' : '发布问卷'}
          </button>
          <button className="del-btn" onClick={() => handleItemDelBtnClick(id)}>
            删除问卷
          </button>
        </span>
      </li>
    </>
  )
}

export default QuestionCard
