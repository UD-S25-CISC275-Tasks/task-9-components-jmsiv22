import React, { useState } from "react";
import { Button } from "react-bootstrap";

const nextAlphabetical: Record<string, string> = {
    "🎅": "🎆", // Christmas
    "🎆": "🎃", // Fourth of July
    "🎃": "🎊", // Halloween
    "🎊": "🦃", // New Years
    "🦃": "🎅" // Thanksgiving
};

const nextChronological: Record<string, string> = {
    "🎊": "🎆", // New Years
    "🎆": "🎃", // Fourth of July
    "🎃": "🦃", // Halloween
    "🦃": "🎅", // Thanksgiving
    "🎅": "🎊" // Christmas
};

export function CycleHoliday(): React.JSX.Element {
    const [holiday, setHoliday] = useState<string>("🎅");

    function cycleHolidayA(): void {
        setHoliday(nextAlphabetical[holiday]);
    }

    function cycleHolidayY(): void {
        setHoliday(nextChronological[holiday]);
    }

    return (
        <div>
            <p>Cycle Holiday</p>
            <Button onClick={cycleHolidayA}>Advance by Alphabet</Button>
            <Button onClick={cycleHolidayY}>Advance by Year</Button>
            <p>Holiday: {holiday}</p>
        </div>
    );
}
