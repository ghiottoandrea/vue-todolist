const { createApp } = Vue

createApp({
    data() {
        return {
            message: `To Do List`,
            newTask: ``,
            
            tasks: [
                {
                    text: `Wash the dishes`,
                    done: true
                },
                {
                    text: `Wash the car`,
                    done: false
                }, {
                    text: `Do the laundry`,
                    done: true
                }, {
                    text: `Watch a film`,
                    done: false
                }, {
                    text: `Make dinner`,
                    done: false
                }
            ]
        }
    },
    methods: {
        deleteTask(index) {
            this.tasks.splice(index, 1)
        },
        addNewTask() {
            const newElement = {
                text: this.newTask,
                done: false
            }
            this.tasks.push(newElement)
            this.newTask = ``
        }
    }
}).mount(`#app`)