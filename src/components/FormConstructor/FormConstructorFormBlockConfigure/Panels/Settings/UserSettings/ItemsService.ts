import { UserPropView, UserPropWidth, UserPropSize, UserPropStatus } from '@consta/uikit/User'
import { UserProps, ISelectedElement } from '../../../../coreTypes'
import { setSelectedElement, useAppDispatch, useAppSelector } from '../../../../store'

export const useItemsHandlers = () => {
  const { selectedElementProps, selectedElement } = useAppSelector(state => state.formConstructor)
  const dispatch = useAppDispatch()

  const onChangeField = (
    value: UserPropView | UserPropWidth | UserPropSize | UserPropStatus | string,
    field: keyof UserProps,
  ) => {
    if (selectedElement) {
      const newProps: UserProps = {
        ...(selectedElementProps as UserProps),
      }
      // @ts-ignore
      newProps[field] = value

      onDispatch(selectedElement, newProps)
    }
  }
  const onChangeSwitch =
    (propsName: keyof UserProps) =>
    ({ checked }: { checked: boolean }) => {
      if (selectedElement) {
        const newProps: UserProps = {
          ...(selectedElementProps as UserProps),
        }
        // @ts-ignore
        newProps[propsName] = checked
        onDispatch(selectedElement, newProps)
      }
    }

  const onDispatch = (selectedElement: ISelectedElement, newProps: UserProps) => {
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
    onChangeSwitch,
    itemsProps: {
      avatarUrl: (selectedElementProps as UserProps).avatarUrl,
      checked: (selectedElementProps as UserProps).checked,
      info: (selectedElementProps as UserProps).info,
      name: (selectedElementProps as UserProps).name,
      onlyAvatar: (selectedElementProps as UserProps).onlyAvatar,
      size: (selectedElementProps as UserProps).size,
      status: (selectedElementProps as UserProps).status,
      view: (selectedElementProps as UserProps).view,
      width: (selectedElementProps as UserProps).width,
      withArrow: (selectedElementProps as UserProps).withArrow,
    },
  }
}
