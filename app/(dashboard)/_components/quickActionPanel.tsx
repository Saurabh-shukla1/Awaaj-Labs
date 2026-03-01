import React from 'react'
import { quickActions } from '../data/quick-action'
import { QuickActionCard } from './quickActionCard'

export const QuickActionPanel = () => {
  return (
    <div className='space-y-4'>
        <h2 className='text-lg font-semibold'>
            Quick Actions
        </h2>
        <div className='grid md:grid-cols-2 xl:grid-cols-3 gap-4'>
            {quickActions.map((action) => (
                <QuickActionCard 
                    key={action.title}
                    title={action.title}
                    description={action.description}
                    gradient={action.gradient}
                    href={action.href}
                />
            ))}
        </div>
    </div>
  )
}
