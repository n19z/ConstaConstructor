import {
  IFormElement,
  IGroupElement,
  IPageOfLayout,
  ISelectedElement,
  UnionProps,
} from '../coreTypes'
import { Values } from '../utils'

/// По мере расширения сопсобов сохранения, будет дополнять объект

export const ProjectSaveWays = {
  STORAGE: 'STORAGE',
  FILE: 'FILE',
} as const

// eslint-disable-next-line @typescript-eslint/no-redeclare
export type ProjectSaveWays = Values<typeof ProjectSaveWays>

export interface ProjectData {
  project: IFormConstructor & { isGridVisible: boolean }
  name: string
  description: string
}
interface IFormConstructor {
  allElements: (IFormElement | IGroupElement)[]
  selectedElement: ISelectedElement | null
  selectedElementProps: UnionProps | null

  pages: IPageOfLayout[]
  selectedPageId: string
  numberOfPages: number
}
export interface IFormConstructorSerializable {
  allElements: (IFormElement | IGroupElement)[]
  selectedElement: ISelectedElement | null
  selectedElementProps: UnionProps | null

  isGridVisible: boolean
  pages: IPageOfLayout[]
  selectedPageId: string
  numberOfPages: number
}

export interface ProjectDataSerializable {
  project: IFormConstructorSerializable
  name: string
  description: string
}

export interface SaveProjectIntent extends ProjectData {
  saveWay: ProjectSaveWays
}
