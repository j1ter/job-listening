// Типы действий
export const ADD_ADVERTISEMENT = 'ADD_ADVERTISEMENT';
export const DELETE_ADVERTISEMENT = 'DELETE_ADVERTISEMENT';
export const UPDATE_ADVERTISEMENT = 'UPDATE_ADVERTISEMENT';

// Создание действий
export const addAdvertisement = (advertisement) => ({
  type: ADD_ADVERTISEMENT,
  payload: advertisement,
});

export const deleteAdvertisement = (id) => ({
  type: DELETE_ADVERTISEMENT,
  payload: id,
});

export const updateAdvertisement = (id, updatedAdvertisement) => ({
  type: UPDATE_ADVERTISEMENT,
  payload: { id, updatedAdvertisement },
});
