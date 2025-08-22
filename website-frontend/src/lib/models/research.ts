import { nullable, object, partial, string, type InferOutput } from 'valibot';

export const Research = partial(
	object({
		background_image: nullable(string('research page has no background image'))
	})
);

export type Research = InferOutput<typeof Research>;
