import { array, lazy, nullable, object, partial, string, union, type InferOutput } from 'valibot';
import { EventsRelated } from './junctions/events_related';
import { EventsTagsCategory } from './events_tags_categories';

export const EventsTag = partial(
	object({
		name: string('event tag has no name'),
		tag_category: nullable(
			union([string('event tag has no category'), lazy(() => EventsTagsCategory)])
		),
		related_events: nullable(
			union([array(string('event tag has no related events')), lazy(() => EventsRelated)])
		)
	})
);

export const EventsTags = array(EventsTag);

export type EventsTag = InferOutput<typeof EventsTag>;
export type EventsTags = InferOutput<typeof EventsTags>;
