import { IncomeInMemoryRepository } from "@/infra/db/in-memory/income.repository";
import { AddIncomeController } from "@/presentation/controllers/add-income.controller";
import { Controller } from "@/presentation/protocols/controller";
import { makeAddIncomeInMemory } from "../useCases/add-income-in-memory.factory";

export const makeAddIncomeController = (
  incomeInmemoryRepository: IncomeInMemoryRepository
): Controller => {
  const addIncomeInMemory = makeAddIncomeInMemory(incomeInmemoryRepository);
  return new AddIncomeController(addIncomeInMemory);
};
