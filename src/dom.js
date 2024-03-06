import TodoList from "./todolist";

export function renderAll() {
  const todoList = new TodoList()

  todoList.createProject('TESTPROJECT');
  todoList.createTask(0, {
    title: 'lets go',
    description: 'be great',
    dueDate: 'today',
    priority: 'essential'
  });

  const body = document.querySelector('body')
  const sideBar = document.createElement('div')
  const projectBody = document.createElement('div')

  todoList.projects.forEach((project) => {
    console.log(project)
    project.tasks.forEach((task) => {
      const taskParagraph = document.createElement('p')
      taskParagraph.textContent = task.title
      projectBody.appendChild(taskParagraph)
    })
  })
  body.appendChild(projectBody)
}