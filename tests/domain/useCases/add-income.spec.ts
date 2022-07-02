import { AddIncomeRepository } from "@/data/protocols/db/add-income.repository";
import { AddIncomeInMemory } from "@/data/useCases";
import { IncomeModel } from "../models";

class AddIncomeRepositoryMock implements AddIncomeRepository {
  add(params: IncomeModel): Promise<void> {
    this.incomes.push(params);
    return Promise.resolve();
  }
  incomes: IncomeModel[] = [];
}

const makeSut = () => {
  const addIncomeRepository = new AddIncomeRepositoryMock();
  const sut = new AddIncomeInMemory(addIncomeRepository);
  return { sut, addIncomeRepository };
};

describe("AddIncomeInMemory UseCase", () => {
  test("should return true when added", async () => {
    const { sut, addIncomeRepository } = makeSut();
    const income: IncomeModel = { recurrence: "MONTHLY", value: 9000 };
    const res = await sut.add(income);
    expect(res.value).toBe(true);
    expect(res.isRight()).toBe(true);
    expect(addIncomeRepository.incomes).toContain(income);
  });
});
