import { Either } from "../../shared/utils";
import { IncomeModel } from "../models";

export interface LoadIncome {
  load(): LoadIncome.Result;
}

export namespace LoadIncome {
  export type Result = Promise<Either<Error, IncomeModel & { id: string }[]>>;
}
