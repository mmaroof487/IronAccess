export interface IApiResponse<T> {
	data: T;
	message: string;
}
export interface IApiError {
	response: {
		data: {
			meta: {
				error_message: string;
			};
		};
	};
}
