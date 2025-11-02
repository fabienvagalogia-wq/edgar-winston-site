
import React from 'react'

export function Badge({ className = '', children, ...props }) {
  return <span className={['inline-flex items-center rounded-full border px-3 py-1 text-xs', className].join(' ')} {...props}>{children}</span>
}
