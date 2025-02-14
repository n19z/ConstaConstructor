import React, { FC, useLayoutEffect, useState } from 'react'
import { SelectableLayer } from '../../SelectableLayer'
import { ISelectFormElement } from './types'
import { ElementTypes, FormElementTypes } from '../../../coreTypes'
import { Select } from '@consta/uikit/Select'
import style from './style.module.css'
import { IFormElementSelect, SelectProps } from '../../../coreTypes'

export const SelectFormElement: FC<ISelectFormElement> = ({ element }) => {
  const [selectProps, setSelectProps] = useState<SelectProps>({
    className: '',
    baseProps: {},
    items: [
      {
        label: 'Первый',
        id: 1,
      },
      {
        label: 'Второй',
        id: 2,
      },
      {
        label: 'Третий',
        id: 3,
      },
    ],
    onChange: () => {},
    content: 'Text',
  })

  useLayoutEffect(() => {
    const selectFormElementWithProps = element as IFormElementSelect
    setSelectProps(selectFormElementWithProps.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      className={style.Select}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Select}
    >
      <Select {...selectProps} />
    </SelectableLayer>
  )
}
