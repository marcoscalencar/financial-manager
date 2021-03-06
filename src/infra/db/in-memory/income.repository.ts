import { AddIncomeRepository } from "@/data/protocols/db/add-income.repository";
import { loadIncomeRepository } from "@/data/protocols/db/load-income.repository";
import { IncomeModel } from "@/domain/models";
import crypto from "crypto";

export class IncomeInMemoryRepository
  implements AddIncomeRepository, loadIncomeRepository
{
  load(): Promise<loadIncomeRepository.Result> {
    return Promise.resolve(this.incomes);
  }
  add(params: IncomeModel): Promise<void> {
    this.incomes.push({ ...params, id: crypto.randomUUID() });
    return Promise.resolve();
  }
  incomes: IncomeModel & { id: string }[] = [] as any;
}
