export interface IBodyVerifyThaiNationID {
	thaiNationalIdNumber: string
	thaiNationalIdCardPhoto: File
}

export interface IUser {
	id: number
	email: string
	phoneNumber: string
	firstName: string
	lastName: string
	profilePicture: string
	myPropertyCount: number
	about: string
	currency: string
	thaiNationalIdNumber: string
	passportNo: string
	coverPhoto: string
	selfiePhoto: string
	passportPhoto: string
	thaiNationalIdCardPhoto: string
	isVerifyEmail: boolean
	isVerifyPhoneNumber: boolean
	isVerifyThaiNationalId: boolean
	isVerify: boolean
	verifyThaiNationalIdStatus: string
	createdAt: string
	updatedAt: string
	lineId: string
	whatsAppId: string
	weChatId: string
	status: string
	userTypes: string[]
	privacyPolicies: PrivacyPolicy[]
	language: Language
}

interface PrivacyPolicy {
	id: number
	title: string
	data: string
	isAccept: boolean
	UserPrivacyPolicy: UserPrivacyPolicy
}

interface UserPrivacyPolicy {
	id: number
	userId: number
	privacyPolicyId: number
	isAccept: boolean
	createdAt: string
	updatedAt: string
	privacy_policy_id: number
	user_id: number
}

interface Language {
	id: number
	languageName: string
	languageCode: string
}
