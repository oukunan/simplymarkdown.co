import React from 'react'

import {
  ICommand,
  TextAreaTextApi,
  TextState,
} from '@uiw/react-md-editor/lib/cjs/commands'

import { templates } from './templates'

export const customCommands = {
  apiReference: {
    name: 'api',
    keyCommand: 'api',
    buttonProps: { 'aria-label': 'Insert api' },
    icon: <span>API reference</span>,
    execute: (__state: TextState, api: TextAreaTextApi) => {
      api.replaceSelection(templates.apiReference)
    },
  },
  pullRequest: {
    name: 'pr',
    keyCommand: 'pr',
    buttonProps: { 'aria-label': 'Insert pr' },
    icon: <span>Pull request</span>,
    execute: (__state: TextState, api: TextAreaTextApi) => {
      api.replaceSelection(templates.pullRequest)
    },
  },
  contributing: {
    name: 'contributing',
    keyCommand: 'contributing',
    buttonProps: { 'aria-label': 'Insert contributing' },
    icon: <span>Contributing</span>,
    execute: (__state: TextState, api: TextAreaTextApi) => {
      api.replaceSelection(templates.contributing)
    },
  },
  codeExample: {
    name: 'codeExample',
    keyCommand: 'codeExample',
    buttonProps: { 'aria-label': 'Insert codeExample' },
    icon: <span>Code example</span>,
    execute: (__state: TextState, api: TextAreaTextApi) => {
      api.replaceSelection(templates.codeExample)
    },
  },
  collapsible: {
    name: 'collapsible',
    keyCommand: 'collapsible',
    buttonProps: { 'aria-label': 'Insert collapsible' },
    icon: <span>Collapsible</span>,
    execute: (__state: TextState, api: TextAreaTextApi) => {
      api.replaceSelection(templates.collapsible)
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
