import { createDirectus, rest, staticToken } from '@directus/sdk';
import { STATIC_ACCESS_TOKEN } from '$env/static/private';
import { PUBLIC_APIURL } from '$env/static/public';
import { type Schema } from './models/schema';
import type { Fetch } from './fetch';
import { ofetch } from 'ofetch';

function getDirectusInstance(fetch: Fetch | null) {
	const directus = createDirectus<Schema>(PUBLIC_APIURL, { globals: { fetch: ofetch } })
		.with(staticToken(STATIC_ACCESS_TOKEN))
		.with(rest());
	return directus;
}

export default getDirectusInstance;
