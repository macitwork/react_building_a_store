import React from 'react'

export function Button({buttonType, isDisable, clickHandler, children}) {

    return (
        <button>
            type={buttonType} isDisabled={false} onClick={clickHandler} {children}
        </button>
)
}