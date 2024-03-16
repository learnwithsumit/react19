import { useOptimistic, useRef, useState } from "react";
import { useFormStatus } from "react-dom";

const Button = () => {
    const { pending } = useFormStatus();

    return (
        <button
            disabled={pending}
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
        >
            {pending ? "Sending..." : "Send"}
        </button>
    );
};
const MessageForm = ({ sendMessage, addOptimisticMessage }) => {
    const formRef = useRef();

    const formAction = async (formData) => {
        addOptimisticMessage(formData.get("message"));
        await sendMessage(formData);
        formRef.current.reset();
    };

    return (
        <form
            action={formAction}
            ref={formRef}
            className="flex items-center mb-5"
        >
            <input
                type="text"
                name="message"
                placeholder="Hello!"
                className="border border-gray-300 rounded py-1 px-2 mr-2 focus:outline-none focus:border-blue-500"
            />
            <Button />
        </form>
    );
};

const Thread = ({ messages, sendMessage }) => {
    const [optimisticMessages, addOptimisticMessage] = useOptimistic(
        messages,
        (state, newMessage) => [
            ...state,
            {
                text: newMessage,
                sending: true,
            },
        ]
    );

    return (
        <div>
            <MessageForm
                sendMessage={sendMessage}
                addOptimisticMessage={addOptimisticMessage}
            />
            {optimisticMessages.map((message, index) => (
                <div key={index} className="flex items-center">
                    <span>{message.text}</span>
                    {message.sending && (
                        <small className="ml-2 animate-spin">⌛</small>
                    )}
                </div>
            ))}
        </div>
    );
};

const deliverMessage = async (message) => {
    await new Promise((resolve) => {
        setTimeout(() => {
            resolve();
        }, 2000);
    });
    return message;
};

export default function MessageBox() {
    const [messages, setMessages] = useState([]);

    const sendMessage = async (formData) => {
        const sentMessage = await deliverMessage(formData.get("message"));

        setMessages((prevMessages) => [
            ...prevMessages,
            {
                text: sentMessage,
            },
        ]);
    };

    return <Thread messages={messages} sendMessage={sendMessage} />;
}
