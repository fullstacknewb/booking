import Flatpickr from 'react-flatpickr';
import "flatpickr/dist/themes/material_green.css";
import { useState } from 'react';


export default function Calendar() {
    const [date, setDate] = useState(new Date());

    return(
        <div>
            <Flatpickr
                data-enable-time
                altFormat='F j, Y h:i K'
                value={date}
                onChange={date => setDate(date)}
                options={{
                    altInput: true,
                    altFormat: 'F j, Y h:i K',
                }}
            />
        </div>
    )
}