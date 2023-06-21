import { FC } from 'react'
import { FormElementTypes, FormGroupsTypes } from '../../store/formElements/types'
import {
  BadgeFormElement,
  ButtonFormElement,
  CardFormElement,
  CheckboxFormElement,
  HeaderWithBreadcrumbs,
  HeaderWithStatus,
  InformerFormElement,
  ProjectGrid,
  TabsFormElement,
  TextFieldFormElement,
  PlaceholderFormElement,
  CardWithBarChart,
  HeaderCognitiveGeologist,
  Dashboard,
  CustomCards,
  LayoutFormElement,
  SimpleForm,
  WizardForm,
  FooterWithSwitch,
  FormWithTwoColumns,
  Table,
  ListFormElement,
  RadioButtonFormElement,
  SwitchFormElement,
  DatePickerFormElement,
  ComboBoxFormElement,
  SelectFormElement,
  DataTimeFormElement,
  ExpertiseForm,
  PrototypeTextElement,
  PrototypeRectElement,
  BreadcrumbsFormElement,
  UserFormElement,
  TextFormElement,
} from '../Elements'

export const FormGroupsDict: Record<FormGroupsTypes | FormElementTypes, FC<any>> = {
  Layout: LayoutFormElement,
  Button: ButtonFormElement,
  Badge: BadgeFormElement,
  Card: CardFormElement,
  Checkbox: CheckboxFormElement,
  HeaderWithBreadcrumbs: HeaderWithBreadcrumbs,
  HeaderWithStatus: HeaderWithStatus,
  HeaderCognitiveGeologist: HeaderCognitiveGeologist,
  Informer: InformerFormElement,
  Tabs: TabsFormElement,
  Text: TextFormElement,
  TextField: TextFieldFormElement,
  Placeholder: PlaceholderFormElement,
  CardWithBarChart: CardWithBarChart,
  ProjectGrid: ProjectGrid,
  CustomCards: CustomCards,
  Dashboard: Dashboard,
  SimpleForm: SimpleForm,
  WizardForm: WizardForm,
  FooterWithSwitch: FooterWithSwitch,
  FormWithTwoColumns: FormWithTwoColumns,
  Table: Table,
  List: ListFormElement,
  RadioButton: RadioButtonFormElement,
  Switch: SwitchFormElement,
  DatePicker: DatePickerFormElement,
  SelectForm: SelectFormElement,
  ComboBox: ComboBoxFormElement,
  DataTime: DataTimeFormElement,
  ExpertiseForm: ExpertiseForm,
  PrototypeTextElement: PrototypeTextElement,
  PrototypeRectElement: PrototypeRectElement,
  BreadcrumbsFormElement: BreadcrumbsFormElement,
  User: UserFormElement,
}
