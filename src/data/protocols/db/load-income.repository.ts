import { IncomeModel } from "@/domain/models";

export type loadIncomeRepository = {
  load(): Promise<loadIncomeRepository.Result>;
};

export namespace loadIncomeRepository {
  export type Result = IncomeModel[];
}
