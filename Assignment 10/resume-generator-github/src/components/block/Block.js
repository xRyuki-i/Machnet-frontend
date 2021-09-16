import React from 'react';
import './block.css';

export const Block = ({labelName, blockCount}) => {

    return (
        <div className="status__block">
            <p className="count__block">{blockCount}</p>

            <div className="label__block">
                <p>{labelName}</p>
            </div>
        </div>
    )
}

