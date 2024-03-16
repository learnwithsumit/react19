const MessageForm = () => {
    return (
        <form className="flex items-center mb-5">
            <input
                type="text"
                name="message"
                placeholder="Hello!"
                className="border border-gray-300 rounded py-1 px-2 mr-2 focus:outline-none focus:border-blue-500"
            />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-1 px-4 rounded focus:outline-none focus:shadow-outline disabled:bg-gray-400"
            >
                Send
            </button>
        </form>
    );
};

const Thread = () => {
    return (
        <div>
            <MessageForm />
            <div className="flex items-center">
                <span>Message text</span>
                <small className="ml-2 animate-spin">⌛</small>
            </div>
        </div>
    );
};

export default function MessageBox() {
    return <Thread />;
}
