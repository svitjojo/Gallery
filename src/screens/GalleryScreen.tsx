import React, { useEffect } from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import {
  FlatList,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack/lib/typescript/src/types';
import { RootStackParams } from '../../App';
import { getPhotos } from '../actions/photos';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { capitalizeFirstLetter } from '../helpers/capitalizeFirstLetter';

export interface UnsplashPhoto {
  id: string;
  created_at: string;
  updated_at: string;
  promoted_at: string;
  width: number;
  height: number;
  color: string;
  blur_hash: string;
  description: string;
  alt_description: string;
  urls: {
    raw: string;
    full: string;
    regular: string;
    small: string;
    thumb: string;
    small_s3: string;
  };
  links: {
    self: string;
    html: string;
    download: string;
    download_location: string;
  };
  likes: number;
  liked_by_user: boolean;
  current_user_collections: any[];
  sponsorship: null;
  topic_submissions: {};
  user: {
    id: string;
    updated_at: string;
    username: string;
    name: string;
    first_name: string;
    last_name: string;
    twitter_username: string;
    portfolio_url: string | null;
    bio: string;
    location: string;
    links: {
      self: string;
      html: string;
      photos: string;
      likes: string;
      portfolio: string;
      following: string;
      followers: string;
    };
    profile_image: {
      small: string;
      medium: string;
      large: string;
    };
    instagram_username: string;
    total_collections: number;
    total_likes: number;
    total_photos: number;
    accepted_tos: boolean;
    for_hire: boolean;
    social: {
      instagram_username: string | null;
      portfolio_url: string | null;
      twitter_username: string | null;
      paypal_email: string | null;
    };
  };
}

const GalleryScreen = () => {
  const photos = useAppSelector(state => state.photos);
  const dispatch = useAppDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParams>>();

  const handleItemPress = (photoId: string) => {
    navigation.navigate('FullscreenImage', { photoId });
  };

  useEffect(() => {
    dispatch(getPhotos());
  }, [dispatch]);

  return (
    <SafeAreaView style={styles.sectionContainer}>
      <FlatList
        data={photos}
        renderItem={({ item }) => (
          <View style={styles.itemWrapper}>
            <TouchableOpacity onPress={() => handleItemPress(item.id)}>
              <Image style={styles.image} source={{ uri: item.urls.thumb }} />
            </TouchableOpacity>
            <View style={styles.itemTextWrapper}>
              <Text>
                {capitalizeFirstLetter(
                  item.description ?? item.alt_description,
                )}
              </Text>
              <Text style={styles.highlight}>{item.user.name}</Text>
            </View>
          </View>
        )}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    marginBottom: 20,
  },
  highlight: {
    fontWeight: '700',
  },
  image: {
    width: 150,
    height: 150,
    marginRight: 10,
    borderRadius: 8,
  },
  itemWrapper: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  itemTextWrapper: {
    flexShrink: 1,
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
});

export default GalleryScreen;
