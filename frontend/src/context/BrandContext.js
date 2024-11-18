import { createContext, useContext, useState, useEffect } from 'react';
import { create_brand_service, get_brand_service, update_brand_service, delete_brand_service } from "../services/brand";
import { useAuthenticateContext } from './AuthenticateContex';

const BrandContext = createContext({});

const BrandProvider = (props) => {
	const { authUser } = useAuthenticateContext();
	const [brands, setBrand] = useState([]);

	useEffect(() => {
		getBrand();
	}, [authUser]);

	const createBrand = async (data) => {
		try {
			const result = await create_brand_service(data);
			if (result.status === 201) {
				await getBrand();
			}
		} catch (error) {
			console.log("error--in post method--", error);
			return error
		}
	}

	const getBrand = async () => {
		try {
			const result = await get_brand_service();
			if (result.status === 200) {
				setBrand(result.data);
			}
		} catch (error) {
			console.log("error--in get method--", error);
			return error
		}
	}

	const updateBrand = async (id, data) => {
		try {
			const result = await update_brand_service(id, data);
			if (result.status === 200) {
				await getBrand()
			}
		} catch (error) {
			return error
		}
	}

	const deleteBrand = async (id) => {
		try {
			const result = await delete_brand_service(id);
			if (result.status === 200) {
				await getBrand();
			}
		} catch (error) {
			console.log("error--in delete method--", error);
			return error
		}
	}

	const values = { brands, updateBrand, createBrand, deleteBrand };
	return (
		<BrandContext.Provider value={values}>
			{props.children}
		</BrandContext.Provider>
	)
}

const useBrandContext = () => { return useContext(BrandContext) }
export { BrandProvider, useBrandContext }