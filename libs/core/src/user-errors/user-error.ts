import { ObjectType } from '@nestjs/graphql';
import { DisplayableError } from './displayable-error';

@ObjectType({ implements: () => DisplayableError })
export class UserError extends DisplayableError {}
