import { type SchemaTypeDefinition } from 'sanity';

import post from './schemas/post';
import comment from './schemas/comment';
import postBy from './schemas/postBy';
import user from './schemas/user';
export const schema: { types: SchemaTypeDefinition[] } = {
  types: [post, comment, postBy, user],
}
