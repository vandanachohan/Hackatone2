 import { createClient } from 'next-sanity'

 import { apiVersion, dataset, projectId } from '../env'
 export const client = createClient({
   projectId,
  dataset,
  apiVersion,
  useCdn: false, // Set to false if statically generating pages, using ISR or tag-based revalidation
  token:"skSmHhemslgTa4AxlmlMJGSkpBt6BVuseGOIspKRRqCzN4Fm0TJcXi9oModhF6d2bP1CYOYqWeeMHjbjTrIuZCn13yEyN9qcsLWcrhUjhvjWJ4yNZZNvt3kEvSTK1eoe1Zq4riqnFJ1iTVUbBs7NgeGAUus5tTBLLG4RvDyCrNBUYySPdhxG"

})
