import { ActionTree } from 'vuex'
import { State } from './state'
import axios from '@/http/http'

const actions: ActionTree<State, any> = {
  getTestApi({ commit, state: States }, params: any[]) {
    axios({
      method: 'get',
      url: '/api/wechat/detail/comment',
      params
    }).then((res: any) => {
      commit('setTest', '异步处理--修改test的数据');
    }).catch((error) => {
      console.log(error)
    })
  }
}

export default actions
