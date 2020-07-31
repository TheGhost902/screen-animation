import React, { useState, useRef } from 'react'

import './MainScreen.scss'

export const ScrollContext = React.createContext(0)

export function MainScreen({ children }) {
    const [screenNumber, setScreenNumber] = useState(0)
    const clientYRef = useRef(0)

    function scrollHandler(e) {
        const delta = e.nativeEvent.wheelDeltaY

        // if (screenNumber >= children.length) return

        // scroll direction
        if (delta > 0) setScreenNumber(screenNumber - 1)
        if (delta < 0) setScreenNumber(screenNumber + 1)
    }

    function touchStartHandler(e) {
        clientYRef.current = e.nativeEvent.touches[0].clientY
    }
    function touchEndHandler(e) {
        const { clientY } = e.nativeEvent.changedTouches[0]

        if (clientY > clientYRef.current) setScreenNumber(screenNumber - 1)
        if (clientY < clientYRef.current) setScreenNumber(screenNumber + 1)
    }

    return (
        <div
            className="main-screen"
            onWheel={scrollHandler}
            onTouchStart={touchStartHandler}
            onTouchEnd={touchEndHandler}
        >
            <div className="main-screen__status">{screenNumber + 1}</div>

            <ScrollContext.Provider value={screenNumber}>
                {children}
            </ScrollContext.Provider>
        </div>
    )
}