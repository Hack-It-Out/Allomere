import React, { ReactNode } from 'react'

type MainLayoutProps = {
    children: ReactNode
}

const MainLayout = ({children}: MainLayoutProps) => {
  return (
    <div>MainLayout

        {children}
    </div>

  )
}

export default MainLayout