import TodoList from "./todolist";

export default class DomManager {
  constructor() {
    this.activeProject = ''
    this.todoList = new TodoList()
  }

  findActiveProjectIndex () {
    return this.todoList.projects.indexOf(this.activeProject)
  }

  renderAllTasksTab(homeProjectsDiv, projectBody) {
    const tabDiv = this.createHomeTaskTab('All Tasks')

    // this.handleProjectTabClick(tabDiv, projectBody, 
    //                           this.todoList.getAllTasks(), "All Tasks")
    tabDiv.addEventListener('click', () => {
      this.renderTasks(projectBody, this.todoList.getAllTasks(), 'allt')
    })
    homeProjectsDiv.appendChild(tabDiv)
  }
  
  createHomeTaskTab(name) {
    const tabDiv = document.createElement('div')
    tabDiv.classList.add('project')
    const tabParagraph = document.createElement('p')
    tabParagraph.textContent = name
    tabDiv.appendChild(tabParagraph)
    return tabDiv
  }

  renderProjectTabs(allProjectsDiv, projectBody) {
    this.todoList.projects.forEach((project) => {
      const projectDiv = document.createElement('div')
      projectDiv.classList.add('project')
      const projectParagraph = document.createElement('p')
      projectParagraph.textContent = project.name
      // Event listener on project
      this.handleProjectTabClick(projectDiv, projectBody, 
                                project.tasks, project.name)

      projectDiv.appendChild(projectParagraph)
      allProjectsDiv.appendChild(projectDiv)
    })
  }

  handleProjectTabClick(projectTabDiv, projectBody, tasks, projectName) {
    projectTabDiv.addEventListener('click', () => {
      this.renderTasks(projectBody, tasks, projectName)
      if (projectName === "All Tasks") {
        this.activeProject = null
      }
      else {
      this.activeProject = this.todoList.projects.find(
                            project => project.name === projectName)
      }
    })
  }

  renderTasks(projectBody, tasks, projectName) {
    projectBody.textContent = ''
    const projectNameTitle = document.createElement('h1')
    projectNameTitle.textContent = projectName
    projectBody.appendChild(projectNameTitle)
    tasks.forEach((task) => {
      const taskDiv = document.createElement('div')
      const taskParagraph = document.createElement('p')
      taskParagraph.textContent = task.title
      taskDiv.appendChild(taskParagraph)
      projectBody.appendChild(taskDiv)
    })
    this.createAddTaskButton(projectBody)
  }

  createAddProjectButton(sidebar, allProjectsDiv, projectBody) {
    const addProjectButton = document.createElement('button')
    addProjectButton.classList.add('add-project-button')
    addProjectButton.textContent = 'Add Project'
    sidebar.appendChild(addProjectButton)
    addProjectButton.addEventListener('click', () => {
      this.createAddProjectForm(allProjectsDiv, projectBody)
    })
  }

  createAddProjectForm(allProjectsDiv, projectBody) {
    const addProjectForm = document.createElement('form')
    allProjectsDiv.appendChild(addProjectForm)
    const addProjectInput = document.createElement('input')
    addProjectInput.type = 'text'
    addProjectInput.id = 'projectNameInput'
    addProjectForm.appendChild(addProjectInput)
    const addProjectSubmit = document.createElement('button')
    addProjectSubmit.textContent = 'Submit'
    addProjectSubmit.type = 'submit'
    addProjectForm.appendChild(addProjectSubmit)
    addProjectSubmit.addEventListener('click', (e) => {
      e.preventDefault()
      this.appendProject(addProjectInput.value, allProjectsDiv, projectBody)
      addProjectForm.remove()
    })
  }

  appendProject(name, allProjectsDiv, projectBody) {
    this.todoList.createProject(name)
    this.renderLatestProjectTab(allProjectsDiv, projectBody)
  }

  renderLatestProjectTab(allProjectsDiv, projectBody) {
    const projectDiv = document.createElement('div')
    projectDiv.classList.add('project')
    const projectParagraph = document.createElement('p')
    const lastProjectIndex = this.todoList.projects.length - 1
    projectParagraph.textContent = this.todoList.projects[lastProjectIndex].name
    projectDiv.appendChild(projectParagraph)
    allProjectsDiv.appendChild(projectDiv)
    this.handleProjectTabClick(projectDiv, projectBody, 
      this.todoList.projects[lastProjectIndex].tasks, 
      this.todoList.projects[lastProjectIndex].name)
  }

  createAddTaskButton(projectBody) {
    const addTaskButton = document.createElement('button')
    projectBody.appendChild(addTaskButton)
    addTaskButton.textContent = 'Add Task'
    addTaskButton.classList.add('add-task-button')
    this.handleAddTaskButtonClick(addTaskButton, projectBody)
  }

  handleAddTaskButtonClick(addTaskButton, projectBody) {
    addTaskButton.addEventListener('click', () => {
      this.createAddTaskForm(projectBody)
    })
  }

  createAddTaskForm(projectBody) {
    const addTaskForm = document.createElement('form')
    const lastChild = projectBody.lastElementChild
    projectBody.insertBefore(addTaskForm, lastChild)

    const addTaskTitleLabel = document.createElement('label')
    addTaskTitleLabel.setAttribute('for', 'title-input')
    addTaskForm.appendChild(addTaskTitleLabel)
    addTaskTitleLabel.textContent = "Title: "
    const addTaskTitleInput = document.createElement('input')
    addTaskForm.appendChild(addTaskTitleInput)
    addTaskTitleInput.type = 'text'
    addTaskTitleInput.id = 'title-input'
    addTaskTitleInput.placeholder = 'What to do?'

    const addTaskDescriptionLabel = document.createElement('label')
    addTaskDescriptionLabel.setAttribute('for', 'description-input')
    addTaskForm.appendChild(addTaskDescriptionLabel)
    addTaskDescriptionLabel.textContent = "Description: "
    const addTaskDescriptionInput = document.createElement('textarea')
    addTaskForm.appendChild(addTaskDescriptionInput)
    addTaskDescriptionInput.id = 'description-input'
    addTaskDescriptionInput.placeholder = 'Any extra details?'

    const addTaskDueDateLabel = document.createElement('label')
    addTaskDueDateLabel.setAttribute('for', 'date-input')
    addTaskForm.appendChild(addTaskDueDateLabel)
    addTaskDueDateLabel.textContent = 'Due Date: '
    const addTaskDueDateInput = document.createElement('input')
    addTaskForm.appendChild(addTaskDueDateInput)
    addTaskDueDateInput.type = 'date'
    addTaskDueDateInput.id = 'date-input'

    const addTaskPriorityLabel = document.createElement('label')
    addTaskPriorityLabel.setAttribute('for', 'priority-select')
    addTaskForm.appendChild(addTaskPriorityLabel)
    addTaskPriorityLabel.textContent = 'Priority'
    const addTaskPrioritySelect = document.createElement('select')
    addTaskPrioritySelect.id = 'priority-select'
    addTaskForm.appendChild(addTaskPrioritySelect)
    const addPriorityLow = document.createElement('option')
    addTaskPrioritySelect.appendChild(addPriorityLow)
    addPriorityLow.value = 'low'
    addPriorityLow.textContent = 'Low'
    const addPriorityMedium = document.createElement('option')
    addTaskPrioritySelect.appendChild(addPriorityMedium)
    addPriorityMedium.value = 'Medium'
    addPriorityMedium.textContent = 'Medium'
    const addPriorityhigh = document.createElement('option')
    addTaskPrioritySelect.appendChild(addPriorityhigh)
    addPriorityhigh.value = 'high'
    addPriorityhigh.textContent = 'High'

    const addTaskSubmitButton = document.createElement('button')
    addTaskForm.appendChild(addTaskSubmitButton)
    addTaskSubmitButton.type = 'Submit'
    addTaskSubmitButton.textContent = 'Submit'

    addTaskSubmitButton.addEventListener('click', (e) => {
      e.preventDefault()
      this.appendTask(addTaskTitleInput.value, addTaskDescriptionLabel.value, 
                addTaskDueDateInput.valueAsDate, addTaskPrioritySelect.value, 
                projectBody)
      addTaskForm.remove()
    })
  }

  appendTask(title, description, duedate, priority, projectBody) {
    this.todoList.createTask(this.findActiveProjectIndex(), {
      title: title,
      description: description,
      dueDate: duedate,
      priority: priority
    })
    this.renderTasks(projectBody, this.activeProject.tasks, 
                    this.activeProject.name)
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
    this.renderTasks(projectBody, this.todoList.getAllTasks(), "All Tasks")

    // Displaying the projects in the sidebar
    this.renderProjectTabs(allProjectsDiv, projectBody)

    // Add Project Button
    this.createAddProjectButton(sidebar, allProjectsDiv, projectBody)
  }
}