import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatsService } from './cats.service';
import { CatType } from './dto/create-cat.dto';
import { CatInput } from './inputs/cat.input';

@Resolver()
export class CatsResolver {

  constructor(
    private readonly catService: CatsService,
  ) {
  }

  @Query(() => [CatType])
  async cats() {
    return this.catService.findAll();
  }

  @Mutation(() => CatType)
  async createCat(@Args('input') input: CatInput) {
    return this.catService.create(input)

  }

}
