export default class Task {
  constructor(title, description, dueDate, priority, project, completed = false) {
    this.title = title;
    this.description = description;
    this.dueDate = dueDate;
    this.priority = priority;
    this.project = project
    this.completed = completed;
  }
  setCompleted() {
    this.completed = true
  }
}