import { HIDE_LOADER, SHOW_LOADER } from "../Actions/types";

const initialState = true

export default function (state = initialState, action) {
	switch (action.type) {
		case HIDE_LOADER:
			console.log('in hide');
			return true

		case SHOW_LOADER:
			console.log('in show');
			return false
		default:
			return state;
	}
}
