import React, { HTMLAttributes } from 'react'

export const CardBody = React.forwardRef<HTMLDivElement, HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => {
    return (
      <div
        className={`transition-all duration-300 bg-gray-800 text-white rounded-xl shadow-lg ${className}`}
        ref={ref}
        {...props}
      />
    )
  }
)
CardBody.displayName = 'CardBody'