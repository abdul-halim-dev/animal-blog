import React from 'react'
import { Link } from 'react-router-dom'

const CategoryTag = () => {
  return (
    <div className='category_tag_wrapper'>
        <h1>Category</h1>
        <div className="category_box_container">
            <Link to="/category/dsjkfhsdfh" className="category_item">
                <span>Birds</span>
                <span>25</span>
            </Link>
            <Link to="/category/dsjkfhsdfh" className="category_item">
                <span>Birds</span>
                <span>25</span>
            </Link>
            <Link to="/category/dsjkfhsdfh" className="category_item">
                <span>Birds</span>
                <span>25</span>
            </Link>
            <Link to="/category/dsjkfhsdfh" className="category_item">
                <span>Birds</span>
                <span>25</span>
            </Link>
        </div>
    </div>
  )
}

export default CategoryTag