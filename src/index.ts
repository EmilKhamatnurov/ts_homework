import { posts } from './app/data/postsData';
import { normalizeData } from './app/func/normalizeData';

const normalizePostData = normalizeData(posts);
console.log("Нормализованные данные", normalizePostData);
