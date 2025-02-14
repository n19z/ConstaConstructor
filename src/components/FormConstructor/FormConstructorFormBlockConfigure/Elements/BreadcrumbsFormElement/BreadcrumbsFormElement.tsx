import { FC } from 'react'
import { ElementTypes, FormElementTypes } from '../../../coreTypes'
import { SelectableLayer } from '../../SelectableLayer'
import { IBreadcrumbsFormElement } from './types'

import { Breadcrumbs } from '@consta/uikit/Breadcrumbs'

export const BreadcrumbsFormElement: FC<IBreadcrumbsFormElement> = ({ element }) => {
  const props = element.props
  return (
    <SelectableLayer
      parentElementId={element.id}
      elementTypeUsage={ElementTypes.FormElement}
      elementType={FormElementTypes.BreadcrumbsForm}
    >
      <Breadcrumbs {...props} />
    </SelectableLayer>
  )
}
