import { useState } from 'react'
import toast from 'react-hot-toast'
import { IBodyVerifyThaiNationID } from '../api/interface'
import { getUser, verifyThaiNationID } from '../api/rest'
import { useProfileStore } from '../store/useProfileStore'

export default function useProfileController() {
	const [isLoadingVerify, setIsLoadingVerify] = useState<boolean>(false)
	const {
		setOpenDialogVerify,
		setOpenDialogSuccess,
		userData,
		setUserData,
		setIsVerifySuccess
	} = useProfileStore()
	async function fetchUser() {
		try {
			const res = await getUser()
			setUserData(res)
			return userData
		} catch (error) {
			console.error(error)
			toast.error('Network Error ')
		}
	}

	async function handleVerifyID(data: IBodyVerifyThaiNationID) {
		setIsLoadingVerify(true)
		try {
			await verifyThaiNationID(data)
			setIsVerifySuccess(true)
			setUserData({
				...userData,
				thaiNationalIdNumber: data.thaiNationalIdNumber
			})
			setTimeout(() => {
				setOpenDialogVerify(false)
				setOpenDialogSuccess(true)
			}, 1000)
		} catch (error) {
			setIsVerifySuccess(false)
			console.error(error)
			toast.error('Network Error')
		} finally {
			setTimeout(() => {
				setIsLoadingVerify(false)
			}, 900)
		}
	}

	return {
		fetchUser,
		handleVerifyID,
		isLoadingVerify,
		setIsLoadingVerify
	}
}
