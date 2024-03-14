function Input() {
    return (
        <div>
            <input
                className="rounded border border-gray-500 py-2 px-3 w-1/2"
                type="text"
            />
        </div>
    );
}

export default function InputContainer() {
    return <Input />;
}
