import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  private readonly AUTH_KEY: string = '2xwVwutjqsrERU7PPGMSW9jpjYSFZJJa';
  private readonly BASE_URL: string = 'http://localhost:3000/api/v1/'
  private readonly REQUEST_HEADERS: any = {
    'Content-Type': 'application/json'
  };

  public async get(url: string) {
		const response = await this.requestSender(url, 'GET');
		return this.responseParser(response);
	}

	public async post(url: string, parameters: any = {}) {
		const response = await this.requestSender(url, 'POST', parameters);
		return this.responseParser(response);
	}

	private requestSender(url: string, method: string, parameters: any = {}): Promise<any> {
		return new Promise((resolve, reject) => {
			fetch(this.requestUrl(url), this.requestParameters(parameters, method)).then(response => {
				resolve(response);
			})
				.catch(error => {
					console.error(error);
					reject(false);
				});
		});
	}

	private responseParser(response: any): any {
		if (response) {
			try {
				return response.json();
			} catch (error) {
				console.error(error);
				return;
			}
		} else {
			console.error('Empty response');
			return;
		}
	}

	private requestUrl(baseUrl: string): string {
		return this.BASE_URL + baseUrl;
	}

	private requestParameters(queryParameters: any, method: string): any {
		let requestParameters = {
			'headers': this.REQUEST_HEADERS,
			'method': method
		};

		if (method !== 'GET') {
			requestParameters['body'] = JSON.stringify({ 'auth_key': this.AUTH_KEY, ...queryParameters });
		}

		return requestParameters;
	}
}
