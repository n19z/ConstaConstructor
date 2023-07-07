import { IFormConstructor } from '../types'

export const addNewPage = (state: IFormConstructor) => {
  state.pages = [
    ...state.pages,
    {
      id: `Page${state.numberOfPages + 1}`,
      name: `Page${state.numberOfPages + 1}`,
    },
  ]
  state.numberOfPages = state.numberOfPages + 1
}
