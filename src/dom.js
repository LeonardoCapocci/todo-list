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

  renderAllTasksTab(homeProjectsDiv, projectBody) {
    // Creating the tab
    const allTasksTabDiv = document.createElement('div')
    allTasksTabDiv.classList.add('project')
    const allTasksTabParagraph = document.createElement('p')
    allTasksTabParagraph.textContent = 'All'

    allTasksTabDiv.addEventListener('click', () => {
      this.renderTasks(projectBody, this.todoList.getAllTasks())
    })
    allTasksTabDiv.appendChild(allTasksTabParagraph)
    homeProjectsDiv.appendChild(allTasksTabDiv)
  }

  createAddProjectButton(addProjectButtonSuperiorDiv) {
    const addProjectButtonDiv = document.createElement('div')
    addProjectButtonDiv.classList.add('add-project-button-div')
    const addProjectButton = document.createElement('button')
    addProjectButton.classList.add('add-project-button')
    addProjectButton.textContent = 'ADD PROJECT'
    addProjectButtonDiv.appendChild(addProjectButton)
    addProjectButtonSuperiorDiv.appendChild(addProjectButtonDiv)
  }

  renderProjectTabs(allProjectsDiv, projectBody) {
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
      allProjectsDiv.appendChild(projectDiv)
    })
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
    mainContainer.className = 'main-container'
    body.appendChild(mainContainer)

    const sidebar = document.createElement('div')
    sidebar.className = 'sidebar'
    mainContainer.appendChild(sidebar)

    const homeProjectsDiv = document.createElement('div')
    sidebar.appendChild(homeProjectsDiv)

    const allProjectsDiv = document.createElement('div')
    sidebar.appendChild(allProjectsDiv)

    const addProjectButtonSuperiorDiv = document.createElement('div')
    sidebar.appendChild(addProjectButtonSuperiorDiv)

    const projectBody = document.createElement('div')
    projectBody.className = 'project-body'
    mainContainer.appendChild(projectBody)

    // Header Container
    const headerParagraph = document.createElement('h1')
    headerParagraph.textContent = 'My Awesome To-Do List App'
    headerContainer.appendChild(headerParagraph)

    // Displays the special sidebar filters
    // All tasks
    this.renderAllTasksTab(homeProjectsDiv, projectBody)
    this.renderTasks(projectBody, this.todoList.getAllTasks())

    // Displaying the projects in the sidebar
    this.renderProjectTabs(allProjectsDiv, projectBody)

    // Add Project Button
    this.createAddProjectButton(addProjectButtonSuperiorDiv)
  }
}