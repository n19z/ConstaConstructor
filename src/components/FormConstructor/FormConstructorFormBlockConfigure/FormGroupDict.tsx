import { FC } from 'react'
import { FormGroupsTypes, FormElementTypes } from '../coreTypes'
import {
  LayoutFormElement,
  ButtonFormElement,
  BadgeFormElement,
  CardFormElement,
  CheckboxFormElement,
  HeaderWithBreadcrumbs,
  HeaderWithStatus,
  HeaderCognitiveGeologist,
  InformerFormElement,
  TabsFormElement,
  TextFormElement,
  TextFieldFormElement,
  PlaceholderFormElement,
  CardWithBarChart,
  ProjectGrid,
  CustomCards,
  Dashboard,
  SimpleForm,
  WizardForm,
  FooterWithSwitch,
  FormWithTwoColumns,
  Table,
  ListFormElement,
  RadioButtonFormElement,
  SwitchFormElement,
  DatePickerFormElement,
  SelectFormElement,
  ComboBoxFormElement,
  DataTimeFormElement,
  ExpertiseForm,
  PrototypeTextElement,
  PrototypeRectElement,
  BreadcrumbsFormElement,
  UserFormElement,
  IconFormElement,
  TagFormElement,
  ChoiceGroupFormElement,
} from './Elements'
import { ButtonActionModal } from './Elements/ButtonFormElement/ButtonActionModal'

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
  Icon: IconFormElement,
  ButtonModal: ButtonActionModal,
  Tag: TagFormElement,
  ChoiceGroup: ChoiceGroupFormElement,
}
