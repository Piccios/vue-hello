const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello world!',
            image: 'https://d.newsweek.com/en/full/1601678/bilbo-baggins.jpg'

        }
    }
}).mount('#app')