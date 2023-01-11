import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const PaginationLink = ({children,...props}) => {
  return <NavLink {...props} 
      className={({isActive}) => `btn btn-pagination ${isActive ? "btn-pagination-link-active" : "btn-pagination-link"}`}>
      {children}
  </NavLink>
}

export const Pagination = ({page, totalPage}) => {
  return (
    <div className='w-full px-1 py-2'>
      <div className='w-max flex mx-auto divide-x divide-zinc-900 overflow-hidden'>
        {page
        ? <Link to={page <= 2 ? "/" : `/${parseInt(page)-1}`} className='btn btn-pagination btn-pagination-link rounded-l-lg'><i className='fa-solid fa-chevron-left'></i></Link>
        : <span className='btn btn-pagination btn-pagination-disabled rounded-l-lg'><i className='fa-solid fa-chevron-left text-xs'></i></span>}
        <PaginationLink to='/'>1</PaginationLink>
        <PaginationLink to='/2'>2</PaginationLink>
        {!page || page < 6 
        ? <>
            <PaginationLink to='/3'>3</PaginationLink>
            <PaginationLink to='/4'>4</PaginationLink>
            <PaginationLink to='/5'>5</PaginationLink>
            <PaginationLink to='/6'>6</PaginationLink>
            <span className='btn btn-pagination btn-pagination-disabled'>...</span>
          </> 
        : page > totalPage - 5
          ? <>
              <span className='btn btn-pagination btn-pagination-disabled'>...</span>
              <PaginationLink to={`/${totalPage -5}`}>{totalPage -5}</PaginationLink>
              <PaginationLink to={`/${totalPage -4}`}>{totalPage -4}</PaginationLink>
              <PaginationLink to={`/${totalPage -3}`}>{totalPage -3}</PaginationLink>
              <PaginationLink to={`/${totalPage -2}`}>{totalPage -2}</PaginationLink>
            </>
          : <>
              <span className='btn btn-pagination btn-pagination-disabled'>...</span>
              <PaginationLink to={`/${parseInt(page)-1}`}>{parseInt(page)-1}</PaginationLink>
              <PaginationLink to={`/${parseInt(page)}`}>{parseInt(page)}</PaginationLink>
              <PaginationLink to={`/${parseInt(page)+1}`}>{parseInt(page)+1}</PaginationLink>
              <span className='btn btn-pagination btn-pagination-disabled'>...</span>
            </>}
        <PaginationLink to={`/${totalPage -1}`}>{totalPage -1}</PaginationLink>
        <PaginationLink to={`/${totalPage}`}>{totalPage}</PaginationLink>
        {page === `${totalPage}`
        ? <span className='btn btn-pagination btn-pagination-disabled rounded-r-lg'><i className='fa-solid fa-chevron-right'></i></span>
        : <Link to={page ? `/${parseInt(page)+1}` : `2`} className="btn btn-pagination btn-pagination-link rounded-r-lg"><i className='fa-solid fa-chevron-right text-xs'></i></Link>}
      </div>
    </div>
  )
}
