import React from 'react';
import Button from './Button'
import { useSelector } from 'react-redux'

export default function Buttons(props) {
    const divisionClickedContinued = useSelector(store => store.buttons.divisionClickedContinued)
    const Screen = useSelector(store => store.buttons.screen)

    const acButtonState = () => {
        if (Screen === "0" || Screen === "-0") {
            return "AC"
        } else {
            return "C"
        }
    }

    return (
        <div className='buttons-wrapper'>
            <div className='buttons-row'>
                <Button state={acButtonState()} white />
                <Button state={'+/-'} white />
                <Button state={'%'} white={true} />
                <Button state={'/'} orange={!divisionClickedContinued} white={divisionClickedContinued} />
            </div>
            <div className='buttons-row'>
                <Button state={7} />
                <Button state={8} />
                <Button state={9} />
                <Button state={'x'} orange />

            </div>
            <div className='buttons-row'>
                <Button state={4} />
                <Button state={5} />
                <Button state={6} />
                <Button state={'-'} orange />

            </div>
            <div className='buttons-row'>
                <Button state={1} />
                <Button state={2} />
                <Button state={3} />
                <Button state={'+'} orange />
            </div>
            <div className='buttons-row'>
                <Button state={0} large />
                <Button state={'.'} />
                <Button state={'='} orange />

            </div>
        </div>
    )
}
