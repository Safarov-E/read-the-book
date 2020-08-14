
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        books: [
            {
                id: 1,
                title: 'On the Road',
                author: 'Jack Kerouac',
                read: true
            },
            {
                id: 2,
                title: 'Harry Potter and the Philosophers Store',
                author: 'J. K. Rowling',
                read: false
            },
            {
                id: 3,
                title: 'Green Eggs and Ham',
                author: 'Dr Seuss',
                read: true
            }
        ]
    },
    getters: {
        books(state) {
            return state.books
        }
    },
    mutations: {
        
    },
    actions: {
        
    }
})