export const HOMEPAGE_ARTICLE_LIMIT = 20;
export const ARTICLES_PER_PAGE = 20;

export function categoryToSlug(category: string): string {
  return category.toLowerCase().replace(/\s+/g, "-");
}

export function getPostUrl(post: { slug: string; data: { category: string } }): string {
  const categorySlug = categoryToSlug(post.data.category);
  return `/${categorySlug}/${post.slug}`;
}