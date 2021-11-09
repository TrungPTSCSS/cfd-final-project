import React from 'react'
import { Link } from 'react-router-dom'
export function Button({ titleButton, type, color,resetColor }) {
    let colorClass = color === 'white' ? 'btn-white' : color === 'black' ? 'btn-dark' : ''
    let resetText = resetColor === true ? 'text-reset' : ''
    return (
        <Link className={`btn ${colorClass} stretched-link ${resetText}`}  to={{ pathname: `/shop/?type=${type}` }}>
            {titleButton} <i className="fe fe-arrow-right ml-2" />
        </Link>

    )
}
