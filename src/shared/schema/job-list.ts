import { gql } from '@apollo/client';

export const GET_JOB_LIST = gql`
	query GetJobs($paginationOptions: PaginationOptionsArgs!) {
		getJobList(paginationOptions: $paginationOptions) {
			jobs {
				id
				title
				company {
					id
					name
				}
				jobCategories {
					id
					name
				}
				location {
					countryObject {
						country
						id
						rusTrans
					}
				}
				openUntil
				isUN
			}
		}
	}
`;
