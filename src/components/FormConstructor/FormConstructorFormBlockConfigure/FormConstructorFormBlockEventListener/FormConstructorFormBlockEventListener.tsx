import { FC, ReactNode, useEffect } from 'react'
import { formConstructorSlice, useAppDispatch, useAppSelector } from '../../store/formElements'
import css from './styles.module.css'
import { togglePanels } from '../../store'
import { deleteElement } from '../../store/formElements/actions'

interface Props {
  children?: ReactNode
}

export const FormConstructorFormBlockEventListener: FC<Props> = ({ children }) => {
  const dispatch = useAppDispatch()
  const { selectedElement } = useAppSelector(state => state.formConstructor)

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (code === 'Space' && ctrlKey) {
        dispatch(togglePanels())
      }
    }
    /// Полуает последнее состояние из истории
    const onKeyGoBack = (e: KeyboardEvent) => {
      const { code, ctrlKey } = e
      if (code === 'KeyZ' && ctrlKey) {
        dispatch(formConstructorSlice.actions.popHistory())
      }
    }

    document.addEventListener('keydown', onKeyGoBack)
    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('keydown', onKeyGoBack)
    }
  }, [])

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      const { code } = e
      if (selectedElement && code === 'Delete') {
        dispatch(deleteElement(selectedElement.elementId))
      }
    }

    document.addEventListener('keydown', onKeyDown)

    return () => {
      document.removeEventListener('keydown', onKeyDown)
    }
  }, [selectedElement])

  return <div className={css.formConstructorEventListener}>{children}</div>
}
