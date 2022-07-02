import { left, right } from "@/shared/utils";
import { IncomeModel } from "../../domain/models";
import { AddIncome } from "../../domain/useCases/add-income";
import { AddIncomeRepository } from "../protocols/db/add-income.repository";

export class AddIncomeInMemory implements AddIncome {
  constructor(private readonly addIncomeRepository: AddIncomeRepository) {}
  async add(params: IncomeModel): AddIncome.Result {
    try {
      if (!params.recurrence) {
        throw new Error("Missing params");
      }
      if (!params.value) {
        throw new Error("Missing params");
      }
      this.incomes++;
      await this.addIncomeRepository.add(params);
      return right(true);
    } catch (error) {
      return left(error);
    }
  }
  incomes: number = 0;
}
