export default function ThemeCard() {
    return (
        <div className="flex flex-col gap-6">
            <div className="rounded bg-gray-50 p-8 text-neutral-900 border border-gray-100">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Suscipit dolores illo, reprehenderit voluptate recusandae
                perspiciatis quam, pariatur commodi possimus officiis quas vitae
                voluptatum. Magni aliquam eligendi itaque possimus sit dolorem.
            </div>
            <div>
                <button className="rounded p-3 bg-blue-600 text-white">
                    Change Theme
                </button>
            </div>
        </div>
    );
}
