import React from 'react'
import { storiesOf } from '@storybook/react'
import 'bootstrap/dist/css/bootstrap.css'
import ShowAlert from './samples/ShowAlert'
import ShowOkCancelDialog from './samples/ShowOkCancelDialog'
import ShowWithOnHide from './samples/ShowWithOnHide'
import ShowWarningDialog from './samples/ShowWarningDialog'
import ShowCustomDialog from './samples/ShowCustomDialog'
import ShowDialogWithChangedOptions from './samples/ShowDialogWithChangedOptions'

storiesOf('Dialog', module)
  .addDecorator((story) => (
    <div style={{margin: '20px'}}>
      {story()}
    </div>
  ))
  .add('show alert', () => (<ShowAlert />))
  .add('show ok cancel dialog', () => (<ShowOkCancelDialog />))
  .add('show with onHide', () => (<ShowWithOnHide />))
  .add('show warning dialog', () => (<ShowWarningDialog />))
  .add('show custom dialog', () => (<ShowCustomDialog />))
  .add('show dialog with changed options', () => (<ShowDialogWithChangedOptions />))
