import { ISelectedElement, InformerElementProps } from '../../../../coreTypes'
import { InformerPropSize, InformerPropView, InformerPropStatus } from '@consta/uikit/Informer'
import { useAppSelector, setSelectedElement, useAppDispatch } from '../../../../store'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: InformerPropSize | InformerPropView | InformerPropStatus | string,
    field: keyof InformerElementProps,
  ) => {
    if (selectedElement) {
      const newProps: InformerElementProps = {
        ...(selectedElementProps as InformerElementProps),
      }
      // @ts-ignore
      newProps[field] = value
      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: InformerElementProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return {
    onChangeField,
    itemsProps: {
      size: (selectedElementProps as InformerElementProps).size,
      view: (selectedElementProps as InformerElementProps).view,
      icon: (selectedElementProps as InformerElementProps).icon,
      label: (selectedElementProps as InformerElementProps).label,
      title: (selectedElementProps as InformerElementProps).title,
      status: (selectedElementProps as InformerElementProps).status,
    },
  }
}
