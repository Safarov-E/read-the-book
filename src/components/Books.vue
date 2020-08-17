<template>
  <div class="mt-5">
    <button class="btn btn-success mb-3" @click="onHide(), handlerHideUpdated()">Add Book</button>
    <table class="table table-hover">
      <thead>
        <tr>
          <th scope="col">Title</th>
          <th scope="col">Author</th>
          <th scope="col">Read?</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in books" :key="book.id">
          <td>{{book.title}}</td>
          <td>{{book.author}}</td>
          <td>{{book.read === true ? 'Yes' : 'No'}}</td>
          <td>
            <button type="button" class="btn btn-warning btn-sm mr-1"
                    @click="onHideEditing(), onModelEditing(book.id)">Update</button>
            <button type="button" class="btn btn-danger btn-sm"
                    @click="onDelete(book.id), handlerHideAdded(), handlerHideUpdated()">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  <Form v-if="show"></Form>
  <FormEditing v-if="showEditing"></FormEditing>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import Form from './Form'
import FormEditing from './FormEditing'
export default {
  name: 'HelloWorld',
  components: {
    Form,
    FormEditing
  },
  computed: {
    ...mapGetters([
      'books',
      'show',
      'showEditing'
    ])
  },
  methods: {
    ...mapActions([
      'onDelete',
      'onHide',
      'onHideEditing',
      'handlerEditing',
      'handlerHideAdded',
      'handlerHideUpdated'
    ]),
    onModelEditing(id) {
      this.handlerEditing(id)
    }
  }
}
</script>