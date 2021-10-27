import { ArgsType, Field } from '@nestjs/graphql';

@ArgsType()
export class PaginationArgs {
  @Field(() => Number, { nullable: true })
  skip?: number;

  @Field(() => String, { nullable: true })
  after?: string;

  @Field(() => String, { nullable: true })
  before?: string;

  @Field(() => Number, { nullable: true })
  first?: number;

  @Field(() => Number, { nullable: true })
  last?: number;
}
