import './App.css';
import {useDispatch, useSelector} from "react-redux";
import {useState} from "react";
import {addCustomerAction, asyncCustomerAction, removeCustomerAction} from './store/customerReducer';
import {fetchCustomers} from "./asyncActions/customer";
import {decrementFunction, incrementFunction} from "./redux-saga/workers/worker";
import {asyncAddCash1, asyncGetCash1} from "./store/cashReducer";

function App() {

    const [value, setValue] = useState(0);

    const dispatch = useDispatch();

    const increaseValue = () => {
        dispatch({type: 'ADD_CASH', payload: value})
    }

    const decreaseValue = () => {
        dispatch({type: 'GET_CASH', payload: value})
    }

    const actualValue = useSelector(state => state.cash.cash);
    const customers = useSelector(state => state.customers.customers)

    const removeCustomer = id => {
      dispatch(removeCustomerAction(id));
    }

    const addCustomer = name => {
        dispatch(addCustomerAction({
            name,
            id: Date.now()
        }))
    }

    return (
        <div className="App">
            <div className={'API'}>
                <div className={'incr'}>
                    <button onClick={() => increaseValue()}>Increase</button>
                </div>
                <div className={'decr'}>
                    <button onClick={() => decreaseValue()}>Decrease</button>
                </div>
                <div className={'incrAsync'}>
                    <button onClick={() => dispatch(asyncAddCash1())}>IncreaseAsync</button>
                </div>
                <div className={'decrAsync'}>
                    <button onClick={() => dispatch(asyncGetCash1())}>DecreaseAsync</button>
                </div>
                <div className={'input'}>
                    <input value={value} placeholder={'Value...'} onChange={e => setValue(Number(e.target.value))}/>
                </div>
                <div className={'value'}>
                    {actualValue}
                </div>
            </div>
            <div className={'customers'}>
                <div style={{cursor: 'pointer'}} onClick={() => dispatch(fetchCustomers())}>Get customers</div>
                <div style={{cursor: 'pointer'}} onClick={() => dispatch(asyncCustomerAction())}>Get customers async</div>
                <div style={{cursor: 'pointer'}} onClick={() => addCustomer(prompt())}>Add customer</div>
                {customers.length > 0 ?
                        customers.map(customer => <div style={{display: 'flex'}}>
                            {customer.name } <div style={{cursor: 'pointer', color: 'red', marginLeft: 30}} onClick={() => removeCustomer(customer.id)}>x</div>
                        </div>)
                    :
                    <div>No customer *(</div>
                }
            </div>
        </div>
    );
}

export default App;
