import React from 'react';
import { getFunName } from '../helpers';
import propTypes from 'prop-types';


class StorePicker extends React.Component {
    myInput = React.createRef();
    static propTypes = {
        history: propTypes.object
    };

    goToStore = event => {
        // 1) Stop the form from submitting
        event.preventDefault();
        // 2) get the text from the input
        const storeName = this.myInput.current.value;
        //3) Change the page to /store/whatever-they-entered
        this.props.history.push(`/store/${storeName}`)
    }
    render() {
        return(
        <form className = "store-selector" onSubmit = {this.goToStore}>
            <h2> Please Enter A Store </h2>
            <button onClick = { this.handleClick }>Click me!</button>  
            <input type = "text" ref={ this.myInput } required placeholder = "Store Name" defaultValue = { getFunName() } />
            <button type = "submit"> Visit Store </button>
        </form>
        )
    }
}

export default StorePicker;