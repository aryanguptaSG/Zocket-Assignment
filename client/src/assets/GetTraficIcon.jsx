import React from 'react'

function GetTraficIcon({
    color = "#8B8B8B"
}) {
    return (
        <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M2.52405 7.51117L1.23431 7.45263M7.91717 2.58322L7.97574 1.29269M3.98952 3.69813L2.75836 2.34906M2.28974 12.6733L3.63806 11.4413M11.7275 4.04936L13.0758 2.81737" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M6.26788 6.26807L14.019 24.3541L16.6027 16.6029L24.3539 14.0192L6.26788 6.26807Z" stroke={color} stroke-width="1.5" stroke-linejoin="round" />
        </svg>

    )
}

export default GetTraficIcon;
