import { Field, InterfaceType } from '@nestjs/graphql';

@InterfaceType({})
export class DisplayableError {
  @Field(() => [String], { nullable: true })
  field: string[];

  @Field(() => String)
  message: string;
}
