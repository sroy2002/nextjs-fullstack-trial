import React from 'react'

const layout = ({children}) => {
  return (
    <div>
        <div className='text-4xl font-semibold m-6 px-4'>Blogs</div>
      {children}
    </div>
  )
}

export default layout
