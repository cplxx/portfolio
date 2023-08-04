import React from 'react'

interface TextProps {
  text?: string
  subText?: string
  tag?: string
  tag1?: string
}

export function Text(props: TextProps) {
  return (
    <>
      <div className="flex flex-col">
        <p className="-translate-x-6 text-palete-0">{props.tag}</p>
        <p className="text-4xl font-semibold text-white md:text-6xl">
          {props.text}
        </p>
        <p className="-translate-x-6 text-palete-0">{props.tag1}</p>
      </div>
      {props.subText && <p className="text-lg text-white">{props.subText}</p>}
    </>
  )
}
