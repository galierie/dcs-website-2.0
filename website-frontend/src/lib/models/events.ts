import { cleanHtml } from '$lib/models-helpers';
import {
	array,
	custom,
	isoTimestamp,
	lazy,
	nullable,
	number,
	object,
	partial,
	pipe,
	string,
	union,
	type InferOutput
} from 'valibot';
import { EventsRelated } from './junctions/events_related';
import { EventsArea } from './events_areas';

export const Event = partial(
	object({
		id: number('event has no id'),
		slug: string('event has no slug'),
		date_created: pipe(string('event has no date created'), isoTimestamp()),
		event_headline: string('event has no headline'),
		hero_image: nullable(string('event has no hero image')),
		event_content: nullable(pipe(string('event has no content'), cleanHtml)),
		start_date: custom<'datetime'>((input) => typeof input === 'string'),
		end_date: nullable(custom<'datetime'>((input) => typeof input === 'string')),
		event_area: nullable(union([string('event has no area'), lazy(() => EventsArea)])),
		display_location: nullable(string('event has no display location')),
		event_tags: nullable(union([array(string('event has no tags')), lazy(() => EventsRelated)]))
	})
);

export const Events = array(Event);

export type Event = InferOutput<typeof Event>;
export type Events = InferOutput<typeof Events>;
