<template>
    <div class="modals">
        <div class="itemModal">
            <div class="titleModal">
                <h5>Add a new book</h5>
                <span>✖</span>
            </div>
            <hr>
            <div class="form-group">
                <label for="exampleInputEmail1">Title:</label>
                <input type="text" class="form-control ml-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter title">
                <label for="exampleInputEmail1">Author:</label>
                <input type="text" class="form-control ml-2" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter author">
                <label style=""><input type="checkbox"> Read?</label>
                <div class="pb-3">
                    <button type="button" class="btn btn-primary mr-2 ml-2">Submit</button>
                    <button type="button" class="btn btn-danger">Reset</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Form'
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
</style>