import { ObjectType } from '@nestjs/graphql';
import { Paginated } from '@acme/core';
import { Post } from '../post.model';

@ObjectType()
export class PostConnection extends Paginated(Post) {}
