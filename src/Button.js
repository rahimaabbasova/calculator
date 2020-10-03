import React from 'react';
import { acClicked, numberClicked, minusClicked, percentageClicked, pointClicked, equalClicked, startProcess } from "./redux/actions"
import { useDispatch } from "react-redux"

export default function Button(props) { //what does these two lines mean?
    const dispatch = useDispatch()

    const buttonClass = (props) => {
        let finalClass = "button-wrapper"
        if (props.orange) {
            finalClass += " button-orange"
        } else if (props.white) {
            finalClass += " button-white"
        }
        if (props.large) {
            finalClass += " button-large-width"
        }
        return finalClass
    }

    const ButtonClicked = (props) => { // what is the difference between two buttons.js files?
        if (props.state === "AC" || props.state === "C") {
            dispatch(acClicked())
        } else if (props.state === "/") {
            dispatch(startProcess("division"))
        
        } else if (props.state === "x") {
            dispatch(startProcess("multiplication"))
        } 
        else if (props.state === "+") {
            dispatch(startProcess("summation"))
        }
        else if (props.state === "-") {
            dispatch(startProcess("subtraction"))
        } 
        else if (props.state === "+/-") {
            dispatch(minusClicked())
        }
        else if (props.state === "%") {
            dispatch(percentageClicked())

        } else if (props.state === ".") {
            dispatch(pointClicked())

        }
        else if (props.state === "=") {
            dispatch(equalClicked())

        }
        else {
            dispatch(numberClicked(props.state.toString()))
        }
    }


    return (
        <div onClick={() => ButtonClicked(props)} className={buttonClass(props)} >
            {props.state}
        </div >
    )
}