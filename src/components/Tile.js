import React from 'react';

function Tile({ img, altText, title, children}) {
    return (

<section className="tile">
        <img src={img} alt={altText} />
          <h2>{title}</h2>
         <p>{children}</p>
       <button onClick={onClick}>View</button>
//</section>
    );
}
export default Tile


