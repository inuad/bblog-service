export type T_Header = string | string[] | null
type T_ResultSuccess = object | object[] | null
type T_ResultError = unknown
export type ServiceResponseResult = [T_ResultSuccess, T_ResultError]