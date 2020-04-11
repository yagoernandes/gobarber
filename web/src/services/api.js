import axios from 'axios'

const api = axios.create({
	baseURL: 'http://localhost:3333',
})

if (process.env.NODE_ENV === 'development') {
	api.interceptors.request.use((request) => {
		console.log('Starting Request', request)
		return request
	})

	api.interceptors.response.use((response) => {
		console.log('Response:', response)
		return response
	})
}

export default api
