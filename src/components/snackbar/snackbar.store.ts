import {defineStore} from "pinia";

export const snackbar_store = defineStore('snackbar', {
    state: () => {
        return {
            show: false,
            message: 'Component snackbar',
            class_component: 'snackbar',
            time_to_close: 2_500
        }
    },
    actions: {
        create_snackbar(message: string,
                        class_component: 'snackbar' | 'snackbar--success' | 'snackbar--error',
                        time?: number): void {
            this.message = message
            this.class_component = class_component

            if (time) this.time_to_close = time

            this.show = true

            setTimeout(() => {
                this.show = false;
            }, this.time_to_close)
        },
        close_snackbar(): void {
            this.show = false
        }
    },
    getters: {
        is_open: (state) => state.show
    }
})
