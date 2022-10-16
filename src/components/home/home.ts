import {reactive, onMounted, defineComponent, ref} from "vue"
import TodoItem from "../todo-item-list/todo-item.vue";

export default {
    components: {TodoItem},
    setup() {
        const value_new_todo = ref<string>('')
        const list_todo = reactive([] as string[])

        function add_width_todolist(str: string): void {
            if (!str) {
                alert('Escreva uma tarefa antes de salvar.')

                return;
            }

            list_todo.push(str)

            value_new_todo.value = ''
        }

        function remove_todo_item(item: string): void {
            const index = list_todo.indexOf(item)

            if (index > -1) list_todo.splice(index, 1)
        }

        return {
            list_todo,
            value_new_todo,
            add_width_todolist,
            remove_todo_item
        }
    }
}
