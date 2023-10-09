import React from 'react'
import Search from './Search'

export default function Header() {
  return (
    <div className="header">
      <div className="header-title">
      Header
      </div>
      <div className="header-search">
        <Search />
      </div>
    </div>
  )
}
