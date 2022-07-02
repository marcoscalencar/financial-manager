export type IncomeModel = {
  value: number;
  recurrence: IncomeRecurrenceModel;
};
type IncomeRecurrenceModel = "MONTHLY" | "WEEKLY";
