import { useEffect, useRef } from "react";

function Input({ ref }) {
    useEffect(() => {
        ref.current.focus();
    }, [ref]);

    return (
        <div>
            <input
                ref={ref}
                className="rounded border border-gray-500 py-2 px-3 w-1/2"
                type="text"
            />
        </div>
    );
}

export default function InputContainer() {
    const ref = useRef(null);

    return <Input ref={ref} />;
}
