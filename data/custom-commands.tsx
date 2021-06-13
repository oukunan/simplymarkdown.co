import React from 'react'

import {
  ICommand,
  TextAreaTextApi,
  TextState,
} from '@uiw/react-md-editor/lib/cjs/commands'

export const customCommands: { [key: string]: ICommand } = {
  apiReference: {
    name: 'api',
    keyCommand: 'api',
    buttonProps: { 'aria-label': 'Insert api' },
    icon: <span>API</span>,
    execute: (__state: TextState, api: TextAreaTextApi) => {
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
  },
}

export const customExtraCommands: { [key: string]: ICommand } = {
  copy: {
    name: 'copy',
    keyCommand: 'copy',
    buttonProps: { 'aria-label': 'Copy markdown' },
    icon: <span>Copy</span>,
    execute: (__state: TextState, api: TextAreaTextApi) => {
      api.textArea.select()
      document.execCommand('copy')
    },
  },
  reset: {
    name: 'Reset',
    keyCommand: 'reset',
    buttonProps: { 'aria-label': 'Reset markdown' },
    icon: <span>Reset</span>,
    // TODO: Find a better way  to execute the command
    execute: () => null,
  },
  download: {
    name: 'Download',
    keyCommand: 'download',
    buttonProps: { 'aria-label': 'Download markdown' },
    icon: <span>Download</span>,
    execute: () => null,
  },
}
