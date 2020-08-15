<template>
  <div class="container mt-5">
    <h2>Books</h2>
    <hr>
    <Books></Books>
  </div>
</template>

<script>
import Books from './components/Books'

export default {
  name: 'App',
  components: {
    Books
  }
}
</script>
