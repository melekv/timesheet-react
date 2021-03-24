import DayItem from './DayItem';

const Timesheet = ({ sideBarProp }) => {
    const items = [];

    // actual date
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth();

    // 0 day of the next month = days in actual month
    const dayInMonth = new Date(year, month + 1, 0).getDate();

    let weekdayFirstDatOfMonth = new Date(year, month, 1).getDay();
    weekdayFirstDatOfMonth = weekdayFirstDatOfMonth === 0 ? 7 : weekdayFirstDatOfMonth;

    for (let i = -weekdayFirstDatOfMonth + 2; i <= dayInMonth; i++) {
        items.push(<DayItem key={i} day={i} currentDay={date.getDate() === i} sideBarProp={sideBarProp} />);
    }

    return(
        <main className="container timesheet">
            <div>Poniedziałek</div>
            <div>Wtorek</div>
            <div>Środa</div>
            <div>Czwartek</div>
            <div>Piątek</div>
            <div>Sobota</div>
            <div>Niedziela</div>
            {items}
        </main>
    );
};

export default Timesheet;