import sanityClient from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = sanityClient({
  projectId: "au4zkocu",
  dataset: "production",
  apiVersion: "2022-10-26",
  useCdn: true,
  token:
    "skLxdKJKiy8U5tSfBF0Gj364S6HRc3noEXhZGXJZs1lNRAKwmSZkNJ4N7huMa4qOtgw8hDJxCOFZxwdzb71iJBgrEkdcXj7GJqyMXLzIdMMIvJRxrcbb5OThJIOBFE2r1x2gJwmHYw0Je7yHJpy50DSAZh05qvci5dzSoLQPNefkkRhQEezO",
});

const builder = imageUrlBuilder(client);
export const urlFor = (source) => builder.image(source);
