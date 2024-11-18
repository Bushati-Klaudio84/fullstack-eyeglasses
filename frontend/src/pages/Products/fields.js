const fields = [
    {
        type: "text",
        name: "title",
        label: "Title",
        placeholder: "Insert Brand..."
    },
    {
        type: "text",
        name: "description",
        label: "Description",
        placeholder: "Insert description..."
    },
    {
        type: "number",
        name: "price",
        label: "Price",
        placeholder: "Insert price..."
    },
    {
        type: "options",
        name: "category_id",
        label: "Category",
    }
    ,
    {
        type: "options",
        name: "brand_id",
        label: "Brand",
    }
    ,
    {
        type: "checkbox",
        name: "is_active",
        label: "Product availability",
    }
    ,
    {
        type: "file",
        name: "image",
        label: "Upload Image",
    }
];

export { fields };