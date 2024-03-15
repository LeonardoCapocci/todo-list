import Task from "./task";
import Project from "./project";

export default class TodoList {
  constructor() {
    this.projects = []
  }
  createProject(name) {
    const project = new Project(name)
    this.projects.push(project)
  }
  createTask(projectIndex, taskDetails) {
    const project = this.projects[projectIndex]
    if (project) {
      const task = new Task(taskDetails.title, taskDetails.description, taskDetails.dueDate, taskDetails.priority)
      project.tasks.push(task)
    }
    else {
      console.log("That project doesn't seem to exist")
    }
  }

  deleteTask(projectIndex, taskIndex) {
    const project = this.projects[projectIndex]
    project.tasks.splice(taskIndex, 1)
  }
  getAllTasks() {
    return this.projects.flatMap(project => project.tasks)
  }
}