import { InputType, Field, Int, ID } from "@nestjs/graphql";

@InputType()
export class CatInput {
  @Field(() => ID)
  id: string;

  @Field()
  public readonly name: string;

  @Field(() => Int)
  public readonly  age: number;

  @Field()
  public readonly breed: string;
}