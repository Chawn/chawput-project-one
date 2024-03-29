import axios from 'axios'
import toast from 'react-hot-toast'

const API_URL = import.meta.env.VITE_API_URL as string
const TOKEN = import.meta.env.VITE_TOKEN as string

// Create an instance of Axios with default headers
/* set connection timeout 10 second */
const axiosInstance = axios.create({
	baseURL: API_URL, // Set your API base URL
	headers: {
		'Content-Type': 'application/json',
		Authorization: `Bearer ${TOKEN}` // Set your default authorization token
	},
	timeout: 5000
})

// Add an interceptor to handle 401 responses
axiosInstance.interceptors.response.use(
	(response) => {
		return response
	},
	(error) => {
		if (error.response && error.response.status === 401) {
			toast.error('401 Unauthorized')
		}

		if (error.response && error.response.status === 500) {
			toast.error('500 Internal Server Error')
		}
		return Promise.reject(error)
	}
)

export default axiosInstance
