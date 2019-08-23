import { MutationTree } from 'vuex'

const Mutations: MutationTree<any> = {
    setTest(state: any, data: any) {
        state.text = data
    }
}

export default Mutations
