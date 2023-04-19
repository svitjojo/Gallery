import { Image, StyleSheet, Text } from 'react-native';
import React, { useEffect } from 'react';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParams } from '../../App';
import { useAppSelector, useAppDispatch } from '../app/hooks';
import { getPhotoById, removeSelectedPhoto } from '../actions/photos';

type Props = NativeStackScreenProps<RootStackParams, 'FullscreenImage'>;

const ImageScreen: React.FC<Props> = ({ route }) => {
  const photo = useAppSelector(state => state.selectedPhoto);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getPhotoById(route.params.photoId));

    return () => {
      dispatch(removeSelectedPhoto());
    };
  }, [dispatch, route]);

  return photo ? (
    <Image style={styles.image} source={{ uri: photo.urls.full }} />
  ) : (
    <Text>Loading...</Text>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: '100%',
  },
});

export default ImageScreen;
