import { FC } from 'react'
import type { MouseEvent } from 'react'
const List: FC = () => {
  const questionList = [
    { id: 1, title: '问卷1', isPublished: false },
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

  const hanldeListItemEdit = (e: MouseEvent<HTMLButtonElement>, id: number) => {
    console.log('e = ', e, 'currentId = ', id)
  }
  return (
    <>
      <h1>问卷列表</h1>
      <ul className="list-container">
        {questionList.map(qes => {
          const { id, isPublished, title } = qes
          return (
            <li className="list-item" key={id}>
              <strong>{title}</strong>
              <span style={{ color: isPublished ? 'green' : 'red' }}>
                {isPublished ? '已发布' : '未发布'}
              </span>
              <button onClick={e => hanldeListItemEdit(e, id)}>编辑问卷</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default List
