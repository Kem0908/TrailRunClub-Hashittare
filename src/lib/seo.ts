export function pageMeta(title: string, description: string) {
  const full = `${title}｜トレランクラブ【走ったれ】`;
  return [
    { title: full },
    { name: "description", content: description },
    { property: "og:title", content: full },
    { property: "og:description", content: description },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
    { name: "twitter:title", content: full },
    { name: "twitter:description", content: description },
  ];
}
