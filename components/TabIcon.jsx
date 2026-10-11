import { View, Text, Image } from "react-native";
import React from "react";

/**
 * Icon + label used by the bottom tab navigator.
 * @param {{ icon: number, color: string, name: string, focused: boolean }} props
 */
const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View
      className="items-center justify-center gap-2 pt-5"
      style={{ maxWidth: 80 }}
    >
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs`}
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{ textAlign: "center", width: 70, color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabIcon;
