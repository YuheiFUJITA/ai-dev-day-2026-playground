export const usePageSeo = (title: string, description: string) => {
  useHead({
    title,
    meta: [{ name: "description", content: description }],
  });
};
