import { nullable, object, partial, string, type InferOutput } from 'valibot';

export const NewsOverview = partial(
	object({
		background_image: nullable(string('news overview has no background image'))
	})
);

export type NewsOverview = InferOutput<typeof NewsOverview>;
