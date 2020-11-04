import React from 'react'
import Categories from './Categories'
import { withRouter, useLocation } from 'react-router-dom'

const CategoriesPage = (props) => {
    let character = useLocation().pathname.slice(1)
    return (
        <div className="categories">
            <Categories/>
            <Categories/>
            <Categories />
            <Categories/>
            <Categories/>
            <Categories />
        </div>
    )
}

export default withRouter(CategoriesPage)
