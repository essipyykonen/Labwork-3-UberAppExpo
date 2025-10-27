import React from 'react';
import tw from 'twrnc';
import NavOptions from '../components/NavOptions';
import NavFavourites from '../components/NavFavourites';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Image } from 'expo-image';
import { SafeAreaView } from 'react-native-safe-area-context';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { GOOGLE_MAPS_API_KEY } from '@env';
import { useDispatch } from 'react-redux';
import { setDestination, setOrigin } from '../slices/navSlice';
import { useNavigation } from '@react-navigation/native';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`flex-1 bg-white`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100 }}
          source={{ uri:'https://links.papareact.com/gzs' }}
          contentFit="contain"
        />

        <GooglePlacesAutocomplete
          placeholder="Where from?"
          styles={{
            container: { flex: 0 },
            textInput: { fontSize: 18 },
          }}
          onPress={(data, details = null) => {
            dispatch(setOrigin({
              location: details.geometry.location,
              description: data.description,
            })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          returnKeyType={"search"}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_API_KEY,
            language: 'en',
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
          

          fetchDetailsOnPress={true}
          timeout={20000}
          listViewDisplayed="auto"
          keyboardShouldPersistTaps="always"
          keepResultsAfterBlur={false}

          onFail={(error) => {
            console.warn('GooglePlacesAutocomplete onFail:', error);
          }}
          onNotFound={() => {
            console.log('GooglePlacesAutocomplete: no results found');
          }}

          onTimeout={() => {
            console.warn('Google Places request timed out');
          }}

          autoFillOnNotFound={false}
          currentLocation={false}
          disableScroll={false}
          enableHighAccuracyLocation={true}
          filterReverseGeocodingByTypes={[]}
          isRowScrollable={true}
          numberOfLines={1}
          predefinedPlaces={[]}
          predefinedPlacesAlwaysVisible={false}
          suppressDefaultStyles={false}
          textInputProps={{ autoCapitalize: 'none', autoCorrect: false }}
        />
        <NavOptions />
        <NavFavourites />
      </View>
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('ContactScreen')}
          style={tw`bg-black p-3 mt-20`}
        >
          <Text style={tw`text-white text-center font-semibold`}>Contact Us</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
    text: {
        color: 'blue'
    },
});