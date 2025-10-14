'use strict';

const toDoList = {
    tasks: [],
    addTask(task) {
        const existsTask = this.tasks.find(obj => obj.id == task.id);
        if (existsTask) {
            return 'Такая задача уже существует';
        }
        return this.tasks.push(task);
    },
    deleteTask(id) {
        const existsTask = this.tasks.find(task => task.id == id);
        if (!existsTask) {
            return 'Не возможно удалить. Такой задачи не сущетвует';
        }
        const indexTask = this.tasks.indexOf(existsTask);
        return this.tasks.splice(indexTask, 1);
    },
    upDateTask(id, name, order, description) {
        const existsTask = this.tasks.find(task => task.id == id);
        if (!existsTask) {
            return 'Такой задачи не существует';
        }
        if (name || order || description) {
            existsTask.name = name;
            existsTask.order = order;
            existsTask.description = description;
            console.log('Задача изменена!');
        }
    },
    sortTaskByPriority() {
        this.tasks.sort((task, task1) => task.order - task1.order);
    }
};

const newTask = {
    tasks: [{ 
    id: 1, 
    name: 'тест', 
    description: 'описание',
    order: 0
    }],
    }


const addNewTask = toDoList.addTask.bind(newTask);
const deleteTaskNewTask = toDoList.deleteTask.bind(newTask);
const upDateNewTask = toDoList.upDateTask.bind(newTask);
const sortNewTask = toDoList.sortTaskByPriority.bind(newTask);

const newTask1 = {
    id: 2, 
    name: 'Задача 1', 
    description: 'Сделать домашнее задание по JS',
    order: 3    
}
const newTask2 = {
    id: 3, 
    name: 'Задача 2', 
    description: 'Убрать в доме дома',
    order: 4    
}
const newTask3 = {
    id: 4, 
    name: 'Задача 3', 
    description: 'Погулять',
    order: 2    
}

addNewTask(newTask1);
addNewTask(newTask2);
addNewTask(newTask3);
deleteTaskNewTask(1);
sortNewTask();
upDateNewTask(2, 'Задача 0', 1, 'Задачу необходимо выполнить сегодня, срочно!');
sortNewTask();

console.log(newTask.tasks)