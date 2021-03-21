import { useState } from 'react';
import Item from './Item';

const DayItem = ({ day }) => {
    const [state, setState] = useState([]);

    const addItem = () => {
        if (state.length < 3) setState([...state, <Item />]);
    };

    return(
        <div>
            <div className="d-flex justify-content-between p-1" onClick={addItem}>
                <div>{day > 0 ? day : ''}</div>
                <div>00:00</div>
            </div>
            {state}
        </div>
    );
};

export default DayItem;