import Task from "./task";
import Project from "./project";

export default class TodoList {
  constructor() {
    this.projects = []
  }

  static fromObject(obj) {
    const todoList = new TodoList();
    // Populate todoList properties from obj
    console.log("obj")
    console.log(obj)
    todoList.projects = obj.projects.map(project => {
        const tasks = project.tasks.map(task => new Task(task.title, task.description, task.dueDate, task.priority));
        return new Project(project.name, tasks);
    });
    // Populate other properties if needed
    return todoList;
  }

  createProject(name) {
    const project = new Project(name)
    this.projects.push(project)
  }
  createTask(projectIndex, taskDetails) {
    const project = this.projects[projectIndex]
    if (project) {
      const task = new Task(taskDetails.title, taskDetails.description, taskDetails.dueDate, taskDetails.priority, taskDetails.project)
      project.tasks.push(task)
    }
    else {
      console.log("That project doesn't seem to exist")
    }
  }

  deleteTask(projectIndex, task) {
    const project = this.projects[projectIndex]
    console.log(this.projects[projectIndex])
    const taskIndex = this.projects[projectIndex].tasks.indexOf(task)
    project.tasks.splice(taskIndex, 1)
  }
  getAllTasks() {
    return this.projects.flatMap(project => project.tasks)
  }

  filterWeekTasks() {
    const allTasks = this.getAllTasks()
    const weekTasks = []
    allTasks.forEach((task) => {
      if (task.dueDate.replace(/-/g, '') <= this.nextweek()) {
        weekTasks.push(task)
      }
    })
    return weekTasks
  }

  nextweek() {
    var today = new Date();
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
    const year = nextweek.getFullYear();
    const month = (nextweek.getMonth() + 1).toString().padStart(2, '0'); // Months are zero-indexed
    const day = nextweek.getDate().toString().padStart(2, '0');

const formattedDate = `${year}${month}${day}`;
    return formattedDate;
  }
}