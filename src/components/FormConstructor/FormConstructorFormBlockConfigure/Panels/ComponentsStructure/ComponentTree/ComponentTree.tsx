import { useEffect, useState } from 'react'
import styles from './styles.module.css'
import { ITreeItem } from './Tree'
import { IFormElement, IGroupElement, useAppSelector } from '../../../../store/formElements'
import { Tree } from './Tree'
import { formToTreeData } from './Tree'
import {
  getAllFormElements,
  getSelectedPageId,
  getFormElAsMap,
} from '../../../../store/formElements/formElementsSelectors'

export const ComponentTree = () => {
  //TODO вынестив  сервис
  const allElements = useAppSelector(getAllFormElements)
  const allElementsMap = useAppSelector(getFormElAsMap)
  const selectedPageId = useAppSelector(getSelectedPageId)

  console.log('allElements', allElements)

  return (
    <div className={`${styles.commentTree} borderCard`}>
      <Tree data={getTree(allElementsMap, allElements, selectedPageId)} />
    </div>
  )
}

const getTree = (
  allElementsMap: Map<string, IFormElement | IGroupElement>,
  allElements: (IFormElement | IGroupElement)[],
  parentId: string,
) => {
  const childrenIds = allElements.filter(el => el.parentId === parentId)
  const childrenItems: ITreeItem[] = []

  childrenIds.forEach(childId => {
    const title = allElementsMap.get(childId.id)?.type

    if (title) {
      const treeItem: ITreeItem = {
        key: childId.id,
        children: getTree(allElementsMap, allElements, childId.id),
        visible: true,
        disableCheckbox: true,
        title: title,
      }

      childrenItems.push(treeItem)
    }
  })
  return childrenItems
}
