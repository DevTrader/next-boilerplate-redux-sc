const initialState = {
	lastUpdate: 0,
	light: false,
	count: 0,
	title: 'Home'
}

export const HomeReducer = (state = initialState, action) => {
	switch (action.type) {
	  case 'TICK':
		return{
			...state,
			lastUpdate: action.ts,
		  	light: !!action.light
		}
	  case 'INCREMENT':
		return{
			...state,
			count: state.count + 1
		}
	  case 'DECREMENT':
	  return{
		...state,
		count: state.count - 1
		}
	  case 'RESET':
		return{
			...state,
			count: initialState.count
		}
	  default: return state
	}
}

export default HomeReducer;