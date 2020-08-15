
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
        ],
        show: false
    },
    getters: {
        books(state) {
            return state.books
        },
        show(state) {
            return state.show
        }
    },
    mutations: {
        onDelete(state, payload) {
            let newArray = state.books.filter((item) => {
                return item.id != payload
            })
            return state.books = newArray
        },
        onHide(state) {
            return state.show = true;
        },
        onShow(state) {
            return state.show = false;
        },
        sendingData(state, payload) {
            return state.books.push(payload)
        }
    },
    actions: {
        onDelete(store, payload) {
            return store.commit('onDelete', payload)
        },
        onHide(store) {
            return store.commit('onHide')
        },
        onShow(store) {
            return store.commit('onShow')
        },
        sendingData(store, payload) {
            return store.commit('sendingData', payload)
        }
    }
})