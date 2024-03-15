import { IService, ServiceDummyData } from "@/data";

export default async function sitemap() {
  const baseUrl = "https://stoma-elite.vercel.app/";

  const posts: IService[] = ServiceDummyData;
  const postUrls = posts.map((post) => ({
    url: `${baseUrl}/services/${post.id}`,
    lastModified: new Date(),
  }));

  return [
    { url: baseUrl, lastModified: new Date() },
    { url: `${baseUrl}/services`, lastModified: new Date() },

    ...postUrls,
  ];
}
