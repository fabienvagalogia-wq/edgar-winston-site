
import React from 'react'

export function Button({ asChild, children, className = '', variant = 'default', size = 'md', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-2xl px-4 py-2 text-sm font-medium transition border'
  const variants = {
    default: 'bg-black text-white border-black hover:opacity-90',
    secondary: 'bg-white text-black border-gray-300 hover:bg-gray-50'
  }
  const sizes = { sm: 'px-3 py-1.5 text-sm', md: 'px-4 py-2', lg: 'px-5 py-3 text-base' }
  const cls = [base, variants[variant] ?? variants.default, sizes[size] ?? sizes.md, className].join(' ')
  if (asChild && React.isValidElement(children)) {
    return React.cloneElement(children, { className: [children.props.className, cls].join(' '), ...props })
  }
  return <button className={cls} {...props}>{children}</button>
}
