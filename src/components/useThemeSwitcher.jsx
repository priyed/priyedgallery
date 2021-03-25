import React, { useEffect, useState } from 'react'

export default function useThemeSwitcher() {
    const [mode, setMode] = useState(() => localStorage.getItem("mode"));

    useEffect(() => {
        if(mode === "dark") {
            document.body.classList.add("dark-mode");
            localStorage.setItem("mode", "dark");
        } else{
            document.body.classList.remove("dark-mode");
            localStorage.setItem("mode", "light");
        }
    })
    return (
       <div className="mb-8 mr-8 cursor-pointer theme-changer mt-14" onClick={() => setMode(mode => mode === "dark" ? "light": "dark")}>
           <small>{mode === "dark" ? "Light": "Dark"} Mode</small>
       </div>
    )
}