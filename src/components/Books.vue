<template>
  <div class="mt-5">
    <button class="btn btn-success mb-3">Add Book</button>
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
        <tr>
          <td>foo</td>
          <td>bar</td>
          <td>foobar</td>
          <td>
            <button type="button" class="btn btn-warning btn-sm mr-1">Update</button>
            <button type="button" class="btn btn-danger btn-sm">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
