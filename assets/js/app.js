const { createApp } = Vue

createApp({
    data() {
        return {
            message: `To Do List`,
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
    }
}).mount(`#app`)