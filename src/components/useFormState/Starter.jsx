const AddToCartForm = ({ itemID, itemTitle }) => {
    return (
        <form className="bg-white border border-gray-300 rounded px-8 pt-6 pb-8 mb-4">
            <h2 className="text-xl font-bold mb-4">{itemTitle}</h2>
            <input type="hidden" name="itemID" value={itemID} />
            <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
                Add to Cart
            </button>
            <div className="mt-4 text-sm text-gray-700">Some message here</div>
        </form>
    );
};

export default AddToCartForm;
