import { useCallback, useState } from "react";
import Button from "./Button";
import ShowCount from "./ShowCount";

export default function Counter() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);

    const incrementByOne = () => {
        setCount1((prevCount) => prevCount + 1);
    };

    const incrementByFive = () => {
        setCount2((prevCount) => prevCount + 5);
    };

    const isEvenOrOdd = useCallback(() => {
        let i = 0;
        while (i < 1000000000) i += 1; // costly operation
        return count1 % 2 === 0;
    }, [count1]);

    return (
        <div className="flex flex-col gap-6">
            <div className="flex gap-5 items-center">
                <ShowCount count={count1} title="Counter 1" />
                <span>{isEvenOrOdd ? "Even" : "Odd"}</span>
                <Button handleClick={incrementByOne}>Increment by one</Button>
            </div>

            <div className="flex gap-5 items-center">
                <ShowCount count={count2} title="Counter 2" />
                <Button handleClick={incrementByFive}>Increment by five</Button>
            </div>
        </div>
    );
}
