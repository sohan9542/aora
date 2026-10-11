import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

/** Placeholder profile screen. */
const Profile = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-white text-2xl font-psemibold">Profile</Text>
        <Text className="text-gray-100 text-sm font-pregular mt-2 text-center">
          User profile and posts will appear here.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Profile;
