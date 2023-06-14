import axios from 'axios';

export default function MakeRequest(props) {
	const { dataType } = props;
	const baseURL =
		'https://y-plants-api.bravedesert-7b0b5672.westus2.azurecontainerapps.io/plant/generation/test-2023';

	const axiosConfigObj = {
		method: 'GET',
		baseURL,
		params: {
			dataType,
		},
		headers: {
			'Access-Control-Allow-Origin': '*',
			'Access-Control-Allow-Headers': '*',
			'Access-Control-Allow-Credentials': 'true',
			'Content-Type': 'application/json',
			Authorization: 'Bearer HeDKyixt_yMhR4TOvL4HNktaOxga-mgLkUcF',
		},
	};
	return axios(axiosConfigObj)
		.then((requestResult) => ({
			body: requestResult.data,
			success: true,
		}))
		.catch((requestError) => {
			return {
				success: false,
				message:
					requestError.response.data.detail[0].msg ||
					'Ocorreu um erro inesperado no sistema. Tente novamente e se o problema persistir, entre em contato com o administrador do sistema.',
			};
		});
}
