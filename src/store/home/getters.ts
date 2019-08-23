import { GetterTree } from 'vuex'
import state, { State } from './state'

const getters: GetterTree<State, any> = {
    getTest(state: any): void {
        return state.test
    }
};

export default getters;
