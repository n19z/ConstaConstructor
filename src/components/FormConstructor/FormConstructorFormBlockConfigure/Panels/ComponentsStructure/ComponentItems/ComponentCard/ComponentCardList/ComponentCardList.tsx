import { Text } from '@consta/uikit/Text'
import { FC } from 'react'
import uuid from 'react-uuid'
import {  FormElementTypes, useAppDispatch } from '../../../../../../store/formElements'
import { IFormElementList } from '../../../../../../store/formElements/ListTypes'
import { IComponetCardElement } from '../types'
import {
  setDraggableElement
} from '../../../../../../store'
export const ComponentCardList: FC<IComponetCardElement> = ({ name }) => {
  const dispatch = useAppDispatch()

  const onStartDragComponentCard = (event: React.DragEvent) => {
    const items = [
      {
        label: 'Первый — этот вариант не выбрать',
        id: 1,
        disabled: false,
      },
      {
        label: 'Второй',
        id: 2,
        disabled: false,
      },
      {
        label: 'Третий — и этот тоже не выбрать',
        id: 3,
        disabled: false,
      },
    ]
    const newList: IFormElementList = {
      id: uuid(),
      type: FormElementTypes.List,
      props: {
        size: 's',
        innerOffset: 'normal',
        className: '',
        baseProps: {},
        items: items,
      },
    }
    dispatch(setDraggableElement({ element: newList }))
  }

  return (
    <div>
      <Text draggable={true} onDragStart={onStartDragComponentCard}>
        {name}
      </Text>
    </div>
  )
}
