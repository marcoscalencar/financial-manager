import { LoadIncome } from "@/domain/useCases/load-income";
import { badRequest, ok } from "../helpers/http";
import { Controller } from "../protocols/controller";
import { HttpResponse } from "../protocols/http";

export class LoadIncomeController implements Controller {
  constructor(private readonly loadIncome: LoadIncome) {}
  async handle(): Promise<HttpResponse> {
    const data = await this.loadIncome.load();
    if (data.isRight()) return ok(data.value);
    if (data.isLeft()) return badRequest(data.value);
  }
}

export namespace LoadIncomeController {}
