'use client'

import { Button } from '@/components/ui/button'
import { Spinner } from '@/components/ui/spinner'
import React from 'react'

export const GenerateButton = ({
    size,
    disabled,
    isSubmitting,
    onSubmit,
    className,
} : {
    size?: "default" | "sm"
    disabled: boolean
    isSubmitting: boolean
    onSubmit: () => void
    className?: string
}) => {
  return (
    <Button
        size={size}
        className={className}
        onClick={onSubmit}
        disabled={disabled}
    >
        {isSubmitting ? (
            <>
                <Spinner className='size-4' />
                Generating...
            </>
        ): (
            "Generate Speech"
        )}
    </Button>
  )
}
