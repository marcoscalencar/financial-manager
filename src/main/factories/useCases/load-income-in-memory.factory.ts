import { LoadIncomeInMemory } from "@/data/useCases/load-income-in-memory";
import { IncomeInMemoryRepository } from "@/infra/db/in-memory/income.repository";

export const makeLoadIncomeInMemory = (
  incomeInmemoryRepository: IncomeInMemoryRepository
) => {
  return new LoadIncomeInMemory(incomeInmemoryRepository);
};
