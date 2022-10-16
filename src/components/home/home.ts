import {reactive, onMounted, defineComponent, ref} from "vue"
import TodoItem from "../todo-item-list/todo-item.vue";

export default {
    components: {TodoItem},
    setup() {
        const value_new_todo = ref<string>('')
        const list_todo = reactive([] as string[])

        function add_width_todolist(str: string): void {
            list_todo.push(str)
        }

        return {
            list_todo,
            value_new_todo,
            add_width_todolist
        }
    }
}
