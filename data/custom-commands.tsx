import React from 'react'

import {
  ICommand,
  TextAreaTextApi,
  TextState,
} from '@uiw/react-md-editor/lib/cjs/commands'

const apiReference: ICommand = {
  name: 'api',
  keyCommand: 'api',
  buttonProps: { 'aria-label': 'Insert api' },
  icon: <span>API</span>,
  execute: (state: TextState, api: TextAreaTextApi) => {
    api.replaceSelection(`
## API Reference
        
#### Get all items
        
\`\`\`http
     GET /api/items
\`\`\`
        
| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| \`api_key\` | \`string\` | **Required**. Your API key |
`)
  },
}

export const customCommands: { [key: string]: ICommand } = {
  apiReference,
}
