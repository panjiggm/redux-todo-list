export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, action.payload]
    case 'DELETE_TODO':
      return state.filter((todo, index) => action.payload !== index)
    default:
      return state
  }
}
