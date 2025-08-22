import { array, nullable, object, partial, string, type InferOutput } from 'valibot';

export const EventsTagsCategory = partial(
	object({
		name: string('event tag category has no name'),
		description: nullable(string('event tag category has no description'))
	})
);

export const EventsTagsCategories = array(EventsTagsCategory);

export type EventsTagsCategory = InferOutput<typeof EventsTagsCategory>;
export type EventsTagsCategories = InferOutput<typeof EventsTagsCategories>;
