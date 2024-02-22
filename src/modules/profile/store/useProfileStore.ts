import { mountStoreDevtool } from 'simple-zustand-devtools'
import { create } from 'zustand'
import { IUser } from '../api/interface'

interface IState {
	isLoading: boolean
	setIsLoading: (loading: boolean) => void
	openDialogVerify: boolean
	setOpenDialogVerify: (open: boolean) => void
	openDialogSuccess: boolean
	setOpenDialogSuccess: (open: boolean) => void
	userData: IUser
	setUserData: (data: IUser) => void
	isVerifySuccess: boolean
	setIsVerifySuccess: (success: boolean) => void
}

export const useProfileStore = create<IState>((set: any) => ({
	isLoading: false,
	setIsLoading: (loading: boolean) => set({ isLoading: loading }),
	openDialogVerify: false,
	setOpenDialogVerify: (open: boolean) => set({ openDialogVerify: open }),
	openDialogSuccess: false,
	setOpenDialogSuccess: (open: boolean) => set({ openDialogSuccess: open }),
	userData: {} as IUser,
	setUserData: (data: IUser) => set({ userData: data }),
	isVerifySuccess: false,
	setIsVerifySuccess: (success: boolean) => set({ isVerifySuccess: success })
}))

mountStoreDevtool('useProfileStore', useProfileStore)
