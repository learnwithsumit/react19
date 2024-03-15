import { Suspense, use, useState } from "react";

const fetchMessage = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("🚀");
        }, 1000);
    });
};

const MessageOutput = ({ messagePromise }) => {
    const messageContent = use(messagePromise);

    return <p className="text-xl">Here is the message: {messageContent}</p>;
};

const MessageContainer = ({ messagePromise }) => {
    return (
        <Suspense
            fallback={<p className="text-xl">⌛Downloading message...</p>}
        >
            <MessageOutput messagePromise={messagePromise} />
        </Suspense>
    );
};

export default function Message() {
    const [show, setShow] = useState(false);
    const [messagePromise, setMessagePromise] = useState(null);

    const download = () => {
        setMessagePromise(fetchMessage());
        setShow(true);
    };

    return show ? (
        <MessageContainer messagePromise={messagePromise} />
    ) : (
        <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={download}
        >
            Download message
        </button>
    );
}
