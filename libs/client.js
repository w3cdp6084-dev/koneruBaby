import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'konerugallery',
  apiKey: process.env.API_KEY,
});