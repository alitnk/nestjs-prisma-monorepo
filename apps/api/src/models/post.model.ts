import { Field, ObjectType } from '@nestjs/graphql';
import { User } from './user.model';
import { BaseModel } from './base.model';

@ObjectType()
export class Post extends BaseModel {
  @Field(() => String)
  title: string;

  @Field(() => String)
  content: string;

  @Field(() => Boolean)
  published: boolean;

  author: User;
}
