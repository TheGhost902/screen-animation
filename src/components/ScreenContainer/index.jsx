import React, { useContext } from 'react'

import './ScreenContainer.scss'

import { ScrollContext } from '../MainScreen'

export function ScreenContainer({ children, id }) {
    const screenNumber = useContext(ScrollContext)

    console.log('Container: ', screenNumber)

    return (
        <div 
            className="screen-container"
            style={{
                transform: `translateY(${-100 * screenNumber}%)`,
                opacity: screenNumber === id? 1 : 0
            }}
            >
                {children}
            </div>
    )
}