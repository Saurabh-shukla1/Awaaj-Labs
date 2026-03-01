import { Metadata } from 'next'
import React from 'react'
import { TextToSpeechView } from './_components/TextToSpeechView'

export const metadata: Metadata = {title: "Text to Speech"}

const page = () => {
  return (
    <TextToSpeechView />
  )
}

export default page