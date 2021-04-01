import { useState } from 'react';
import Item from './Item';

const DayItem = ({ day, currentDay, sideBarProp, theDate }) => {
    const [state, setState] = useState(theDate.map((item, index) => <Item key={index} sideBarProp={sideBarProp} />));

    const addItem = () => {
        // max 3 activities per day
        if (state.length < 3) setState([...state, <Item key={state.length} sideBarProp={sideBarProp} />]);
    };

    return(
        <div>
            <div className="d-flex justify-content-between" onClick={addItem}>
                <div className={currentDay ? 'day-item-today' : ''}>{day > 0 ? day : ''}</div>
                <div className="p-1"></div>
            </div>
            {state}
        </div>
    );
};

export default DayItem;