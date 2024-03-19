import Task from "./task";

export default class Project {
  constructor(name, tasks = []) {
    this.name = name
    this.tasks = tasks
  }
}