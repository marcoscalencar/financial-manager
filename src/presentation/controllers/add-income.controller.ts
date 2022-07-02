import { AddIncome } from "@/domain/useCases";
import { badRequest, noContent } from "../helpers/http";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";

export class AddIncomeController implements Controller {
  constructor(private readonly addIncome: AddIncome) {}
  async handle(request: AddIncomeController.Request): Promise<HttpResponse> {
    const data = await this.addIncome.add(request);
    if (data.isRight()) return noContent();
    if (data.isLeft()) return badRequest(data.value);
  }
}

export namespace AddIncomeController {
  export type Request = {
    value: number;
    recurrence: "MONTHLY" | "WEEKLY";
  };
}
