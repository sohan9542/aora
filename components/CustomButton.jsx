import { TouchableOpacity, Text } from "react-native";
import React from "react";

/**
 * Primary call-to-action button used across onboarding and auth screens.
 * @param {{
 *   title: string,
 *   handlePress: () => void,
 *   containerStyles?: string,
 *   textStyles?: string,
 *   isLoading?: boolean,
 * }} props
 */
const CustomButton = ({
  title,
  handlePress,
  containerStyles = "",
  textStyles = "",
  isLoading = false,
}) => {
  return (
    <TouchableOpacity
      onPress={handlePress}
      activeOpacity={0.7}
      className={`bg-secondary rounded-xl min-h-[62px] justify-center items-center ${containerStyles} ${
        isLoading ? "opacity-50" : ""
      }`}
      disabled={isLoading}
    >
      <Text className={`text-primary font-psemibold text-lg ${textStyles}`}>
        {title}
      </Text>
    </TouchableOpacity>
  );
};

export default CustomButton;
