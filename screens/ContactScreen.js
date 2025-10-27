import React from 'react';
import tw from 'twrnc';
import { useNavigation } from '@react-navigation/native';
import { Icon } from '@rneui/themed';
import { View, Text, TouchableOpacity } from 'react-native';


const ContactScreen = () => {
  const navigation = useNavigation();

  return (
    <View style={tw`flex-1 justify-center items-center bg-white p-5`}>
      <TouchableOpacity
        onPress={() => navigation.navigate('HomeScreen')}
        style={tw`bg-gray-100 absolute top-12 left-4 z-50 p-3 rounded-full shadow-lg`}
      >
        <Icon name="arrow-left"
          color="black"
          type="antdesign"
        />
      </TouchableOpacity>
      <Text style={tw`text-2xl font-bold mb-3`}>Contact</Text>
      <Text style={tw`text-lg`}>Your Name: John Doe</Text>
      <Text style={tw`text-lg`}>Email: johndoe@example.com</Text>
      <Text style={tw`text-lg`}>Phone: +1234567890</Text>
    </View>
  );
};

export default ContactScreen;