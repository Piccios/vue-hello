const { createApp } = Vue

createApp({
    data() {
        return {
            message: 'Hello world!',
            image: 'https://i.pinimg.com/originals/47/04/5c/47045cc00173365b8f2f5c09fb203e59.jpg',
            
        }
    },methods:{
        showAlert(){
            alert("The power of the sun in the palm of my hand!")
        }
    }
}).mount('#app')