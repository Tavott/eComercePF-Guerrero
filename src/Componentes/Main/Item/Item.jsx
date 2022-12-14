import React from 'react';
import { Link } from 'react-router-dom';

const Item = ({ producto }) => {

    return (
        <div className="item-card">
            <Link to={`/detail/${producto.id}`}>
            <img src={producto.imageID} width="250px" alt={producto.title} />
            </Link>
            <article className="info">
                <h2>{producto.title}</h2>
                <div className="info-price">
                    <h3> Precio de lista</h3>
                    <h5>${producto.price}.-</h5>
                </div>
                <div>
                
            </div>
                <Link className="btn-detalle" to={`/detail/${producto.id}`}>
                    Mas info+.
                </Link>
            </article>
        </div>
    );
};

export default Item;
