import { ISelectedElement, BadgeProps } from '../../../../coreTypes'
import { BadgePropSize, BadgePropView, BadgePropStatus, BadgePropForm } from '@consta/uikit/Badge'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: BadgePropSize | BadgePropView | BadgePropStatus | BadgePropForm,
    field: keyof BadgeProps,
  ) => {
    if (selectedElement) {
      const newProps: BadgeProps = {
        ...(selectedElementProps as BadgeProps),
      }

      // @ts-ignore
      newProps[field] = value

      onDispatch(selectedElement, newProps)
    }
  }

  const onChangeMinified = (event: {
    e: React.ChangeEvent<HTMLInputElement>
    checked: boolean
  }) => {
    if (selectedElement) {
      const newProps: BadgeProps = {
        ...(selectedElementProps as BadgeProps),
      }
      newProps.minified = event.checked

      onDispatch(selectedElement, newProps)
    }
  }

  const handleOnChangeLabel = ({ value }: { value: string | null }) => {
    if (selectedElement) {
      const newProps: BadgeProps = {
        ...(selectedElementProps as BadgeProps),
      }
      newProps.label = value || undefined

      onDispatch(selectedElement, newProps)
    }
  }

  const onDispatch = (selectedElement: ISelectedElement, newProps: BadgeProps) => {
    dispatch(
      setSelectedElement({
        elementType: selectedElement.elementType,
        elementId: selectedElement.elementId,
        newProps: newProps,
      }),
    )
  }

  return {
    onChangeMinified,
    handleOnChangeLabel,
    onChangeField,
    itemsProps: {
      size: (selectedElementProps as BadgeProps).size,
      view: (selectedElementProps as BadgeProps).view,
      form: (selectedElementProps as BadgeProps).form,
      label: (selectedElementProps as BadgeProps).label,
      minified: (selectedElementProps as BadgeProps).minified,
      status: (selectedElementProps as BadgeProps).status,
    },
  }
}
