import axiosInstance from '../../../common/utils/axiosInstance'
import { endpoint } from '../../../common/utils/endpoint'
import { IBodyVerifyThaiNationID, IUser } from './interface'

export async function verifyThaiNationID(data: IBodyVerifyThaiNationID) {
	const formdata = new FormData()
	formdata.append('thaiNationalIdNumber', data.thaiNationalIdNumber)
	formdata.append(
		'thaiNationalIdCardPhoto',
		data.thaiNationalIdCardPhoto,
		'file'
	)

	return await axiosInstance.put(endpoint.user, formdata, {
		headers: {
			'Content-Type': 'multipart/form-data'
		}
	})
}

export async function getUser(): Promise<IUser> {
	const res = await axiosInstance.get(endpoint.user)
	return res.data.user
}
