import React from 'react'

const Pagination = ({postsPerPage, totalPosts, paginate}) => {
    const pageNumbers = [];
    for (let i = 1; i<=Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
  return (
    <div>
      <ul className='w-full flex justify-center items-center gap-20'>
        {pageNumbers.map(number => (
            <li key={number}>
                <a onClick={()=> paginate(number)} href='/students' className='page-link'>
                    {number}
                </a>

            </li>
        ))}
      </ul>
    </div>
  )
}

export default Pagination
