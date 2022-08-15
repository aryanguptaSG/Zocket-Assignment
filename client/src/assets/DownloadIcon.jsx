import React from 'react'

function DownloadIcon({
    color = "#8B8B8B"
}) {
    return (
        <svg width="25" height="28" viewBox="0 0 25 28" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M7 19.8571H12.1429M2.71429 25H16.4286C17.3753 25 18.1429 24.2325 18.1429 23.2857V2.71429C18.1429 1.76751 17.3753 1 16.4286 1H2.71429C1.76751 1 1 1.76751 1 2.71429V23.2857C1 24.2325 1.76751 25 2.71429 25Z" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            <path d="M9.93333 14.9L7 11.9666M9.93333 14.9L12.8667 11.9666M9.93333 14.9L9.93333 6" stroke={color} stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
        </svg>

    )
}

export default DownloadIcon;
