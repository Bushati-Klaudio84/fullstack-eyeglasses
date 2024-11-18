import axios from "axios";
const url = "http://localhost:3000/api/product";

const create_product_service = async (data) => {
	
	const product = {
		title: data.title,
		description: data.description,
		price: parseInt(data.price),
        brand_id: parseInt(data.brand_id),
        category_id: parseInt(data.category_id),
		is_active: data.is_active,
		image :data.image
	}
	
	const result = await axios.post(`${url}/create`, product, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	});
	return result;
}

const get_products_service = async () => {
	const result = await axios.get(`${url}/all`);
	return result;
}

const update_product_service = async (id, data) => {

	const product = {
		title: data.title,
		description: data.description,
		price: parseInt(data.price),
        brand_id: parseInt(data.brand_id),
        category_id: parseInt(data.category_id),
		is_active: data.is_active,
		image :data.image
	}
	
	const result = await axios.put(`${url}/update/${id}`, product, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	});
	return result;
}

const delete_product_service = async (id) => {
	console.log("id", id);
	const result = await axios.delete(`${url}/delete/${id}`);
	return result;
}

export { get_products_service, create_product_service, update_product_service, delete_product_service }