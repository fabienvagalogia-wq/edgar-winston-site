
import React from 'react'

export function Accordion({ children, className = '' }) {
  return <div className={className}>{children}</div>
}
export function AccordionItem({ value, children }) {
  return <div className="border-b">{children}</div>
}
export function AccordionTrigger({ children }) {
  return <details className="group py-3 cursor-pointer"><summary className="list-none text-sm font-medium">{children}</summary></details>
}
export function AccordionContent({ children }) {
  return <div className="pb-4 text-sm text-gray-600">{children}</div>
}
