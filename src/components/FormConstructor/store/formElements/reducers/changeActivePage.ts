import { PayloadAction } from '@reduxjs/toolkit'
import { ChangeActivePage } from '../payload'
import { IFormConstructor } from '../../../coreTypes'

export const changeActivePage = (
  state: IFormConstructor,
  action: PayloadAction<ChangeActivePage>,
) => {
  const selectedPageId: string = action.payload.id
  state.selectedPageId = selectedPageId
  state.pages = state.pages.map((page, i) => {
    return {
      id: page.id,
      name: page.name,
      isActive: page.id === selectedPageId,
    }
  })
}
