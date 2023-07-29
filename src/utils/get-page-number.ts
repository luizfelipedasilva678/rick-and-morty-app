export const getPageNumber = (searchParams: SearchParams) => {
  return 'page' in searchParams ? Number(searchParams.page) : 1;
};
