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
import { LaboratoriesDirectusFiles } from './junctions/laboratories_directus_files';
import { PeopleLaboratories } from './junctions/people_laboratories';
import { EventsLaboratories } from './junctions/events_laboratories';

export const Laboratory = partial(
	object({
		id: string('laboratory has no id'),
		name: string('laboratory has no name'),
		slug: string('laboratory has no slug'),
		brief_description: nullable(string('laboratory has no brief description')),
		description: nullable(string('laboratory has no description')),
		logo: nullable(string('laboratory has no logo')),
		location: nullable(string('laboratory has no location')),
		contact_email: nullable(string('laboratory has no contact email')),
		background_images: nullable(union([array(number()), lazy(() => LaboratoriesDirectusFiles)])),
		affiliates: nullable(union([array(string()), lazy(() => PeopleLaboratories)])),
		events: nullable(union([array(string()), lazy(() => EventsLaboratories)]))
	})
);

export const Laboratories = array(Laboratory);

export type Laboratory = InferOutput<typeof Laboratory>;
export type Laboratories = InferOutput<typeof Laboratories>;
