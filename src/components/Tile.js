import React from 'react';

function Tile({img, imageAlt, title, children}) {

    return (
        <section>
            img = {img} alt={imageAlt}
            <h2>{title}</h2>
            <p>{children}</p>
        </section>
    )
}

export default Tile


