import React from 'react'
import { Header } from '../../_components/header'

export const TextToSpeechLayout = ({children} : {children: React.ReactNode}) => {
  return (
    <div className='flex h-full min-h-0 flex-col overflow-hidden'>
        <Header title='Text to speech' />
        {children}
    </div>
  )
}
