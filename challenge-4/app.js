/**
 * Write your challenge solution here
 */
const input = document.querySelector('#taskInput')
const addButton = document.querySelector('#addButton')

const totalTasks = document.querySelector('#totalTasks')
const completedTasks = document.querySelector('#completedTasks')

const taskList = document.querySelector('#taskList')
let totalTaskVal = 0
let totalCompletedTaskVal = 0
const changeTotalTask = ()=>{
    totalTasks.innerHTML = `Total tasks: ${totalTaskVal}`
}
const changeCompletedTotalTask = ()=>{
    completedTasks.innerHTML = `Completed: ${totalCompletedTaskVal}`
}
addButton.addEventListener('click', ()=>{
    let value = input.value
    if(value===""){
        alert("Empty Task can not be inserted")
        return
    }
    input.value = ""
    const li = document.createElement('li')
    li.classList.add('task-item')
    li.innerHTML = `
        <input type="checkbox" class="complete-checkbox"/>
        <span class="task-text">${value}</span>
        <button class="delete-button">delete</button>
    `
    totalTaskVal+=1
    changeTotalTask()
    const select = li.querySelector('input')
    select.addEventListener('change',()=>{
        if(select.checked){
            li.classList.add('completed')
            totalCompletedTaskVal += 1
        }else{
            li.classList.remove('completed')
            totalCompletedTaskVal -= 1
        }
        changeCompletedTotalTask()
    })
    li.querySelector('button').addEventListener('click',()=>{
        li.remove()
        totalTaskVal-=1
        if(select.checked)
            totalCompletedTaskVal -=1
        changeTotalTask()
        changeCompletedTotalTask()
        if(taskList.childElementCount===0){
            taskList.innerHTML = `<li class="empty-list">No tasks yet. Add one above!</li>`
        }
    })
    taskList.appendChild(li)
    if(taskList.children[0].className.indexOf('empty-list')!=-1)
        taskList.children[0].remove()
})