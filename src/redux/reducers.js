import { ADD_ADVERTISEMENT, DELETE_ADVERTISEMENT, UPDATE_ADVERTISEMENT } from './actions';

const initialState = {
  advertisements: [],
};

const advertisementReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ADVERTISEMENT:
      return {
        ...state,
        advertisements: [...state.advertisements, action.payload],
      };
    case DELETE_ADVERTISEMENT:
      return {
        ...state,
        advertisements: state.advertisements.filter((ad) => ad.id !== action.payload),
      };
    case UPDATE_ADVERTISEMENT:
      const { id, updatedAdvertisement } = action.payload;
      return {
        ...state,
        advertisements: state.advertisements.map((ad) =>
          ad.id === id ? { ...ad, ...updatedAdvertisement } : ad
        ),
      };
    default:
      return state;
  }
};

export default advertisementReducer;
