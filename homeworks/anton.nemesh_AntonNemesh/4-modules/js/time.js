function getDaysInMonth(date) {
    return 32 - new Date(date.getFullYear(), date.getMonth(), 32).getDate();
}

function getFridaysOfMonth(date) {
    const inputDate = new Date(date);
    const fridays = [];
    const beginningOfTheMonth = new Date(inputDate.getFullYear(), inputDate.getMonth(), 1);
    const daysInMonth = getDaysInMonth(beginningOfTheMonth);
    for (let i = 1; i <= daysInMonth; i++) {
        let currentDate = beginningOfTheMonth.getDate();
        if (beginningOfTheMonth.getDay() === 5) {
            fridays.push(beginningOfTheMonth.getDate());
        }
        currentDate += 1;
        beginningOfTheMonth.setDate(currentDate);
    }
    return fridays;
}

function isMonthLong(date) {
    const beginningOfTheMonth = new Date(date);
    return getDaysInMonth(beginningOfTheMonth) === 31;
}

function fullWeeksNumberInMonth(date) {
    const inputDate = new Date(date);
    const beginningOfTheMonth = new Date(inputDate.getFullYear(), inputDate.getMonth(), 1);
    const daysInMonth = getDaysInMonth(beginningOfTheMonth);
    const currentMonth = beginningOfTheMonth.getMonth();
    let fullWeeks = 0;
    for (let i = 1; i <= daysInMonth; i++) {
        let currentDate = beginningOfTheMonth.getDate();
        if (beginningOfTheMonth.getDay() === 1) {
            const mondaysDate = beginningOfTheMonth;
            mondaysDate.setDate(mondaysDate.getDate() + 6);
            if (mondaysDate.getMonth() === currentMonth) {
                fullWeeks += 1;
            }
        }
        currentDate += 1;
        beginningOfTheMonth.setDate(currentDate);
    }
    return fullWeeks;
}

function shortestWeekDaysNumber(date) {
    const inputDate = new Date(date);
    const beginningOfTheMonth = new Date(inputDate.getFullYear(), inputDate.getMonth(), 1);
    const daysInMonth = getDaysInMonth(beginningOfTheMonth);
    const weeks = [];
    weeks[1] = [];
    weeks[2] = [];
    weeks[3] = [];
    weeks[4] = [];
    weeks[5] = [];
    weeks[6] = [];
    const result = [];
    let numbWeek = 1;
    for (let i = 1; i <= daysInMonth; i++) {
        let currentDate = beginningOfTheMonth.getDate();
        if (beginningOfTheMonth.getDay() === 1) {
            numbWeek += 1;
        }
        weeks[numbWeek].push(beginningOfTheMonth.getDay());
        currentDate += 1;
        beginningOfTheMonth.setDate(currentDate);
    }
    weeks.forEach((value) => {
        if (value.length !== 0) {
            result.push(value.length);
        }
    });
    return Math.min(...result);
}

export {
    getFridaysOfMonth,
    isMonthLong,
    fullWeeksNumberInMonth,
    shortestWeekDaysNumber,
};
