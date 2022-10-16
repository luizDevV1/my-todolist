import {onMounted, onUnmounted, toRefs} from "vue";

export default {
    props: {
        value: String
    },
    setup(props, { emit })  {
        const {value} = toRefs(props)

        function remove_item(item: string): void {
            emit('remove-todo', item)
        }

        onMounted((): void => {
            alert('A tarefa foi adicionada com sucesso!')
        })

        onUnmounted((): void => {
            alert('A tarefa foi removida com sucesso!')
        })

        return {
            value,
            remove_item
        }
    }
}
