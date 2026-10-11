import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

/** Placeholder home feed — video listing UI not implemented yet. */
const Home = () => {
  return (
    <SafeAreaView className="bg-primary h-full">
      <View className="flex-1 items-center justify-center px-4">
        <Text className="text-white text-2xl font-psemibold">Home</Text>
        <Text className="text-gray-100 text-sm font-pregular mt-2 text-center">
          Video feed UI will live here.
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default Home;
