import {
	array,
	object,
	string,
	nullable,
	type InferOutput,
	lazy,
	union,
	partial,
	number
} from 'valibot';
import { PeopleLaboratories } from './junctions/people_laboratories';
import { PeoplePublications } from './junctions/people_publications';
import { PeopleRelated } from './junctions/people_related';

export const EducationalAttainment = partial(
	object({
		degree: string('educational attainment has no degree'),
		status: string('educational attainment has no status'),
		institution: string('educational attainment has no institution'),
		start_date: nullable(string('educational attainment has no start date')),
		end_date: nullable(string('educational attainment has no end date'))
	})
);

const ExternalAffiliation = partial(
	object({
		role: string('external affiliation has no role'),
		affiliation: string('external affiliation has no affiliation')
	})
);

export const Person = partial(
	object({
		id: string('person has no id'),
		first_name: string('person has no first name'),
		last_name: string('person has no last name'),
		position: string('person has no position'),
		email: nullable(string('person has no email')),
		telephone: nullable(string('person has no telephone')),
		website: nullable(string('person has no website')),
		location: nullable(string('person has no location')),
		category: string('person has no category'),
		level: nullable(union([array(number()), lazy(() => PeopleRelated)])),
		profile_image: nullable(string('person has no profile image')),
		background_image: nullable(string('person has no background image')),
		interests: nullable(array(string('person has no interests'))),
		awards: nullable(string('person has no awards')),
		educational_attainment: nullable(array(EducationalAttainment)),
		username: string('person has no username'),
		affiliations: nullable(union([array(string()), lazy(() => PeopleLaboratories)])),
		external_affiliations: nullable(array(ExternalAffiliation)),
		publications: nullable(union([array(number()), lazy(() => PeoplePublications)]))
	})
);

export const People = array(Person);

export type EducationalAttainment = InferOutput<typeof EducationalAttainment>;
export type Person = InferOutput<typeof Person>;
export type People = InferOutput<typeof People>;
