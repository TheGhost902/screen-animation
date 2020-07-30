import React from 'react'

import './App.scss'

import { MainScreen } from '../MainScreen'
import { ScreenContainer } from '../ScreenContainer'

export function App() {
    return (
        <div className="app">
            <MainScreen>
                <ScreenContainer id={0}>
                    <h1>First Screen</h1>
                </ScreenContainer>

                <ScreenContainer id={1}>
                    <h1>Second Screen</h1>
                </ScreenContainer>
                
                <ScreenContainer id={2}>
                    <h1>Third Screen</h1>
                </ScreenContainer>
            </MainScreen>
        </div>
    )
}