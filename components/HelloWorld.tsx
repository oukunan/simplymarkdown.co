import React from 'react'

type Props = {
  title: string
  children?: React.ReactNode
}

export default function HelloWorld(props: Props) {
  return (
    <div>
      <h1>{props.title}</h1>
      {props.children}
    </div>
  )
}
