export interface Task {
  id: number,
  category: string,
  title: string,
  history?: Array<TaskHistory>,
  reminder?: Reminder
}

export interface TaskHistory {
  id: number,
  description?: string,
  date: string
}

export interface Reminder {
  recurringType: RecurringType,
  date?: string,
  dayOfWeek?: number,
  dayOfMonth?: number,
  frequency?: number
}

export enum RecurringType {
  None,
  Weekly,
  Monthly,
  Yearly
}