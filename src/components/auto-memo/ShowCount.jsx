export default function ShowCount({ title, count }) {
    console.log(`rendering ${title}....`);

    return (
        <div className="bg-emerald-50 p-5 rounded border border-gray-300">
            {title} is {count}
        </div>
    );
}
