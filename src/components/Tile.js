import React from 'react';

function Tile({ img, altText, title, children}) {
    return (

<section className="Tile">
        <img src={img} alt={altText} />
          <h2>{title}</h2>
         <p>{children}</p>

</section>
    )
}
export default Tile


