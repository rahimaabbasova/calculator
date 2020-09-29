import React from 'react'
import {useSelector} from 'react-redux'

export default function Screen(props) {
    const screenState = useSelector(store => store.buttons.screen)

    return (
        <div className="screen">{screenState}</div>
    )
}
