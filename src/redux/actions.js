import { NUMBER_CLICKED, AC_CLICKED, DIVISION_CLICKED, MINUS_CLICKED, PERCENTAGE_CLICKED, POINT_CLICKED, EQUAL_CLICKED,START_PROCESS } from './actionTypes';
export const numberClicked = (number) => (
    {
        type: NUMBER_CLICKED,
        number,
    }
)

export const acClicked = () => (
    {
        type: AC_CLICKED,
    }
)
export const minusClicked = () => (
    {
        type: MINUS_CLICKED,
    }
)
export const percentageClicked = () => (
    {
        type: PERCENTAGE_CLICKED,
    }
)
export const pointClicked = () => (
    {
        type: POINT_CLICKED,
    }
)
export const equalClicked = () => (
    {
        type: EQUAL_CLICKED,
    }
)
export const startProcess = (process) => (
    {
        type: START_PROCESS,
        process,
    }
)