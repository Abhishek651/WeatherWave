
import FormControl from '@mui/material/FormControl';
import NativeSelect from '@mui/material/NativeSelect';


export default function DaysSelect({handleDays,days}){
    return(
        <FormControl size="small" sx={{ minWidth: 80 }}>
            <NativeSelect
                value={days}
                // Without the arrow function wrapper, onChange={handleDays} would pass the whole event object e directly into setDays,
                //  which caused your error — React tried to render the event object instead of a number.
                // e — the browser gives you an event object (like a report of what just happened)
                // e.target — the <select> element that was changed
                // e.target.value — the value of the selected option, but it's always a string (e.g. "5")
                // Number(...) — converts "5" → 5 (number), because setDays in App.jsx expects a number
                // handleDays(5) — calls setDays(5), updating the state
                onChange={(e) => handleDays(Number(e.target.value))}
                inputProps={{ name: 'days' }}
                sx={{ color: '#8b5cf6', fontSize: '0.85rem' }}
            >
                <option value={5}>5 Days</option>
                <option value={8}>8 Days</option>
                <option value={10}>10 Days</option>
                <option value={12}>12 Days</option>
            </NativeSelect>
        </FormControl>
    )
}