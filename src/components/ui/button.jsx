
import React from 'react'
export function Button({ children, variant = 'default', ...props }) {
  const base = 'inline-flex items-center justify-center rounded-2xl border font-medium transition'
  const variants = {
    default: 'bg-black text-white border-black hover:opacity-90 px-4 py-2',
    secondary: 'bg-white text-black border-gray-300 hover:bg-gray-50 px-4 py-2'
  }
  return <button className={[base, variants[variant]].join(' ')} {...props}>{children}</button>
}
