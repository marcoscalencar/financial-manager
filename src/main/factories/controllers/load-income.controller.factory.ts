import { IncomeInMemoryRepository } from "@/infra/db/in-memory/income.repository";
import { LoadIncomeController } from "@/presentation/controllers/load-income.controller";
import { Controller } from "@/presentation/protocols/controller";
import { makeLoadIncomeInMemory } from "../useCases/load-income-in-memory.factory";

export const makeLoadIncomeController = (
  incomeInmemoryRepository: IncomeInMemoryRepository
): Controller => {
  const loadIncomeInMemory = makeLoadIncomeInMemory(incomeInmemoryRepository);
  return new LoadIncomeController(loadIncomeInMemory);
};
