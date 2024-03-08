import axios from 'axios';

export default async function searchPixa(searchQuery, page = 1) {
  const BASE_URL = 'https://pixabay.com/api/';
  const API_KEY = '36683727-e929c153efd1b0d2cc7c4f38c';
  const QUERY = `${searchQuery}`;
  const IMAGE_TYPE = 'photo';
  const ORIENTATION = 'horizontal';
  const SEFESEARCH = 'true';
  const PAGE = `${page}`;
  const PER_PAGE = 15;
  const link = `${BASE_URL}?key=${API_KEY}&q=${QUERY}&image_type=${IMAGE_TYPE}&orientastion=${ORIENTATION}&seferearch=${SEFESEARCH}&page=${PAGE}&per_page=${PER_PAGE}`;

  try {
    const { data } = await axios.get(link);
    const isNextPage = PAGE * PER_PAGE <= data.totalHits ? true : false;

    if (data.hits.length === 0) {
      throw 'Sorry, there are no images matching your search query. Please try again!';
    }

    return [data.hits, isNextPage];
  } catch (error) {
    throw new Error(error);
  }
}
