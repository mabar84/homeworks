import React, {useState} from 'react'
import SuperButton from '../hw04/common/c2-SuperButton/SuperButton'
import {restoreState} from '../hw06/localStorage/localStorage'
import s from './Clock.module.css'

function Clock() {
    const [timerId, setTimerId] = useState<NodeJS.Timer | undefined>(undefined)
    // for autotests // не менять // можно подсунуть в локалСторэдж нужную дату, чтоб увидеть как она отображается
    const [date, setDate] = useState<Date>(new Date(restoreState('hw9-date', Date.now())))
    const [show, setShow] = useState<boolean>(false)
    const start = () => {
        setTimerId(setInterval(() => {
            setDate(new Date())
        }, 1000))
    }
    const stop = () => {
        clearInterval(timerId)
        setTimerId(undefined)
    }
    const onMouseEnter = () => setShow(true)
    const onMouseLeave = () => setShow(false)

    const addZeroBeforeNum = (num: number) => num < 10 ? '0' + num : num
    const h = addZeroBeforeNum(date.getHours())
    const min = addZeroBeforeNum(date.getMinutes())
    const sec = addZeroBeforeNum(date.getSeconds())
    const y = date.getFullYear()
    const mon = addZeroBeforeNum(date.getMonth() + 1)
    const d = addZeroBeforeNum(date.getDay())
    const monthName = date.toLocaleString('en-US', {month: 'long'});
    const dayName = date.toLocaleString('en-US', {weekday: 'long'});

    const stringTime = h + ':' + min + ':' + sec || <br/>
    const stringDate = d + '.' + mon + '.' + y || <br/>
    const stringDay = dayName || <br/>
    const stringMonth = monthName || <br/>

    return (
        <div className={s.clock}>
            <div
                id={'hw9-watch'}
                className={s.watch}
                onMouseEnter={onMouseEnter}
                onMouseLeave={onMouseLeave}
            >
                <span id={'hw9-day'}>{stringDay}</span>,{' '}
                <span id={'hw9-time'}>
                    <strong>{stringTime}</strong>
                </span>
            </div>

            <div id={'hw9-more'}>
                <div className={s.more}>
                    {show ? (
                        <>
                            <span id={'hw9-month'}>{stringMonth}</span>,{' '}
                            <span id={'hw9-date'}>{stringDate}</span>
                        </>
                    ) : (
                        <>
                            <br/>
                        </>
                    )}
                </div>
            </div>

            <div className={s.buttonsContainer}>
                <SuperButton
                    id={'hw9-button-start'}
                    disabled={!!timerId} // пишут студенты // задизэйблить если таймер запущен
                    onClick={start}
                >
                    start
                </SuperButton>
                <SuperButton
                    id={'hw9-button-stop'}
                    disabled={!timerId} // пишут студенты // задизэйблить если таймер не запущен
                    onClick={stop}
                >
                    stop
                </SuperButton>
            </div>
        </div>
    )
}

export default Clock
