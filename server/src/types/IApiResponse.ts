type IApiResponse<T> = {
    code: number;
    response: {
        success: boolean;
        response: T | Array<IApiError> | IApiError;
    };
};

type IApiError = {
    error: string;
    message: string;
};

// https://rossbulat.medium.com/advanced-typescript-by-example-api-service-manager-7ea591f5eba8
export default IApiResponse;
