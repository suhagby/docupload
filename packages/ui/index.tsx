import React from 'react'
import classNames from 'classnames'

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = ({
  className,
  ...props
}) => (
  <button
    className={classNames(
      'px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700',
      className
    )}
    {...props}
  />
)

export default Button

