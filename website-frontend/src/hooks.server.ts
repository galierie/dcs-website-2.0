import { dev } from '$app/environment';
import pino from 'pino';
import pretty, { type PrettyStream } from 'pino-pretty';

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
	logger.error({
		error
	}, 'error occurred with code')
}
