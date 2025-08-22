import { cleanHtmlDark } from '$lib/models-helpers';
import {
	array,
	object,
	string,
	nullable,
	type InferOutput,
	pipe,
	isoDate,
	union,
	lazy,
	partial,
	number
} from 'valibot';
import { StudentsOrganizationsDirectusFiles } from './junctions/students_organizations_directus_files';

export const StudentsOrganization = partial(
	object({
		name: string('student organization has no name'),
		slug: string('student organization has no slug'),
		description: nullable(string('student organization has no description')),
		mission: nullable(string('student organization has no mission')),
		email: nullable(string('student organization has no email')),
		founding_date: nullable(pipe(string('student organization has no founding date'), isoDate())),
		logo: nullable(string('student organization has no logo')),
		website: nullable(string('student organization has no website')),
		location: nullable(string('student organization has no location')),
		flexible_content: pipe(string('student organization has no flexible content'), cleanHtmlDark),
		background_images: nullable(
			union([array(number('student organization has no background images')), lazy(() => StudentsOrganizationsDirectusFiles)])
		)
	})
);

export const StudentsOrganizations = array(StudentsOrganization);

export type StudentsOrganization = InferOutput<typeof StudentsOrganization>;
export type StudentsOrganizations = InferOutput<typeof StudentsOrganizations>;
