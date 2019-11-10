class Task {
    constructor(title) {
        this.title = title;
        this._time = 0;
        this.done = false;
        Task.count += 1;
        console.log('Task is created');
    }

    get time() {
        return this._time;
    }

    set time(value) {
        return this._time = value;
    }

    static getDefaultTime() {
        return 100;
    }

    complete() {
        this.done = true;
        console.log(`Task ${this.title} is done`);
    }
}

Task.count = 0;

class easyTask extends Task {

}

class SubTask extends Task {
    constructor(title, parent) {
        super(title);
        this.parent = parent;
        console.log('Subtask is created');
    }

    complete() {
        super.complete();
        console.log(`Subtask ${this.title} is done`);
    }
}

let task = new Task('Learn JS');
let subtask = new SubTask('Learn ES6', task);
let easytask = new easyTask('Install NPM');

task.complete();
subtask.complete();
easytask.complete();

console.log(task);
console.log(subtask);
console.log(easytask);

console.log(SubTask.getDefaultTime());
console.log(SubTask.count);