import {
	array,
	lazy,
	nullable,
	number,
	object,
	partial,
	string,
	union,
	type InferOutput
} from 'valibot';
import { PeopleRelated } from './junctions/people_related';

export const Level = partial(
	object({
		name: string('people level has no name'),
		related_people: nullable(union([array(number()), lazy(() => PeopleRelated)]))
	})
);

export const Levels = array(Level);

export type Level = InferOutput<typeof Level>;
export type Levels = InferOutput<typeof Levels>;
