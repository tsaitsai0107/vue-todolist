const app = Vue.createApp({
  data() {
    return {
      newTodo: "",
      editedTodo: null,
      beforeEditTodo: "",
      todos: [
        //{ id: "1", text: "lorem1", completed: false },
      ],
      timeMessage: "You loaded this page on " + new Date().toLocaleString(),
    };
  },
  methods: {
    addTodo: function () {
      this.todos.push({
        id: this.todos.length,
        text: this.newTodo,
        completed: false,
      });
      this.newTodo = "";
    },
    removeTodo(index) {
      this.todos.splice(index, 1);
    },
    enterEdit: function (todo, e) {
      let focusInput = e.target.nextElementSibling;

      this.beforeEditTodo = todo.text;
      this.editedTodo = todo;

      this.$nextTick(() => {
        focusInput.focus();
      });
    },
    doneEdit: function (todo, index) {
      console.log(todo.id);
      if (!this.editedTodo) {
        return;
      }
      this.editedTodo = null;
      console.log(this.editedTodo);
      if (!todo.text) {
        this.removeTodo(index);
      }
    },
    cancelEdit: function (todo) {
      this.editedTodo = null;
      todo.text = this.beforeEditTodo;
    },
  },
}).mount("#panel");
