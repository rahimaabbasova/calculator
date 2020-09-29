import React from 'react';
import Button from './Button'
import { useSelector } from 'react-redux'

export default function Buttons(props) {
    const process = useSelector(store => store.buttons.process)
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
                <Button state={'/'} orange={!(process === "division")} white={(process === "division")} />
            </div>
            <div className='buttons-row'>
                <Button state={7} />
                <Button state={8} />
                <Button state={9} />
                <Button state={'x'}  orange={!(process === "multiplication")} white={(process === "multiplication")} />

            </div>
            <div className='buttons-row'>
                <Button state={4} />
                <Button state={5} />
                <Button state={6} />
                <Button state={'-'}  orange={!(process === "subtraction")} white={(process === "subtraction")} />

            </div>
            <div className='buttons-row'>
                <Button state={1} />
                <Button state={2} />
                <Button state={3} />
                <Button state={'+'}  orange={!(process === "summation")} white={(process === "summation")} />
            </div>
            <div className='buttons-row'>
                <Button state={0} large />
                <Button state={'.'} />
                <Button state={'='} orange />

            </div>
        </div>
    )
}
