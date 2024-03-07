import TodoList from "./todolist";

export default class DomManager {
  constructor() {
    this.activeProject = ''
    this.todoList = new TodoList()
  }

  renderTasksForActiveProject(projectBody) {
    projectBody.textContent = ''
    const activeProject = this.todoList.projects.find(
      project => project.name === this.activeProject);
    console.log(activeProject)
    activeProject.tasks.forEach((task) => {
      const taskParagraph = document.createElement('p')
      taskParagraph.textContent = task.title
      projectBody.appendChild(taskParagraph)
    })
  }

// Rendering function
  renderAll() {
    // Creating temporary test projects/classes
    this.todoList.createProject('TESTPROJECT');
    this.todoList.createTask(0, {
      title: 'lets go',
      description: 'be great',
      dueDate: 'today',
      priority: 'essential'
    });
    this.todoList.createProject('Another1');
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

    // Displaying the projects in the sidebar
    this.todoList.projects.forEach((project) => {
      const projectParagraph = document.createElement('p')
      projectParagraph.textContent = project.name
      // Event listener on project
      projectParagraph.addEventListener('click', () => {
        this.activeProject = projectParagraph.textContent
        this.renderTasksForActiveProject(projectBody)
      })
      sidebar.appendChild(projectParagraph)
    })

    // Displays every single task of all projects
    this.todoList.projects.forEach((project) => {
      console.log(project)
      project.tasks.forEach((task) => {
        const taskParagraph = document.createElement('p')
        taskParagraph.textContent = task.title
        projectBody.appendChild(taskParagraph)
      })
    })
  }
}