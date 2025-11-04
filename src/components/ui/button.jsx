
import React from 'react'
export function Button({ children, variant='default', className='', as='button', href, ...props }) {
  const base = 'inline-flex items-center justify-center rounded-2xl border font-medium transition'
  const variants = { default:'bg-black text-white border-black hover:opacity-90 px-4 py-2',
                     secondary:'bg-white text-black border-gray-300 hover:bg-gray-50 px-4 py-2' }
  const cls = [base, variants[variant], className].join(' ')
  if (as === 'a' && href) return <a href={href} className={cls} {...props}>{children}</a>
  return <button className={cls} {...props}>{children}</button>
}
