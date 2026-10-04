export function pageHead(title: string, description: string, path: string) {
  const fullTitle = `${title} — CampusFlow`;
  const url = `https://campusflow.example${path}`;
  return { meta: [
    { title: fullTitle }, { name: 'description', content: description },
    { property: 'og:title', content: fullTitle }, { property: 'og:description', content: description },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ], links: [{ rel: 'canonical', href: url }] };
}
