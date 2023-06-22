import { FormElementTypes, FormGroupsTypes } from '../../../../store/formElements'
import uuid from 'react-uuid'

export const constaCards = [
  {
    id: uuid(),
    name: 'Панель',
    groupElementType: FormGroupsTypes.Layout,
  },
  {
    id: uuid(),
    name: 'Кнопка',
    formElementType: FormElementTypes.Button,
  },
  {
    id: uuid(),
    name: 'Карточка',
    groupElementType: FormGroupsTypes.Card,
  },
  {
    id: uuid(),
    name: 'Badge',
    formElementType: FormElementTypes.Badge,
  },
  {
    id: uuid(),
    name: 'Табы',
    formElementType: FormElementTypes.Tabs,
  },
  {
    id: uuid(),
    name: 'Informer',
    formElementType: FormElementTypes.Informer,
  },
  {
    id: uuid(),
    name: 'Text',
    formElementType: FormElementTypes.Text,
  },
  {
    id: uuid(),
    name: 'Checkbox',
    formElementType: FormElementTypes.Checkbox,
  },
  {
    id: uuid(),
    name: 'TextField',
    formElementType: FormElementTypes.TextField,
  },
  {
    id: uuid(),
    name: 'RadioButton',
    formElementType: FormElementTypes.RadioButton,
  },
  {
    id: uuid(),
    name: 'List',
    formElementType: FormElementTypes.List,
  },
  {
    id: uuid(),
    name: 'Switch',
    formElementType: FormElementTypes.Switch,
  },
    {
    id: uuid(),
    name: 'DatePicker',
    formElementType: FormElementTypes.DatePicker,
  },
  {
    id: uuid(),
    name: 'ComboBox',
    formElementType: FormElementTypes.ComboBox,
  },
  {
    id: uuid(),
    name: 'Select',
    formElementType: FormElementTypes.Select,
  },
  {
    id: uuid(),
    name: 'DataTime',
    formElementType: FormElementTypes.DataTime,
  },
  {
    id: uuid(),
    name: 'User',
    formElementType: FormElementTypes.User,
  },
  {
    id: uuid(),
    name: 'Icon',
    formElementType: FormElementTypes.Icon,
  },
]
