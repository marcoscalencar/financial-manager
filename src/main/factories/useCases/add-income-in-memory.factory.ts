import { AddIncomeInMemory } from "@/data/useCases";
import { IncomeInMemoryRepository } from "@/infra/db/in-memory/income.repository";

export const makeAddIncomeInMemory = (
  incomeInmemoryRepository: IncomeInMemoryRepository
) => {
  return new AddIncomeInMemory(incomeInmemoryRepository);
};
