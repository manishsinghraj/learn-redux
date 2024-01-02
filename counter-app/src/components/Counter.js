import React, { useState } from 'react';
import { increment, decrement, reset } from '../redux/counter/counterActions';
import { connect } from 'react-redux';

const Counter = (props) => {
    const [intervalId, setIntervalId] = useState(null);

    const startInterval = () => {
        if (intervalId === null) {
            const id = setInterval(() => {
                props.increment();
            }, 500);
            setIntervalId(id);
        }
    };

    const stopInterval = () => {
        if (intervalId) {
            clearInterval(intervalId);
            setIntervalId(null);
        }
    };

    const resetCounter = () => {
        stopInterval(); // Stop the interval when resetting the counter
        props.reset();
    };


    return (
        <>
            <div className="container">
                {props.count}
                <div>
                    <button className="increment" onClick={props.increment}>Increment</button>
                    <button className="decrement" onClick={props.decrement}>Decrement</button>
                </div>
                <div>
                    {!intervalId ? <button className="start" onClick={startInterval}>Start</button> :
                        <button className="stop" onClick={stopInterval}>Stop</button>}
                    <button className="reset" onClick={resetCounter}>Reset</button>
                </div>
            </div>
        </>
    );
};

const mapStateToProps = (state) => {
    return {
        count: state.count,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        increment: () => dispatch(increment()),
        decrement: () => dispatch(decrement()),
        reset: () => dispatch(reset()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
