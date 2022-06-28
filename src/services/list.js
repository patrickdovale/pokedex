import axios from './index'

export default async function list() {
	return new Promise((resolve, reject) => {
		try {
			const response = axios.get()
			resolve(response)
		} catch (error) {
			reject(error)
		}
	})
}
