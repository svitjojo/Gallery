import {
  GetPhotosAction,
  RemoveFromSelectedPhoto,
  SelectPhotoAction,
} from '../actions/photos';
import { UnsplashPhoto } from '../screens/GalleryScreen';

export type State = {
  photos: UnsplashPhoto[];
  selectedPhoto: UnsplashPhoto | null;
};
type Action = GetPhotosAction | SelectPhotoAction | RemoveFromSelectedPhoto;

const initState: State = {
  photos: [],
  selectedPhoto: null,
};

export const galleryReducer = (state: State = initState, action: Action) => {
  switch (action.type) {
    case 'photos/GET':
      return { ...state, photos: action.payload };
    case 'photos/SELECT':
      return {
        ...state,
        selectedPhoto: state.photos.find(photo => photo.id === action.payload),
      };
    case 'photos/REMOVE_FROM_SELECTED':
      return {
        ...state,
        selectedPhoto: null,
      };
    default:
      return state;
  }
};
