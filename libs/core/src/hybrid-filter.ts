import { ArgumentsHost } from '@nestjs/common';
import { BaseExceptionFilter } from '@nestjs/core';
import { GqlExceptionFilter } from '@nestjs/graphql';
import { UserError } from './user-errors/user-error';

export type CatchResult = { userErrors: UserError[] } | void;

export abstract class HybridExceptionFilter<TInput = any>
  extends BaseExceptionFilter<TInput>
  implements GqlExceptionFilter<TInput, CatchResult>
{
  abstract catch(exception: TInput, host: ArgumentsHost): CatchResult;
  /**
   *
   * @param host
   * @returns returns a boolean
   */
  isHttp(host: ArgumentsHost) {
    return host.getType() === 'http';
  }

  /**
   *
   * @param host
   * @returns returns a boolean
   */
  isQraphql(host: ArgumentsHost) {
    return (host.getType() as string) === 'graphql';
  }

  /**
   *
   * @param exception
   * @returns replace line breaks with empty string
   */
  cleanUpException(exception: Error): string {
    return exception.message.replace(/\n/g, '');
  }
}
