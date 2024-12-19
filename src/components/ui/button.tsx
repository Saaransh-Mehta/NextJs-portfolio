import React, { ButtonHTMLAttributes } from 'react'

export const Button = React.forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(
  ({ className, ...props }, ref) => {
    return (
      <button
        className={`transition-all duration-300 bg-blue-600 text-white hover:bg-blue-700 ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = 'Button'