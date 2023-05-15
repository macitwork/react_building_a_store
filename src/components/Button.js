import React from 'react'

export function Button({ type, isDisable, clickHandler, children}) {

    return (
        <button>
            type={type} isDisabled={false} onClick={clickHandler} {children}
        </button>
)
}