/**
* This file was @generated using pocketbase-typegen
*/

export enum Collections {
	Task = "task",
	Users = "users",
}

// Alias types for improved usability
export type IsoDateString = string
export type RecordIdString = string
export type HTMLString = string

// System fields
export type BaseSystemFields<T = never> = {
	id: RecordIdString
	created: IsoDateString
	updated: IsoDateString
	collectionId: string
	collectionName: Collections
	expand?: T
}

export type AuthSystemFields<T = never> = {
	email: string
	emailVisibility: boolean
	username: string
	verified: boolean
} & BaseSystemFields<T>

// Record types for each collection

export enum TaskStatusOptions {
	"pending" = "pending",
	"active" = "active",
	"done" = "done",
}
export type TaskRecord = {
	title: string
	status: TaskStatusOptions
}

export type UsersRecord = {
	name?: string
	avatar?: string
}

// Response types include system fields and match responses from the PocketBase API
export type TaskResponse = TaskRecord & BaseSystemFields
export type UsersResponse = UsersRecord & AuthSystemFields

export type CollectionRecords = {
	task: TaskRecord
	users: UsersRecord
}