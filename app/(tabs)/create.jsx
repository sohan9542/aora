import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

/** Placeholder create/upload screen. */
const Create = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-white text-2xl font-psemibold">Create</Text>
        <Text className="text-gray-100 text-sm font-pregular mt-2 text-center">
          Video upload form will live here.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Create;
