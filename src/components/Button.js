import React from 'react'

export function Button({ type, isDisable, handleClick, children}) {

    return (
        <button>
            type={type} isDisabled={false} onClick={handleClick} {children}
        </button>
)
}