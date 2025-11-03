
import React, { createContext, useContext, useState } from 'react'
const TabsCtx = createContext(null)
export function Tabs({ defaultValue, children }) { const [value, setValue] = useState(defaultValue); return <TabsCtx.Provider value={{ value, setValue }}>{children}</TabsCtx.Provider> }
export function TabsList({ className = '', children }) { return <div className={['rounded-2xl border p-1 grid', className].join(' ')}>{children}</div> }
export function TabsTrigger({ value, children }) { const { value: v, setValue } = useContext(TabsCtx); const active = v === value; return (<button onClick={() => setValue(value)} className={['px-3 py-2 rounded-xl text-sm', active ? 'bg-black text-white' : 'hover:bg-gray-100'].join(' ')}>{children}</button>) }
export function TabsContent({ value, children, className = '' }) { const { value: v } = useContext(TabsCtx); if (v !== value) return null; return <div className={className}>{children}</div> }
