import { nullable, object, partial, string, type InferOutput } from 'valibot';

export const EventsOverview = partial(
	object({
		background_image: nullable(string('event overview has no background image'))
	})
);

export type EventsOverview = InferOutput<typeof EventsOverview>;
