import {onMounted, onUnmounted, toRefs} from "vue";
import {snackbar_store} from "../snackbar/snackbar.store";

export default {
    props: {
        value: String
    },
    setup(props, { emit })  {
        const {value} = toRefs(props)
        const snackbar = snackbar_store()

        function remove_item(item: string): void {
            emit('remove-todo', item)
        }

        onMounted((): void => {
            snackbar.create_snackbar('A tarefa foi adicionada com sucesso!', 'snackbar--success')
        })

        onUnmounted((): void => {
            snackbar.create_snackbar('A tarefa foi removida com sucesso!', 'snackbar--error')
        })

        return {
            value,
            remove_item
        }
    }
}
