import React from 'react'
import './card.css'

export const Card = ({labelName, cardValue, iconUrl}) => {
    return (
        <div className="card__info">
            <section className="label__card">
                <div className="icon__card">
                    <img src={iconUrl} alt="icon" />
                </div>
                <p className="title__card">{labelName}</p>
            </section>
            

            <h3 className="value__card">{cardValue}</h3>
        </div>
    )
}

