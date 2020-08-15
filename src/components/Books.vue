<template>
  <div class="mt-5">
    <button class="btn btn-success mb-3" @click="onHide">Add Book</button>
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
            <button type="button" class="btn btn-warning btn-sm mr-1">Update</button>
            <button type="button" class="btn btn-danger btn-sm"
                    @click="onDelete(book.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  <Form v-if="show"></Form>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'
import {mapActions} from 'vuex'
import Form from './Form'
export default {
  name: 'HelloWorld',
  components: {
    Form
  },
  computed: {
    ...mapGetters([
      'books',
      'show'
    ])
  },
  methods: {
    ...mapActions([
      'onDelete',
      'onHide'
    ])
  }
}
</script>