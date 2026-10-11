import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { icons } from "../constants";

/**
 * Labeled text input with optional password visibility toggle.
 * @param {{
 *   title: string,
 *   value: string,
 *   handleChangeText: (text: string) => void,
 *   otherStyles?: string,
 *   keyboardType?: import('react-native').KeyboardTypeOptions,
 *   placeholder?: string,
 * }} props
 */
const FormField = ({
  title,
  value,
  handleChangeText,
  otherStyles = "",
  keyboardType = "default",
  placeholder,
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = title === "Password";

  return (
    <View className={`space-y-2 ${otherStyles}`}>
      <Text className="text-base text-gray-100 font-pmedium">{title}</Text>
      <View className="w-full h-16 px-4 border-2 border-black-200 flex-row rounded-2xl items-center">
        <TextInput
          className="flex-1 text-white font-psemibold text-base"
          value={value}
          placeholder={placeholder}
          onChangeText={handleChangeText}
          placeholderTextColor="#7b7b8b"
          keyboardType={keyboardType}
          secureTextEntry={isPassword && !showPassword}
          autoCapitalize={
            keyboardType === "email-address" ? "none" : "sentences"
          }
        />
        {isPassword && (
          <TouchableOpacity onPress={() => setShowPassword((prev) => !prev)}>
            <Image
              source={!showPassword ? icons.eye : icons.eyeHide}
              className="w-6 h-6"
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FormField;
