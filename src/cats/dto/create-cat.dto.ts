import { Field, ID } from '@nestjs/graphql';

export class CatType {
  @Field(() => ID)
  public id: string;

  @Field()
  public readonly name: string;

  @Field()
  public readonly  age: number;

  @Field()
  public readonly breed: string;
}