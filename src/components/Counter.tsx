import { useState } from "react";
import classes from "./Counter.module.scss";

export const Counter = () => {
    const [state, setState] = useState(0);

    const increment = () => {
        setState((prev) => prev + 1);
    };
    return (
        <div>
            <p>Вы нажали {state} раз</p>
            <button className={classes.btn} onClick={increment}>
                Increment
            </button>
        </div>
    );
};
