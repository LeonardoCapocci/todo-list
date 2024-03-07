import TodoList from "./todolist";

// Rendering function
export function renderAll() {
  // Creating a todo list class which manages all the projects and tasks
  const todoList = new TodoList()

  // Creating temporary test projects/classes
  todoList.createProject('TESTPROJECT');
  todoList.createTask(0, {
    title: 'lets go',
    description: 'be great',
    dueDate: 'today',
    priority: 'essential'
  });

  // Creating and sorting the divs
  const body = document.querySelector('body')
  const headerContainer = document.createElement('div')
  body.appendChild(headerContainer)
  headerContainer.classList = 'header-container'
  const mainContainer = document.createElement('div')
  body.appendChild(mainContainer)
  mainContainer.className = 'main-container'
  const sidebar = document.createElement('div')
  sidebar.className = 'sidebar'
  mainContainer.appendChild(sidebar)
  const projectBody = document.createElement('div')
  projectBody.className = 'project-body'
  mainContainer.appendChild(projectBody)

  // Header Container
  const headerParagraph = document.createElement('h1')
  headerParagraph.textContent = 'My Awesome To-Do List App'
  headerContainer.appendChild(headerParagraph)

  // Displaying the projects in the sidebar
  todoList.projects.forEach((project) => {
    const projectParagraph = document.createElement('p')
    projectParagraph.textContent = project.name
    sidebar.appendChild(projectParagraph)
  })

  // Displaying the tasks in the project body
  todoList.projects.forEach((project) => {
    console.log(project)
    project.tasks.forEach((task) => {
      const taskParagraph = document.createElement('p')
      taskParagraph.textContent = task.title
      projectBody.appendChild(taskParagraph)
    })
  })
}