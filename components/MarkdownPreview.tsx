import React from 'react'
import MDEditor from '@uiw/react-md-editor'

type Props = {
  value: string
}

export default function MarkdownPreview(props: Props) {
  return (
    <MDEditor.Markdown
      source={props.value}
      style={{
        height: '100%',
        padding: '48px 24px',
      }}
    />
  )
}
