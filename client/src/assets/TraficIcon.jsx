import React from 'react'

function TraficIcon({
    color = "#8B8B8B"
}) {
    return (
        <svg width="26" height="25" viewBox="0 0 26 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 23.4H25M3.4 12.2V23.4M22.6 12.2V23.4M2.6 1H23.4M6.6 12.2V17H19.4V12.2M3.4 4.2H22.6L24.2 12.2H1.8L3.4 4.2Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default TraficIcon;
