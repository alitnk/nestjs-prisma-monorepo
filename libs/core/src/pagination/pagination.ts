import { Type } from '@nestjs/common';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { PageInfo } from './page-info.model';

interface IEdgeType<TItem> {
  cursor: string;
  node: TItem;
}

export interface IPaginatedType<TItem> {
  edges: IEdgeType<TItem>[];
  // nodes: T[];
  totalCount: number;
  pageInfo: PageInfo;
}

export function Paginated<TItem>(
  classRef: Type<TItem>,
): Type<IPaginatedType<TItem>> {
  @ObjectType(`${classRef.name}Edge`)
  abstract class EdgeType {
    @Field(() => String)
    cursor: string;

    @Field(() => classRef)
    node: TItem;
  }

  @ObjectType({ isAbstract: true })
  abstract class PaginatedType implements IPaginatedType<TItem> {
    @Field(() => [EdgeType], { nullable: true })
    edges: EdgeType[];

    @Field(() => [classRef], { nullable: true })
    // nodes: TItem[];
    
    @Field(() => Int)
    totalCount: number;

    @Field(() => PageInfo)
    pageInfo: PageInfo;
  }
  return PaginatedType as Type<IPaginatedType<TItem>>;
}
