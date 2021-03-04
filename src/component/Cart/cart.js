import React from 'react';
import '../../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import cardImage from '../../image/banner.png'
import sideBanner from '../../image/cart-banner.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAlignJustify,faChevronCircleRight,faCheckCircle,faFunnelDollar,faArrowAltCircleRight} from '@fortawesome/free-solid-svg-icons'


const cart = (props) => {
    const add = props.cart;
    const amount = add.reduce((totalAmount, amount) => totalAmount + amount.salary, 0);

    return (
        <div className="card border-success mb-3 sticky-top">

            <img class="card-img-top" src={cardImage} alt="Card image cap"></img>

            <div class="card-header">
                <h4><FontAwesomeIcon icon={faAlignJustify} /> Total selected player: <span className="text-success">{add.length}</span></h4>
            </div>

            <div class="card-body text-success">
                {add.map(plr=><li className="list-group-item">
                    <FontAwesomeIcon icon={faCheckCircle} /> Name: {plr.name} <br/>
                    <FontAwesomeIcon className="text-dark" icon={faChevronCircleRight} /> Salary: ${plr.salary}
                </li>)}

                <h4><FontAwesomeIcon icon={faFunnelDollar} /> Total Budget: ${amount.toFixed(2)}</h4>
                
                <button className="btn btn-success btn-block">
                    <h5>Review Your Team <FontAwesomeIcon icon={faArrowAltCircleRight} /></h5>
                </button>
            </div>
            <img src={sideBanner} alt=""/>

        </div>
    );
};

export default cart;
