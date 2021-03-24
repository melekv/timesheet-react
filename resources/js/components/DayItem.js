import { useState } from 'react';
import Item from './Item';

const DayItem = ({ day, currentDay, sideBarProp }) => {
    const [state, setState] = useState([]);

    const addItem = () => {
        // max 3 activities per day
        if (state.length < 3) setState([...state, <Item key={state.length} sideBarProp={sideBarProp} />]);
    };

    return(
        <div>
            <div className="d-flex justify-content-between" onClick={addItem}>
                <div className={currentDay ? 'day-item-today' : ''}>{day > 0 ? day : ''}</div>
                <div className="p-1">{state.length * 8}:00</div>
            </div>
            {state}
        </div>
    );
};

export default DayItem;