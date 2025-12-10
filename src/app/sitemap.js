export default function sitemap() {
  return [
    {
      url: 'https://www.talakadu.com',
      lastModified: new Date(),
      changeFrequency: 'yearly',
      priority: 1,
    },
    {
      url: 'https://www.talakadu.com/history',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.8,
    },
        {
      url: 'https://www.talakadu.com/temples',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
    url: 'https://www.talakadu.com/destinations',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
        {
    url: 'https://www.talakadu.com/gallery',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
        {
    url: 'https://www.talakadu.com/reach-there',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    {
       url: 'https://www.talakadu.com/blog',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
]
}

