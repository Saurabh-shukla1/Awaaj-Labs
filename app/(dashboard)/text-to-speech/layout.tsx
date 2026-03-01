import React from 'react'
import { TextToSpeechLayout } from './_components/text-to-speech-layout'

const Layout = ({children}: {children: React.ReactNode}) => {
  return (
    <TextToSpeechLayout>
        {children}
    </TextToSpeechLayout>
  )
}

export default Layout