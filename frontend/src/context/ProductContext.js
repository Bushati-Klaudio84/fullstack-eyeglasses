import { createContext, useContext, useState, useEffect } from 'react';
import { create_product_service, get_products_service, update_product_service, delete_product_service } from "../services/products";
import { useAuthenticateContext } from './AuthenticateContex';

const ProductContext = createContext({});

const ProductProvider = (props) => {
	const { authUser } = useAuthenticateContext();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		getProducts();
	}, [authUser]);

	const createProduct = async (data) => {
		try {
			const result = await create_product_service(data);
			if (result.status === 201) {
				await getProducts();
			}
		} catch (error) {
			console.log("error--in post method--", error);
			return error
		}
	}

	const getProducts = async () => {
		try {
			const result = await get_products_service();
			if (result.status === 200) {
				setProducts(result.data);
			}
		} catch (error) {
			console.log("error--in get method--", error);
			return error
		}
	}

	const updateProduct = async (id, data) => {
		try {
			const result = await update_product_service(id, data);
			if (result.status === 200) {
				await getProducts()
			}
		} catch (error) {
			console.log("error--in update--", error);
			return error
		}
	}

	const deleteProduct = async (id) => {
		try {
			const result = await delete_product_service(id);
			if (result.status === 200) {
				await getProducts();
			}
		} catch (error) {
			console.log("error--in delete method--", error);
			return error
		}
	}

	const values = { products, createProduct, updateProduct, deleteProduct };
	return (
		<ProductContext.Provider value={values}>
			{props.children}
		</ProductContext.Provider>
	)
}

const useProductContext = () => { return useContext(ProductContext) }
export { ProductProvider, useProductContext }