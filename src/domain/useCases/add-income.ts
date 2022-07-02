import { Either } from "../../shared/utils";
import { IncomeModel } from "../models";

export interface AddIncome {
  add(params: AddIncome.Params): AddIncome.Result;
}

export namespace AddIncome {
  export type Params = IncomeModel;
  export type Result = Promise<Either<Error, boolean>>;
}
