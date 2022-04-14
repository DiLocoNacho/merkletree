export const state = () => ({
  whitelist: null,
  merkleTree: null,
  merkleTreeRoot: null,
})

export const actions = {}

export const mutations = {
  SET_WHITELIST(state, whitelist) {
    state.whitelist = whitelist
  },
  SET_MERKLE_TREE(state, merkleTree) {
    state.merkleTree = merkleTree
  },
  SET_MERKLE_TREE_ROOT(state, merkleTreeRoot) {
    state.merkleTreeRoot = merkleTreeRoot
  },
}

export const getters = {
  //   getAccount: (state) => state.account,
}
