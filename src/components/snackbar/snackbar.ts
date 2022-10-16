import {snackbar_store} from "./snackbar.store";
import {onMounted, reactive} from "vue";

export default {
    setup() {
        const store = snackbar_store()

        return {
            store
        }
    }
}
