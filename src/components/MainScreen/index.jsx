import React, { useState } from 'react'

import './MainScreen.scss'

export const ScrollContext = React.createContext(0)

export function MainScreen({ children }) {
    const [screenNumber, setScreenNumber] = useState(0)

    function scrollHandler(e) {
        const delta = e.nativeEvent.wheelDeltaY

        // if (screenNumber >= children.length) return

        // scroll direction
        if (delta > 0) setScreenNumber(screenNumber - 1)
        if (delta < 0) setScreenNumber(screenNumber + 1)
    }

    return (
        <div className="main-screen" onWheel={scrollHandler}>
            <div className="main-screen__status">{screenNumber + 1}</div>

            <ScrollContext.Provider value={screenNumber}>
                {children}
            </ScrollContext.Provider>
        </div>
    )
}