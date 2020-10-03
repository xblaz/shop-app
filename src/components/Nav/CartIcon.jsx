import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import iconoCarrito from '../../utils/images/icono.svg';
import { CartContext } from '../../context/CartContext';

const CartIcon = (props) => {
    const [cart] = useContext(CartContext);
    return (
        <div id="iconoCart" className="iconoCart">
            <Link to="/cart"><img src={iconoCarrito} alt="CartIcon" /></Link>
            <span class="badge badge-success">{cart.length}</span>
        </div>

    )
}
export default CartIcon;