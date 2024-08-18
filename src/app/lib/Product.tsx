export const getAllProducts = async () => {
    const data = await fetch('https://dummyjson.com/products');
    const jsonData = await data.json();
    return jsonData;
}

export const getSingleProduct = async ({ id }: { id: number }) => {
    const data = await fetch(`https://dummyjson.com/products/${id}`);
    const jsonData = await data?.json();
    return jsonData;
}