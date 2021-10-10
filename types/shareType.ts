export type T_Header = string | string[] | null
type T_ResultSuccess = object | null
type T_ResultError = unknown | null
export type ServiceResponseResult = [T_ResultSuccess, T_ResultError]

//object extends object  ? object : Error extends Error ? Error : never