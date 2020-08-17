
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
        show: false,
        showEditing: false,
        edditingBook: [],
        showAdded: false,
        showUpdated: false
    },
    getters: {
        books(state) {
            return state.books
        },
        show(state) {
            return state.show
        },
        showEditing(state) {
            return state.showEditing
        },
        edditingBook(state) {
            return state.edditingBook
        },
        showAdded(state) {
            return state.showAdded
        },
        showUpdated(state) {
            return state.showUpdated
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
        },
        onShowEditing(state) {
            return state.showEditing = false;
        },
        onHideEditing(state) {
            return state.showEditing = true;
        },
        handlerEditing(state, payload) {
            let array = state.books.filter((item) => {
                return item.id == payload
            })
            state.edditingBook = array
        },
        handlerEditingValueArray(state, payload) {
            state.books.map((item) => {
                if(item.id == payload.id) {
                    item.title = payload.title
                    item.author = payload.author
                    item.read = payload.read
                }
            })
        },
        handlerShowAdded(state) {
            return state.showAdded = true
        },
        handlerHideAdded(state) {
            return state.showAdded = false
        },
        handlerShowUpdated(state) {
            return state.showUpdated = true
        },
        handlerHideUpdated(state) {
            return state.showUpdated = false
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
        },
        onShowEditing(store) {
            return store.commit('onShowEditing')
        },
        onHideEditing(store) {
            return store.commit('onHideEditing')
        },
        handlerEditing(store, payload) {
            return store.commit('handlerEditing', payload)
        },
        handlerEditingValueArray(store, payload) {
            return store.commit('handlerEditingValueArray', payload)
        },
        handlerShowAdded(store) {
            return store.commit('handlerShowAdded')
        },
        handlerHideAdded(store) {
            return store.commit('handlerHideAdded')
        },
        handlerShowUpdated(store) {
            return store.commit('handlerShowUpdated')
        },
        handlerHideUpdated(store) {
            return store.commit('handlerHideUpdated')
        }
    }
})