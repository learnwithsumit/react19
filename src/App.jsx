import { useState } from "react";
import Posts from "./components/action-example-1/Posts";
import Counter from "./components/auto-memo/Counter";
import InputContainer from "./components/forwardRef/Starter";
import Joke from "./components/use-hook-1/Joke";
import Message from "./components/use-hook-2/Message";
import Theme from "./components/use-hook-3/Theme";
import AddToCart from "./components/useFormState/AddToCart";
import OptimisticMessage from "./components/useOptimistic/Message";

export default function App() {
    const [example, setExample] = useState("");

    const handleChange = (e) => {
        setExample(e.target.value);
    };

    // choose which example to render
    let content;

    if (example === "use-hook-1") {
        content = <Joke />;
    }
    if (example === "use-hook-2") {
        content = <Message />;
    }
    if (example === "use-hook-3") {
        content = <Theme />;
    }
    if (example === "action-1") {
        content = <Posts />;
    }
    if (example === "useFormState") {
        content = (
            <>
                <AddToCart itemID="1" title="Product 1" />
                <AddToCart itemID="2" title="Product 2" />
            </>
        );
    }
    if (example === "useOptimistic") {
        content = <OptimisticMessage />;
    }
    if (example === "automemo") {
        content = <Counter />;
    }
    if (example === "forwardRef") {
        content = <InputContainer />;
    }

    return (
        <div className="p-12">
            <h1 className="font-bold text-3xl">
                What&apos;s coming in React 19
            </h1>

            <div className="mt-5">
                I have created some examples to explore the new features. You
                can explore the examples below:
            </div>

            <div className="mt-10">
                <select onChange={handleChange}>
                    <option value="">Select example</option>
                    <option value="use-hook-1">
                        &quot;use&quot; Hook to fetch data - Example 1
                    </option>
                    <option value="use-hook-2">
                        &quot;use&quot; Hook with a promise - Example 2
                    </option>
                    <option value="use-hook-3">
                        &quot;use&quot; Hook with context - Example 3
                    </option>
                    <option value="action-1">
                        &quot;Action&quot; - Example
                    </option>
                    <option value="useFormState">
                        &quot;useFormState&quot; - Example
                    </option>
                    <option value="useOptimistic">
                        &quot;useOptimistic&quot; - Example
                    </option>
                    <option value="automemo">
                        &quot;Auto Memoization&quot; - Example
                    </option>
                    <option value="forwardRef">
                        &quot;forwardRef&quot; - Example
                    </option>
                </select>
            </div>

            <div className="mt-10">{content}</div>
        </div>
    );
}
