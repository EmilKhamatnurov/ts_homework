import _ from 'lodash';

export const normalizeData = <T extends { id: string; }>(unnormalizedData: T[]) => {
	const postIds = unnormalizedData?.map(post => post.id);
	const groupedPosts = _.groupBy(unnormalizedData, 'id');

	return {
		byId: groupedPosts,
		allIds: postIds,
	};
};