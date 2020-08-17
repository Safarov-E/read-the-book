<template>
    <div class="modals">
        <transition name="fade" appear>
            <div class="itemModal">
                <div class="titleModal">
                    <h5>Update</h5>
                    <span style="cursor: pointer" @click="onShowEditing">✖</span>
                </div>
                <hr>
                <div class="form-group">
                    <label for="exampleInputEmail1">Title:</label>
                    <input type="text" 
                           class="form-control ml-2" 
                           id="exampleInputEmail1" 
                           aria-describedby="emailHelp" 
                           placeholder="Enter title"
                           v-model="title">
                    <label for="exampleInputEmail2">Author:</label>
                    <input type="text" 
                           class="form-control ml-2" 
                           id="exampleInputEmail2" 
                           aria-describedby="emailHelp" 
                           placeholder="Enter author"
                           v-model="author">
                    <label><input type="checkbox" v-model="checked"> Read?</label>
                    <div class="pb-3">
                        <button type="button" class="btn btn-primary mr-2 ml-2" @click="handlerEdditingValue()">Submit</button>
                        <button type="button" class="btn btn-danger" @click="onShowEditing">Reset</button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
export default {
    name: 'FormEditing',
    data() {
        return {
            title: '',
            author: '',
            checked: ''
        }
    },
    created(){
        this.title = this.edditingBook[0].title;
        this.author = this.edditingBook[0].author;
        this.checked = this.edditingBook[0].read;
    },
    computed: {
        ...mapGetters([
            'edditingBook'
        ])
    },
    methods: {
        ...mapActions([
            'onShowEditing',
            'handlerEditingValueArray'
        ]),
        handlerEdditingValue() {
            if(this.title != '' && this.author != '') {
                let data = {
                    id: this.edditingBook[0].id,
                    title: this.title,
                    author: this.author,
                    read: this.checked
                }
                this.handlerEditingValueArray(data);
                this.onShowEditing();
            }
        }
    }
}
</script>
<style scoped>
    .itemModal {
        width: 500px;
        background-color: #fff;
        border-radius: 5px;
        margin: 10vh auto;
    }
    .modals {
        border: 1px solid black;
        border-radius: 3px;
        width: 100%;
        height: 100%;
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        overflow: auto;
        background-color: rgba(0, 0, 0, 0.8);
    }
    .titleModal {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
    }
    .form-group label {
        font-weight: bold;
        padding: 10px;
    }
    .form-group input[type="text"] {
        width: 95%;
    }
    .fade-enter {
            
    }
    .fade-enter-active {
        animation: slideIn 0.5s;
    }
    .fade-enter-to {
        
    }
    .fade-leave {
        
    }
    .fade-leave-active {
        animation: slideOut 0.5s;
    }
    .fade-leave-to {
        
    }
    @keyframes slideIn {
        from{transform: translateY(-100vw);}
        to{transform: translateY(0px);}
    }
    @keyframes slideOut {
        from{transform: translateY(0px);}
        to{transform: translateY(-100vw);}
    }
</style>