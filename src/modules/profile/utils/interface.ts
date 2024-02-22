export interface IFormEditPTZ {
	no?: number
	id?: number
	pan: number
	tilt: number
	zoom: number
}

export interface ICurrentPosition {
	pan: number
	tilt: number
	zoom: number
}

export interface IMicrophoneListResponse {
	name: string
	ptz: IPTZ
}

interface IPTZ {
	ID: string
	MicrophoneID: string
	MicrophoneType: string
	PositionP: number
	PositionT: number
	PositionZ: number
	PositionI: number
	CreatedAt: string
	UpdatedAt: string
	DeletedAt: string
}


export interface IMicrophoneStatus {
	id: string
	status: string
}

export interface INatsIoMicphoneEvent {
	id: string
	name: string
	ptz: IPTZ
	status: string
}

export type InputsSetting = {
	microphone_ip: string
	microphone_port: number
	microphone_username: string
	microphone_password: string
	ptz_ip: string
	ptz_port: number
	ptz_username: string
	ptz_password: string
}