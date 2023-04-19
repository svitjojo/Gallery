import { UnsplashPhoto } from '../screens/GalleryScreen';
import { AppThunk } from '../app/store';

export type GetPhotosAction = { type: 'photos/GET'; payload: UnsplashPhoto[] };
export type SelectPhotoAction = { type: 'photos/SELECT'; payload: string };
export type RemoveFromSelectedPhoto = { type: 'photos/REMOVE_FROM_SELECTED' };

export const getPhotos = (): AppThunk => {
  return async dispatch => {
    try {
      const data = await fetch(
        'https://api.unsplash.com/photos/?client_id=ab3411e4ac868c2646c0ed488dfd919ef612b04c264f3374c97fff98ed253dc9',
      );

      const response: UnsplashPhoto[] = await data.json();

      dispatch({ type: 'photos/GET', payload: response });
    } catch (error) {
      console.log(error);
    }
  };
};

export const getPhotoById = (photoId: string) => ({
  type: 'photos/SELECT',
  payload: photoId,
});

export const removeSelectedPhoto = () => ({
  type: 'photos/REMOVE_FROM_SELECTED',
});
