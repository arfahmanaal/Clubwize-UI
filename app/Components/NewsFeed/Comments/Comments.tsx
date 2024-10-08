import React from 'react'
import CommentInteractions from './CommentContainer/CommentInteractions/CommentInteractions'
import CommentBox from './CommentContainer/CommentBox/CommentBox'

const Comments = () => {
  return (
    <div className='flex font-medium flex-col sm:text-xs md:text-md mt-4'>
      <p className='text-2xl mb-4 sm:text-sm md:text-md'>Comments(1.2k) </p>

      <div className="flex p-3 lg:p-6 rounded-lg shadow-md mb-2  ">
        <CommentBox />

      </div>
    </div>
  )
}

export default Comments