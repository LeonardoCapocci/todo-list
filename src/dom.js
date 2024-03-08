import TodoList from "./todolist";

export default class DomManager {
  constructor() {
    this.activeProject = ''
    this.todoList = new TodoList()
  }

  renderTasks(projectBody, tasks) {
    projectBody.textContent = ''
    tasks.forEach((task) => {
      const taskDiv = document.createElement('div')
      const taskParagraph = document.createElement('p')
      taskParagraph.textContent = task.title
      taskDiv.appendChild(taskParagraph)
      projectBody.appendChild(taskDiv)
    })
  }

  renderAllTasksTab(sidebar, projectBody) {
    // Creating the tab
    const allTasksTabDiv = document.createElement('div')
    allTasksTabDiv.classList.add('project')
    const allTasksTabParagraph = document.createElement('p')
    allTasksTabParagraph.textContent = 'All'

    allTasksTabDiv.addEventListener('click', () => {
      this.renderTasks(projectBody, this.todoList.getAllTasks())
    })
    allTasksTabDiv.appendChild(allTasksTabParagraph)
    sidebar.appendChild(allTasksTabDiv)
  }

  createAddProjectButton(sidebar) {
    const addProjectButtonDiv = document.createElement('div')
    addProjectButtonDiv.classList.add('add-project-button-div')
    const addProjectButton = document.createElement('button')
    addProjectButton.classList.add('add-project-button')
    addProjectButton.textContent = 'ADD PROJECT'
    addProjectButtonDiv.appendChild(addProjectButton)
    sidebar.appendChild(addProjectButtonDiv)
  }

  renderProjectTabs(sidebar, projectBody) {
    const AllprojectsDiv = document.createElement('div')
    this.todoList.projects.forEach((project) => {
      const projectDiv = document.createElement('div')
      projectDiv.classList.add('project')
      const projectParagraph = document.createElement('p')
      projectParagraph.textContent = project.name
      // Event listener on project
      projectDiv.addEventListener('click', () => {
        this.activeProject = projectParagraph.textContent
        this.renderTasks(projectBody, project.tasks)
      })
      projectDiv.appendChild(projectParagraph)
      AllprojectsDiv.appendChild(projectDiv)
    })
    this.createAddProjectButton(AllprojectsDiv)
    sidebar.appendChild(AllprojectsDiv)
  }

// Rendering function
  renderAll() {
    // Creating temporary test projects/classes
    this.todoList.createProject('Project 1');
    this.todoList.createTask(0, {
      title: 'lets go',
      description: 'be great',
      dueDate: 'today',
      priority: 'essential'
    });
    this.todoList.createProject('Project 2');
    this.todoList.createTask(1, {
      title: 'another leggo',
      description: 'be great',
      dueDate: 'today',
      priority: 'essential'
    });
    this.todoList.createTask(1, {
      title: 'ANOTHA leggo',
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

    // Displays the special sidebar filters
    // All tasks
    this.renderAllTasksTab(sidebar, projectBody)
    this.renderTasks(projectBody, this.todoList.getAllTasks())

    // Displaying the projects in the sidebar
    this.renderProjectTabs(sidebar, projectBody)
  }
}