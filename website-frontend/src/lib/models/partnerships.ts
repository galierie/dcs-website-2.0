import { array, nullable, object, partial, string, type InferOutput } from 'valibot';

export const Partnership = partial(
	object({
		name: string('partnership has no name'),
		display_image: nullable(string('partnership has no display image')),
		email: nullable(string('partnership has no email')),
		website: nullable(string('partnership has no website')),
		description: nullable(string('partnership has no description'))
	})
);

export const Partnerships = array(Partnership);

export type Partnership = InferOutput<typeof Partnership>;
export type Partnerships = InferOutput<typeof Partnerships>;
