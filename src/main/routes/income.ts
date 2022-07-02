import { IncomeInMemoryRepository } from "@/infra/db/in-memory/income.repository";
import { Request, Response, Router } from "express";
import { adaptRoute } from "../adapters/express-route";
import { makeAddIncomeController } from "../factories/controllers/add-income.controller.factory";
import { makeLoadIncomeController } from "../factories/controllers/load-income.controller.factory";

const incomeRepository = new IncomeInMemoryRepository();

export default (router: Router): void => {
  router.get("/income", adaptRoute(makeLoadIncomeController(incomeRepository)));
  router.post("/income", adaptRoute(makeAddIncomeController(incomeRepository)));
  router.get("/", (request: Request, response: Response) => {
    response.send("Hello world!");
  });
};
