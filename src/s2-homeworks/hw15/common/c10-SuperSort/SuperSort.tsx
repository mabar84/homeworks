import React from 'react'
import s from './SuperSort.module.css'
import downIcon2 from './icons/down-black.svg'
import upIcon2 from './icons/up-black.svg'
import noneIcon2 from './icons/icon.svg'
// добавить в проект иконки и импортировать
// const downIcon = '[\\/]'
const downIcon = downIcon2
// const upIcon = '[/\\]'
const upIcon = upIcon2
const noneIcon = noneIcon2
// const noneIcon = '[--]'
export type SuperSortPropsType = {
    id?: string
    sort: string
    value: string
    onChange: (newSort: string) => void
}

export const pureChange = (sort: string, down: string, up: string) => {
    // пишет студент, sort: (click) => down (click) => up (click) => '' (click) => down ...
    console.log(sort)
    if (sort === '') return 'up'
    if (sort === 'up') return 'down'
    return ''
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    // const up = '0' + value
    // const down = '1' + value
    const up = value
    const down = value
    const onChangeCallback = () => {
        onChange(pureChange(sort, down, up))
    }

    // const icon = sort === down
    //     ? downIcon
    //     : sort === up
    //         ? upIcon
    //         : noneIcon
    let icon = noneIcon

    if (value === 'tech') {
        if (sort === 'down') {
            icon = downIcon
        }
        if (sort === 'up') {
            icon = upIcon
        }
    }

    // ? downIcon
    // : sort === 'up'
    //     ? upIcon
    //     : noneIcon


    console.log(value)
    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
            className={s.arrows}
        >
             <img
                 id={id + '-icon-' + sort}
                 src={icon}
             />
        </span>
    )
}

export default SuperSort
