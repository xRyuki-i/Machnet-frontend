import React from 'react'
import './card.css'

export const Card = ({labelName, cardValue}) => {
    return (
        <div className="card__info">
            <p className="label__card">{labelName}</p>

            <h3 className="value__card">{cardValue}</h3>
        </div>
    )
}

