import { ActionTree } from 'vuex'
import { State } from './state'

import actionRequests from './action-requests'

// import { MutationTypes } from './mutation-types'

const actions: ActionTree<State, State> = {
  ...actionRequests,
}
export default actions
