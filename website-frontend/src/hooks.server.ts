import { dev } from '$app/environment';

import { isDirectusError } from '@directus/errors';
import { FetchError } from 'ofetch';
import pino from 'pino';
import pretty, { type PrettyStream } from 'pino-pretty';
import { getDotPath, isValiError, ValiError } from 'valibot';

let stream: PrettyStream | undefined;

if (dev) {
	stream = pretty();
}

const logger = pino({
	transport: stream ? { target: 'pino-pretty', options: { colorize: true } } : undefined
});

export async function handle({ event, resolve }) {
	const { route: { id: route }, getClientAddress } = event;

	logger.info({
		route,
		clientAddress: getClientAddress()
	}, 'handling request')

	return await resolve(event, {
		filterSerializedResponseHeaders: (key) => {
			return key.toLowerCase() === 'content-type';
		}
	});
}

export async function handleError({ error }) {
	if (isValiError(error)) {
		const valibotErrorPaths = error.issues
			.map(issue => getDotPath(issue))
			.filter(path => path !== null);
		logger.error({
			valibotErrorPaths,
			cause: error.cause,
			message: error.message,
		}, `valibot returned an error: ${error.name}`)
	} else if (isDirectusError(error)) {
		logger.error({
			error: error.message,
			code: error.code,
			metadata: error.meta,
			response: error.response
		}, 'directus returned an error')
	} else if ((error as any) instanceof FetchError) {
		const oFetchError: FetchError = error;
		logger.error({
			status: oFetchError.status,
			message: oFetchError.message,
			response: oFetchError.response,
		}, 'ofetch returned an error')
	} else {
		logger.error({
			error
		}, 'error occurred with code')
	}
}
