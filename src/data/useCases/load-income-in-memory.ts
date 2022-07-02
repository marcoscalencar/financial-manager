import { LoadIncome } from "@/domain/useCases/load-income";
import { left, right } from "@/shared/utils";
import { loadIncomeRepository } from "../protocols/db/load-income.repository";

export class LoadIncomeInMemory implements LoadIncome {
  constructor(private loadIncomeRepository: loadIncomeRepository) {}
  async load(): LoadIncome.Result {
    try {
      const res = await this.loadIncomeRepository.load();

      return right(res);
    } catch (error) {
      return left(error);
    }
  }
}
