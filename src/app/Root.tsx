import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { InView } from 'react-intersection-observer';

import { GET_JOB_LIST } from '@/shared/schema/job-list';
import { GetJobListResponseInterface } from '@/shared/types/job.types';
import { Title } from '@/shared/ui/Title/Title';

import { JobList } from '@/components/JobList/JobList';

import './styles/index.css';

export const Root = () => {
	const [limit, setLimit] = useState(10);

	const { data, error, loading, fetchMore } = useQuery<GetJobListResponseInterface>(GET_JOB_LIST, {
		variables: {
			paginationOptions: { skip: 0, limit },
		},
	});

	const onChangeScroll = async (inView: boolean) => {
		if (inView) {
			await fetchMore({
				variables: {
					paginationOptions: {
						skip: 0,
						limit: limit + 10,
					},
				},
			}).then(() => {
				setLimit(prevState => prevState + 10);
			});
		}
	};

	const isNotEmpty = data && data.getJobList.jobs;

	return (
		<div className="container">
			<Title tag="h3">Вакансии</Title>

			{error && <p>{error.message}</p>}
			{loading && <p>Загрузка...</p>}

			{data && isNotEmpty && <JobList jobList={data.getJobList.jobs} />}

			{data && isNotEmpty && <InView onChange={onChangeScroll} />}
		</div>
	);
};
