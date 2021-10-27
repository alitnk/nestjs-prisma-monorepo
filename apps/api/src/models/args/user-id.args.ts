import { ArgsType, Field } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@ArgsType()
export class UserIdArgs {
  @IsNotEmpty()
  @Field(() => String)
  userId: string;
}
