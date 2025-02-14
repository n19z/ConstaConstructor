import { FC, useLayoutEffect, useState } from 'react'
import {
  ElementTypes,
  FormElementTypes,
  IFormElementText,
  TextElementProps,
} from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { ITextFormElement } from './types'
import { Text } from '@consta/uikit/Text'

export const TextFormElement: FC<ITextFormElement> = ({ element }) => {
  const [textProps, setTextProps] = useState<TextElementProps>()

  useLayoutEffect(() => {
    const textFormElement = element as IFormElementText
    setTextProps(textFormElement.props)
  }, [element])

  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.Text}
    >
      <Text {...textProps}>{textProps?.content} </Text>
    </SelectableLayer>
  )
}
