import { array, integer, number, object, partial, pipe, string, type InferOutput } from 'valibot';

export const EventsArea = partial(
	object({
		id: string('event area has no id'),
		name: string('event area has no name'),
		area: string('event area has no area'),
		order: pipe(number('event area has invalid order'), integer())
	})
);

export const EventsAreas = array(EventsArea);

export type EventsArea = InferOutput<typeof EventsArea>;
export type EventsAreas = InferOutput<typeof EventsAreas>;
