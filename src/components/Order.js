import React from 'react';
import PropTypes from 'prop-types';
import { formatPrice } from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';


class Order extends React.Component {
    static PropTypes = {
        fishes: PropTypes.object,
        order: PropTypes.object,
        removeFromOrder: PropTypes.func,
    }

    renderOrder = key => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable =fish && fish.status === 'available';
            const transitionOptions = {
                classNames: "order",
                key: key,
                timeout:  { enter: 500, exit: 500 }
            }
            // Make sure the fish is loaded before we continue
            if(!fish) return null;

            if(!isAvailable){
                return(
                <CSSTransition {...transitionOptions}>
                <li key = {key}> Sorry {fish ? fish.name : 'fish'} is no longer available</li>)
                </CSSTransition>)
            }
        return (

        <CSSTransition {...transitionOptions}>
        <li key = {key}>
            <span>
            <TransitionGroup component="span" className="count">
                <CSSTransition classNames="count" key={count} timeout={{ enter: 500, exit: 500 }}>
                    <span>{count}</span>
                </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick = {() => this.props.removeFromOrder(key) }>&times;</button>
            </span>
         </li>
         </CSSTransition>

         );
    }

    render() {
        const ordersIds = Object.keys(this.props.order);
        const total = ordersIds.reduce((prevTotal, key) => {
            const fish = this.props.fishes[key];
            const count = this.props.order[key];
            const isAvailable = fish && fish.status === "available";
            // make sure the fish is loaded before we continue
            if(!fish) return null;

            if(isAvailable) {
                return prevTotal + count * fish.price;
            }
            return prevTotal;
        }, 0);

        return (
            
            <div className = "order-wrap">
                <h2>Your Order</h2>
                <TransitionGroup component="ul" className='order'>
                {ordersIds.map(this.renderOrder)}
                </TransitionGroup>
                <div className='total'>
                Total:
                    <strong>{formatPrice(total)}</strong>
                </div>
            </div>  
        );
    }
}

export default Order;