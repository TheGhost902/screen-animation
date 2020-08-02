import React from 'react'

import './App.scss'

import { MainScreen } from '../MainScreen'
import { ScreenContainer } from '../ScreenContainer'

export function App() {
    return (
        <div className="app">
            <MainScreen>
                <ScreenContainer id={0}>
                    <div className="app__screen">
                        <h1 className="app__screen-title">
                            First Screen
                        </h1>
                    </div>
                </ScreenContainer>

                <ScreenContainer id={1}>
                    <div className="app__screen">
                        <h1 className="app__screen-title">
                            Second Screen
                        </h1>
                    </div>
                </ScreenContainer>
                
                <ScreenContainer id={2}>
                    <div className="app__screen">
                        <h1 className="app__screen-title">
                            Third Screen
                        </h1>
                    </div>
                </ScreenContainer>
            </MainScreen>
        </div>
    )
}