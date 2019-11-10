class Task {
    constructor(title = Task.getDefaultTitle()) {
        this.type = 'work';
        this.title = title;
        this._done = false;
        Task.count += 1;
        console.log('Task is created');
    }

    get done() {
        return this._done === true ? 'Task is done' : 'Task is not done'
    }

    set done(value) {
        if (value !== undefined && typeof value === 'boolean') {
            this._done = value;
        } else {
            console.log('Error, value must be boolean');
        }
    }
    
    complete() {
        this.done = 1;
        console.log(`Task ${this.title} is done`);
    }

    static getDefaultTitle() {
        return `Task ${this.count + 1}`
    }
}

Task.count = 0; // static properti

let task1 = new Task('Clean room');
let task2 = new Task('Buy products');
let task3 = new Task();

console.log('typeof Task', typeof Task);
console.log('task1 instanceof Task', task1 instanceof Task);
console.log('task1.title', task1.title);
console.log('task2.title', task2.title);
console.log('task3.title', task3.title);
task2.complete();
console.log('Task.count', Task.count);

console.log(task1.done, task1._done);
console.log(task2.done, task2._done);