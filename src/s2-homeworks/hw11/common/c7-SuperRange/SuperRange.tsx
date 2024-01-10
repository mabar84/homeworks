import React from 'react'
import {Slider, SliderProps} from '@mui/material'

const SuperRange: React.FC<SliderProps> = (props) => {
    return (
        <Slider
            sx={{
                marginBottom: 0, // Изменение отступа
                '& .MuiSlider-thumb': {
                    width: '18px',
                    height: '18px',
                    border: '1px solid #0c2', // Бордер для ползунка
                    backgroundColor: 'white',
                },
                '& .MuiSlider-thumb:before': {
                    width: '6px',
                    height: '6px',
                    backgroundColor: '#0c2',
                    boxShadow: 'none'
                },
                '& .MuiSlider-rail': {
                    backgroundColor: '#8B8B8B',
                    borderRadius: '10px',
                    border: '1px solid #8B8B8B', // Бордер для шкалы ползунка
                },
                '& .MuiSlider-track': {
                    // display: 'white', // Скрыть трек ползунка
                    backgroundColor: '#0c2',
                    border: '1px solid #0c2', // Бордер для шкалы ползунка
                },
            }}
            {...props} // отдаём слайдеру пропсы если они есть (value например там внутри)
        />
    )
}

export default SuperRange