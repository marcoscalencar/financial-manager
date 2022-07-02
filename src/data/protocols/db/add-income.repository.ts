import { AddIncome } from "@/domain/useCases";

export type AddIncomeRepository = {
  add(params: AddIncomeRepository.Params): Promise<void>;
};

export namespace AddIncomeRepository {
  export type Params = AddIncome.Params;
}
