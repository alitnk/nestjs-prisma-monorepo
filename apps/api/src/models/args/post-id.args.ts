import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class PostIdArgs {
  @IsNotEmpty()
  @Field(() => String)
  postId: string;
}
