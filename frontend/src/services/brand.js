import axios from "axios";

const url = "http://localhost:3000/api/brand";

const create_brand_service = async (data) => {
	const result = await axios.post(`${url}/create`, data);
	return result;
}

const get_brand_service = async () => {
	const result = await axios.get(`${url}/all`);
	return result;
}

const update_brand_service = async (id, data) => {
	const result = await axios.put(`${url}/update/${id}`, data);
	return result;
}

const delete_brand_service = async (id) => {
	const result = await axios.delete(`${url}/delete/${id}`);
	return result;
}

export { create_brand_service, get_brand_service, update_brand_service, delete_brand_service }