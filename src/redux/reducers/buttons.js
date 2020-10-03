import { NUMBER_CLICKED, AC_CLICKED, MINUS_CLICKED, PERCENTAGE_CLICKED, POINT_CLICKED, EQUAL_CLICKED, START_PROCESS } from '../actionTypes';
import * as R from 'ramda'
import { percentageClicked } from '../actions';  //???
const initialState = {
    number: "",
    screen: "0",
    percentageClickedInitial: false,  //???
    processContinued: false,          //???
    firstNumber: "",
    process: "",
    equal: false
}
//if percentage or division clicked,then start wrting new screen,otherwise add numbers to the current screen
const numberClickedScreen = (state, action) => {
    if (state.percentageClickedInitial || state.processContinued || state.equal) {
        return action.number
    }

    else {
        return (state.screen === "0" ? action.number : state.screen + action.number)//why we check state.screen=0?
    }
}
const equalClicked = (state, action) => { //we have equalclicked defined in actiontypes,can we cretae it again here?
    if (state.process === "subtraction") {
        return (Number(state.firstNumber) - Number(state.screen)).toString()
    }
    if (state.process === "summation") {
        return (Number(state.firstNumber) + Number(state.screen)).toString()
    }
    if (state.process === "multiplication") {
        return (Number(state.firstNumber) * Number(state.screen)).toString()
    }
    if (state.process === "division") {
        return (Number(state.firstNumber) / Number(state.screen)).toString()
    }
    if (state.process === "") {
        return (state.screen)
    }
}
export default function (state = initialState, action) {
    switch (action.type) {
        case NUMBER_CLICKED: {
            return {
                ...state,
                number: action.number,
                screen: numberClickedScreen(state, action),
                percentageClickedInitial: false,
                processContinued: false,
                equal: false

            }
        }
        case AC_CLICKED: {
            return {
                ...state,
                number: "",
                screen: "0",
                percentageClickedInitial: false,
                process: "",//why we write process here? why we do not also write processcontinued?
                equal: false
            }
        }
        case MINUS_CLICKED: {
            return {
                ...state,
                screen: R.head(state.screen) === '-' ? R.drop(1, state.screen) : R.concat('-', state.screen),
                equal: false
            }
        }
        case PERCENTAGE_CLICKED: {
            return {
                ...state,
                screen: state.screen / 100,
                percentageClickedInitial: true,
                equal: false

            }
        }
        case POINT_CLICKED: {
            return {
                ...state,
                percentageClickedInitial: false,
                screen: R.includes('.', state.screen) ? state.screen : R.concat(state.screen, '.'),
                equal: false

            }
        }
        case EQUAL_CLICKED: {
            return {
                ...state,
                screen: equalClicked(state, action),
                process: "",
                equal: true
            }
        }
        case START_PROCESS: {
            return {
                ...state,
                firstNumber: state.screen,
                process: action.process,
                processContinued: true,
                equal: false
            }
        }
        default:
            return state;
    }
}
