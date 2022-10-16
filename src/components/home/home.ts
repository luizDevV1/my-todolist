import {reactive, onMounted, defineComponent, ref} from "vue"
import TodoItem from "../todo-item-list/todo-item.vue";
import {snackbar_store} from "../snackbar/snackbar.store";

export default {
    components: {TodoItem},
    setup() {
        const value_new_todo = ref<string>('')
        const list_todo = reactive([] as string[])
        const snackbar = snackbar_store()

        function add_width_todolist(): void {
            if (!rules_if_exist_value()) {
                snackbar.create_snackbar('Escreva uma tarefa ou altere o valor, antes de salvar.', 'snackbar')

                return;
            }

            list_todo.push(value_new_todo.value)

            value_new_todo.value = ''
        }

        function rules_if_exist_value(): boolean {
            return !!value_new_todo.value && !list_todo.find((item) => value_new_todo.value === item)
        }

        // Emit function
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
