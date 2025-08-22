import { array, object, partial, string, type InferOutput } from 'valibot';

export const DirectusUser = partial(
	object({
		id: string('directus user has no id'),
		first_name: string('directus user has no first name'),
		last_name: string('directus user has no last name')
	})
);

export const DirectusUsers = array(DirectusUser);

export type DirectusUser = InferOutput<typeof DirectusUser>;
export type DirectusUsers = InferOutput<typeof DirectusUsers>;
