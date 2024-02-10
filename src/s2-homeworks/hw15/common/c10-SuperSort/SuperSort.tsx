import React from 'react'
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


    return up // исправить
}

const SuperSort: React.FC<SuperSortPropsType> = (
    {
        sort, value, onChange, id = 'hw15',
    }
) => {
    const up = '0' + value
    const down = '1' + value

    const onChangeCallback = () => {
        console.log(value)
        onChange('up')
    }

    const icon = sort === down
        ? downIcon
        : sort === up
            ? upIcon
            : noneIcon
    return (
        <span
            id={id + '-sort-' + value}
            onClick={onChangeCallback}
        >
             <img
                 id={id + '-icon-' + sort}
                 src={icon}
             />
            {/*сделать иконку*/}
            {/*<img*/}
            {/*    id={id + '-icon-' + sort}*/}
            {/*    src={icon}*/}
            {/*/>*/}

            {/*{icon}*/}
            {/*а это убрать*/}
        </span>
    )
}

export default SuperSort
