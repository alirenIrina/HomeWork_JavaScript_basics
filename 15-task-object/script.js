'use strict';

const toDoList = {
    tasks: [],
    findTaskById: function(id) {
       return this.tasks.find(task => task.id == id);
    },
    addTask: function(task) {
        const existsTask = this.findTaskById(task.id);
        if (existsTask) {
            return 'Такая задача уже сущетсвует';
        }
        return this.tasks.push(task);
    },
    deleteTask: function(id) {
        const existsTask = this.findTaskById(id);
        if (!existsTask) {
            return 'Не возможно удалить. Такой задачи не сущетвует';
        }
        const indexTask = this.tasks.indexOf(existsTask);
        return this.tasks.splice(indexTask, 1);
    },
    upDateTask: function(id, title, priority) {
        const existsTask = this.findTaskById(id);
        if (!existsTask) {
            return 'Такой задачи не существует';
        }
        if (title) {
            return existsTask.title = title;
        }
        if (priority) {
            return existsTask.priority = priority;
        }
    },
    sortTaskByPriority: function() {
        this.tasks.sort((task, task1) => task.priority - task1.priority);
    }
};

const task1 = {
    title: 'Помыть посуду',
    id: 1,
    priority: 1
};

const task2 = {
    title: 'Сделать домашку по JS',
    id: 2,
    priority: 3
};

const task3 = {
    title: 'Погулять',
    id: 3,
    priority: 4
};

const task4 = {
    title: 'Сходить на работу',
    id: 4,
    priority: 2
};

toDoList.addTask(task1);
toDoList.addTask(task2);
toDoList.addTask(task3);
toDoList.addTask(task4);
toDoList.sortTaskByPriority();
toDoList.deleteTask(2);
toDoList.upDateTask(1, 'Покушать');
console.log(toDoList.tasks);