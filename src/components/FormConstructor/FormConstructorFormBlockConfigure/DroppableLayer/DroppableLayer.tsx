import React, { FC, useEffect, useState } from 'react'
import uuid from 'react-uuid'
import {
  useAppSelector,
  formConstructorSlice,
  IFormElement,
  IGroupElement,
  AddNewElementPayload,
  useAppDispatch,
} from '../../store/formElements'
import {addNewElement, setDraggableBaseComponent} from '../../store'
import { getElementsOnLayer, getNewGroupParentLevel } from '../../utils'
import {
  useBaseComponentsDispatch,
  useBaseComponentsSelector,
} from '../../store/baseComponentsItems'
import { IDroppableLayer } from './types'
import styles from './styles.module.css'
import { FormGroupsDict } from '../FormGroupDict'

/// DroppableLayer - компонент в кторый можно что то перенести
export const DroppableLayer: FC<IDroppableLayer> = ({ parentElementId }) => {
  /// Id уровня (для самой формы id любой, для каждого layout элемента - id layout элемента)
  const { allElementsTree, allElementsMap, draggableElement } = useAppSelector(
    state => state.formConstructor,
  )
  const { draggableBaseComponent } = useBaseComponentsSelector(state => state.baseComponents)

  const [elementsOnLayer, setElementsOnLayer] = useState<(IFormElement | IGroupElement)[]>([])
  const dispatch = useAppDispatch()
  const dispathBaseComponents = useBaseComponentsDispatch()

  useEffect(() => {
    /// Подгружаем все эелементы на текущем уровне
    const elementsOnLayer = getElementsOnLayer(parentElementId, allElementsTree, allElementsMap)
    setElementsOnLayer(elementsOnLayer)
  }, [allElementsTree, parentElementId, allElementsMap])

  const handleOnDropBaseComponent = () => {
    if (draggableBaseComponent) {
      const childParentMap = new Map<string, string>(draggableBaseComponent.childParentMap)
      const elementsToAdd = draggableBaseComponent.childrenElementList

      // Ниже создаем новые id, но необходимо сохранить старые взаимосвязи элемент-родитель
      const mappedIds = new Map<string, string>([])

      const actions: AddNewElementPayload[] = []
      elementsToAdd.forEach(elem => {
        const prevId = elem.id
        const prevParentId = childParentMap.get(prevId)
        if (!prevParentId) {
          let newId = mappedIds.get(prevId)
          if (!newId) {
            newId = uuid()
            mappedIds.set(prevId, newId)
          }
          elem = { ...elem, id: newId }
          actions.push({ element: elem, parent: parentElementId })
        } else {
          let newId = mappedIds.get(prevId)
          if (!newId) {
            newId = uuid()
            mappedIds.set(prevId, newId)
          }
          elem = { ...elem, id: newId }
          let newParentId = mappedIds.get(prevParentId)
          if (!newParentId) {
            newParentId = uuid()
            mappedIds.set(prevParentId, newParentId)
          }

          actions.push({ element: elem, parent: newParentId })
        }
      })

      addElements(actions)

      // После перетаскивания, очищаем соответсвующее поле в сторе
      dispathBaseComponents(
        setDraggableBaseComponent( null ),
      )
    }
  }

  const handleOnDrop = (event: React.DragEvent) => {
    event.stopPropagation()
    event.preventDefault()

    const isBaseComponent = event.dataTransfer.getData('BaseComponent')
    if (isBaseComponent === 'true') {
      handleOnDropBaseComponent()
      return
    }

    if (draggableElement) {
      if ('isOuter' in draggableElement && draggableElement.isOuter) {
        const newParentElementId = getNewGroupParentLevel(
          parentElementId,
          allElementsMap,
          allElementsTree,
        )
        newParentElementId &&
          addElements([{ element: draggableElement, parent: newParentElementId }])
      } else {
        addElements([{ element: draggableElement, parent: parentElementId }])
      }
    }

    dispatch(formConstructorSlice.actions.setDraggableElement({ element: null }))
  }

  const addElements = (payload: AddNewElementPayload[]) => {
    dispatch(  addNewElement(payload))
  }

  return (
    <div
      className={styles.droppableContainer}
      onDrop={handleOnDrop}
      onDragOver={event => event.preventDefault()}
    >
      {elementsOnLayer.map(el => {
        let Component = FormGroupsDict[el.type]
        return <Component key={el.id} element={el} />
      })}
    </div>
  )
}
