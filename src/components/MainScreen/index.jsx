import React, { useState, useRef } from 'react'
import debounce from 'lodash/debounce'

import './MainScreen.scss'

export const ScrollContext = React.createContext(0)

export function MainScreen({ children }) {
    const [screenNumber, setScreenNumber] = useState(0)
    const clientYRef = useRef(0)

    const debouncedScrollHandler = debounce(delta => {
        if (children && children.length) {
            const { length } = children

            // scroll direction
            // high limit
            if (delta > 0 && screenNumber > 0)
                setScreenNumber(screenNumber - 1)
            // low limit
            if (delta < 0 && screenNumber < length - 1)
                setScreenNumber(screenNumber + 1)
        }
    }, 200)
    function scrollHandler(e) {
        const delta = e.nativeEvent.wheelDeltaY

        debouncedScrollHandler(delta)
    }

    function touchStartHandler(e) {
        clientYRef.current = e.nativeEvent.touches[0].clientY
    }
    function touchEndHandler(e) {
        const { clientY } = e.nativeEvent.changedTouches[0]

        if (children && children.length) {
            const { length } = children
            const { current } = clientYRef
        
            // scroll direction
            // high limit
            if (clientY > current && screenNumber > 0)
                setScreenNumber(screenNumber - 1)
            // low limit
            if (clientY < current && screenNumber < length - 1)
                setScreenNumber(screenNumber + 1)
        }
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