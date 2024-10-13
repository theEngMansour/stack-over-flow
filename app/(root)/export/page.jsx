'use client'

import React from 'react'
import { usePDF } from 'react-to-pdf'

export default function Component () {
  const { toPDF, targetRef } = usePDF({ filename: 'page.pdf' })

  return (
    <div className="p-4 w-full h-full bg-accent-blue bg-red-500">
      <button onClick={() => toPDF()} className="mb-4">Download PDF</button>

      <div ref={targetRef}>
        <h1 className="text-2xl font-bold mb-4">Hello, PDF!</h1>
        <h1 className="mb-2 font-ibm">انمت مين</h1>

      </div>
    </div>
  )
}