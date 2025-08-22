import {
	array,
	isoDate,
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
import { AcademicsCategory } from './academics_categories';
import { cleanHtml } from '$lib/models-helpers';
import { AcademicsProgramsCourses } from './junctions/academics_programs_courses';

export const AcademicsProgram = partial(
	object({
		title: string('academic program has no title'),
		slug: string('academic program has no slug'),
		category: nullable(union([string(), lazy(() => AcademicsCategory)])),
		flexible_content: pipe(string('academic program has invalid content'), cleanHtml),
		curriculum_table: nullable(union([array(number()), lazy(() => AcademicsProgramsCourses)])),
		curriculum_last_updated: pipe(
			string('academic program last updated has invalid date'),
			isoDate()
		),
		background_image: nullable(string('academic program has no background image'))
	})
);

export const AcademicsPrograms = array(AcademicsProgram);

export type AcademicsProgram = InferOutput<typeof AcademicsProgram>;
export type AcademicsPrograms = InferOutput<typeof AcademicsPrograms>;
