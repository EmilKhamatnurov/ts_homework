import _ from 'lodash';
import { IPost } from '../data/postsData';

export const normalizeData = (unnormalizedData: IPost[]): {} => {
	const postIds = unnormalizedData?.map(post => post.id);
	const groupedPosts = _.groupBy(unnormalizedData, 'id');

	return {
		byId: groupedPosts,
		allIds: postIds,
	};
};