<template>
  <div class="container mt-5">
    <h2>Books</h2>
    <hr>
    <div class="alert alert-success" role="alert" v-if="showAdded">
      Book added!
    </div>
    <div class="alert alert-success" role="alert" v-if="showUpdated">
      Book updated!
    </div>
    <Books></Books>
  </div>
</template>

<script>
import Books from './components/Books'
import {mapGetters} from 'vuex'

export default {
  name: 'App',
  components: {
    Books
  },
  computed: {
    ...mapGetters([
      'showAdded',
      'showUpdated'
    ])
  }
}
</script>
