import TodoList from "./todolist";
import Task from "./task";

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
      this.renderTasks(projectBody, this.todoList.getAllTasks(), 'All Tasks')
    })
    homeProjectsDiv.appendChild(tabDiv)
    this.highlightLatestProject(tabDiv)
    tabDiv.classList.add('active')
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
    this.highlightLatestProject(projectTabDiv)
    projectTabDiv.addEventListener('click', () => {
      this.renderTasks(projectBody, tasks, projectName)
      this.activeProject = this.todoList.projects.find(
                            project => project.name === projectName)
    })
  }

  highlightLatestProject(projectTabDiv) {
    projectTabDiv.addEventListener('click', () => {
      const allProjectTabs = document.querySelectorAll('.project')
      allProjectTabs.forEach(tab => tab.classList.remove('active'))
      projectTabDiv.classList.add('active')
    })
  }

  renderTasks(projectBody, tasks, projectName) {
    projectBody.textContent = ''
    const projectNameTitle = document.createElement('h1')
    projectNameTitle.textContent = projectName
    projectBody.appendChild(projectNameTitle)
    const sortedTasks = this.sortTasksByDate(tasks)
    sortedTasks.forEach((task, index) => {
      if (task.completed === false) {
        const taskDiv = document.createElement('div')
        projectBody.appendChild(taskDiv)
        taskDiv.classList.add('task-div')
        const taskDivTop = document.createElement('div')
        taskDiv.appendChild(taskDivTop)
        taskDivTop.classList.add('task-div-top')
        const completionCheckbox = document.createElement('input')
        taskDivTop.appendChild(completionCheckbox)
        completionCheckbox.type = 'checkbox'
        completionCheckbox.classList.add('completion-checkbox')
        completionCheckbox.id = index
        this.handleCompletionCheckboxClick(completionCheckbox, task, taskDiv)
        const taskTitleParagraph = document.createElement('p')
        taskDivTop.appendChild(taskTitleParagraph)
        taskTitleParagraph.textContent = task.title
        taskTitleParagraph.id = 'task-title'
        const taskDescriptionParagraph = document.createElement('p')
        taskDiv.appendChild(taskDescriptionParagraph)
        taskDescriptionParagraph.textContent = task.description
        taskDescriptionParagraph.id = 'task-description'
        const taskDueDateParagraph = document.createElement('p')
        taskDivTop.appendChild(taskDueDateParagraph)
        taskDueDateParagraph.id = 'task-due-date'
        const dueDate = new Date(task.dueDate.replace(/-/g, '\/'))
        const options = { 
          weekday: 'short', 
          month: '2-digit', 
          day: '2-digit', 
          year: 'numeric' 
        };
        const formattedDueDate = dueDate.toLocaleDateString('en-US', options).replace(',', '')
        taskDueDateParagraph.textContent = 'Due: ' + formattedDueDate
        taskDiv.classList.add(task.priority)

        const deleteTaskButton = document.createElement('button')
        taskDivTop.appendChild(deleteTaskButton)
        deleteTaskButton.textContent = 'DELETE TASK'
        deleteTaskButton.id = 'bin-icon'
        deleteTaskButton.addEventListener('click', () => {
          this.todoList.deleteTask(this.findActiveProjectIndex(), index)
          taskDiv.style.transition = 'opacity 0.5s';
          taskDiv.style.opacity = '0';
          setTimeout(() => {
            taskDiv.style.display = 'none'
          }, 515);
        })
      }
    })
    if (projectName !== "All Tasks")
    this.createAddTaskButton(projectBody)
  }

  sortTasksByDate(taskArray) {
    return taskArray.sort((a, b) => a.dueDate.replace(/-/g, '') - b.dueDate.replace(/-/g, ''))
  }

  createAddProjectButton(sidebar, allProjectsDiv, projectBody) {
    const addProjectButton = document.createElement('button')
    addProjectButton.classList.add('add-project-button')
    addProjectButton.textContent = 'Add Project'
    sidebar.appendChild(addProjectButton)
    addProjectButton.addEventListener('click', () => {
      this.createAddProjectForm(allProjectsDiv, projectBody, sidebar)
      addProjectButton.remove()
    })
  }

  createAddProjectForm(allProjectsDiv, projectBody, sidebar) {
    const addProjectForm = document.createElement('form')
    allProjectsDiv.appendChild(addProjectForm)
    const addProjectInput = document.createElement('input')
    addProjectInput.type = 'text'
    addProjectInput.id = 'projectNameInput'
    addProjectInput.required = true
    addProjectForm.appendChild(addProjectInput)
    const addProjectSubmit = document.createElement('button')
    addProjectSubmit.textContent = 'Add Project'
    addProjectSubmit.type = 'submit'
    addProjectForm.appendChild(addProjectSubmit)
    addProjectSubmit.addEventListener('click', (e) => {
      if (addProjectInput.value.trim() !== '') {
      e.preventDefault()
      this.appendProject(addProjectInput.value, allProjectsDiv, projectBody)
      addProjectForm.remove()
      this.createAddProjectButton(sidebar, allProjectsDiv, projectBody)
      }
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
    addTaskTitleInput.required = true

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
    addTaskDueDateInput.required = true

    const addTaskPriorityLabel = document.createElement('label')
    addTaskPriorityLabel.setAttribute('for', 'priority-select')
    addTaskForm.appendChild(addTaskPriorityLabel)
    addTaskPriorityLabel.textContent = 'Priority'
    const addTaskPrioritySelect = document.createElement('select')
    addTaskPrioritySelect.id = 'priority-select'
    addTaskForm.appendChild(addTaskPrioritySelect)
    const addPriorityLow = document.createElement('option')
    addTaskPrioritySelect.appendChild(addPriorityLow)
    addPriorityLow.value = 'Low'
    addPriorityLow.textContent = 'Low'
    const addPriorityMedium = document.createElement('option')
    addTaskPrioritySelect.appendChild(addPriorityMedium)
    addPriorityMedium.value = 'Medium'
    addPriorityMedium.textContent = 'Medium'
    const addPriorityhigh = document.createElement('option')
    addTaskPrioritySelect.appendChild(addPriorityhigh)
    addPriorityhigh.value = 'High'
    addPriorityhigh.textContent = 'High'

    const addTaskSubmitButton = document.createElement('button')
    addTaskForm.appendChild(addTaskSubmitButton)
    addTaskSubmitButton.type = 'Submit'
    addTaskSubmitButton.textContent = 'Submit'

    addTaskSubmitButton.addEventListener('click', (e) => {
      if (addTaskTitleInput.value.trim() !== '' && addTaskDueDateInput.value !== '') {
        e.preventDefault()
        this.appendTask(addTaskTitleInput.value, addTaskDescriptionInput.value, 
                  addTaskDueDateInput.value, addTaskPrioritySelect.value, 
                  projectBody)

        addTaskForm.remove()
     }
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

  handleCompletionCheckboxClick(completionCheckbox, task, taskDiv) {
    completionCheckbox.addEventListener('click', (event) => {
      if (!completionCheckbox.checked) {
        event.preventDefault(); // Prevent the default behavior of unchecking the checkbox
      }
      task.completed = true
      taskDiv.style.transition = 'opacity 2s';
      taskDiv.style.opacity = '0';
      setTimeout(() => {
        taskDiv.style.display = 'none'
      }, 2020);
    })
  }

// Rendering function
  renderAll() {
    // Creating temporary test projects/classes
    this.todoList.createProject('Project 1')
    this.todoList.createProject('Project 2')
    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });
    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
    });    this.todoList.createTask(0, {
      title: "This is my task",
      description: "This is a very detailed and well thought out description of my task if i want to include it",
      dueDate: "2024-03-10", // Make sure to pass a valid date format
      priority: "Medium"
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