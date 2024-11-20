

export type IResponseType<T> =
    { statusCode: number, success: boolean, message: string, data: T }
