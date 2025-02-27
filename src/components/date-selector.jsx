import React, { useState } from 'react';

export default function DateSelector() {
  const [selectedDate, setSelectedDate] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(7); // July (0-indexed)
  const [currentYear, setCurrentYear] = useState(2024);

  const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  const daysOfWeek = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];

  const getDaysInMonth = (year, month) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (year, month) => {
    return new Date(year, month, 1).getDay() || 7; // Convert Sunday (0) to 7
  };

  const renderCalendar = () => {
    const daysInMonth = getDaysInMonth(currentYear, currentMonth);
    const firstDay = getFirstDayOfMonth(currentYear, currentMonth);
    const days = [];

    // Các ô trống trước ngày đầu tiên của tháng
    for (let i = 1; i < firstDay; i++) {
      days.push(<div key={`empty-${i}`} className="h-8 w-8 flex items-center justify-center text-[#d9d9d9]"></div>);
    }

    // Các ngày trong tháng
    for (let i = 1; i <= daysInMonth; i++) {
      const isSelected = selectedDate === i;
      const isAvailable = i % 3 !== 0; // Demo: một số ngày không khả dụng

      days.push(
        <button
          key={i}
          disabled={!isAvailable}
          className={`h-8 w-8 rounded-full flex items-center justify-center text-sm
            ${isSelected ? 'bg-[#effffb] text-[#00966d]' : ''}
            ${!isAvailable && !isSelected ? 'text-[#d9d9d9]' : ''}
            ${isAvailable && !isSelected ? 'hover:bg-[#fff2f2] hover:text-[#c3937c]' : ''}
          `}
          onClick={() => setSelectedDate(i)}>
          {i}
        </button>
      );
    }

    return days;
  };

  return (
    <div className="border border-[#eaeaea] rounded-lg p-4">
      <div className="flex justify-between items-center mb-4">
        <div className="flex space-x-4">
          <button
            className="text-sm font-medium px-2 py-1 rounded-md bg-[#f9f9f9]"
            onClick={() => {
              if (currentMonth === 0) {
                setCurrentMonth(11);
                setCurrentYear(currentYear - 1);
              } else {
                setCurrentMonth(currentMonth - 1);
              }
            }}>
            July 2024
          </button>
          <button
            className="text-sm font-medium px-2 py-1 rounded-md"
            onClick={() => {
              if (currentMonth === 11) {
                setCurrentMonth(0);
                setCurrentYear(currentYear + 1);
              } else {
                setCurrentMonth(currentMonth + 1);
              }
            }}>
            August 2024
          </button>
          <button className="text-sm font-medium px-2 py-1 rounded-md">September 2024</button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map(day => (
          <div key={day} className="h-8 w-8 flex items-center justify-center text-xs text-[#868686]">
            {day}
          </div>
        ))}
        {renderCalendar()}
      </div>
    </div>
  );
}
