import React from 'react'
import MDEditor from '@uiw/react-md-editor'

import styled from 'styled-components'

type Props = {
  value: string
}

const Wrapper = styled(MDEditor.Markdown)`
  height: 100%;
  padding: 48px 24px;

  // Make ::marker for this type hidden
  ul .task-list-item::marker {
    color: white;
  }
`

export default function MarkdownPreview(props: Props) {
  return <Wrapper source={props.value} />
}
