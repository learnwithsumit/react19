export default function Button({ handleClick, children }) {
    console.log(`rendering button ${children}`);

    return (
        <p>
            <button
                className="rounded p-3 bg-blue-600 text-white"
                type="button"
                onClick={handleClick}
            >
                {children}
            </button>
        </p>
    );
}
