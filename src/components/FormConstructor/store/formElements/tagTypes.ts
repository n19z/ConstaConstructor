import { TagBasePropSize } from '@consta/uikit/__internal__/src/components/TagBase/TagBase'
import { BaseProps, IFormElement } from './types'
import { TagBasePropGroup } from '../../FormConstructorFormBlockConfigure/Panels/Settings/TagSettings/types'

export type TagProps = {
  label: string
  size?: TagBasePropSize
  mode: 'info' | 'button' | 'check' | 'cancel' | 'link'
  checked: boolean
  group?: TagBasePropGroup
  Icon?: boolean
  onCancel?: () => void
  onChange?: () => void
} & BaseProps

export interface IFormElementTagProps extends IFormElement {
  props: TagProps
}
