import React from "react"

function Product ({label, img, title, price })
{
    return(
        <artical>
            <span>{label}</span>
            <img src={img} alt={title}/>
                <p>{title}</p>
                <h4>€{price},- </h4>
            </artical>

    )
}
export default Product;