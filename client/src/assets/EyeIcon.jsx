import React from 'react'

function EyeIcon({
    color = "#8B8B8B"
}) {
    return (
        <svg width="24" height="18" viewBox="0 0 24 18" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M12 17C3.99996 17 0.799988 9 0.799988 9C0.799988 9 3.99996 1 12 1C20 1 23.2 9 23.2 9C23.2 9 20 17 12 17Z" stroke={color} stroke-width="1.5" stroke-linejoin="round" />
            <path d="M8.79999 9C8.79999 10.7673 10.2327 12.2 12 12.2C13.7673 12.2 15.2 10.7673 15.2 9C15.2 7.23269 13.7673 5.8 12 5.8C10.2327 5.8 8.79999 7.23269 8.79999 9Z" stroke={color} stroke-width="1.5" stroke-linejoin="round" />
        </svg>

    )
}

export default EyeIcon;
