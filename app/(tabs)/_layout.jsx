import { View, Text, Image } from "react-native";
import React from "react";
import { Tabs, Redirect } from "expo-router";
import { icons } from "../../constants";

const TabIcon = ({ icon, color, name, focused }) => {
  return (
    <View className="items-center justify-center gap-2 pt-5" style={{ maxWidth: 80 }}>
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className="w-6 h-6"
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"}  text-xs`}
        numberOfLines={1}
        ellipsizeMode="tail"
        style={{ textAlign: "center", width: 70, color:color }}
      >
        {name}
      </Text>
    </View>
  );
};

const TabsLayout = () => {
  return (
    <>
      <Tabs
        screenOptions={{
          tabBarShowLabel: false,
          tabBarStyle: {
            height: 84, // Adjust height if needed
            paddingTop: 10, // Reduce horizontal padding to minimize gaps
            backgroundColor: "#161622",
            borderTopWidth: 1,
            borderTopColor: '#232533',
            
          },
          tabBarItemStyle: {
            flex: 1, // Ensures all tabs share equal space
            alignItems: "center",
            justifyContent: "center",
            maxWidth: 90, // Control the max width of each tab
          },
          tabBarActiveTintColor: "#FFA001",
          tabBarInactiveTintColor: "#CDCDE0",
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.home}
                color={color}
                focused={focused}
                name={"Home"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="bookmark"
          options={{
            title: "Bookmark",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.bookmark}
                color={color}
                focused={focused}
                name={"Bookmark"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="create"
          options={{
            title: "Create",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.plus}
                color={color}
                focused={focused}
                name={"Create"}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            headerShown: false,
            tabBarIcon: ({ color, focused }) => (
              <TabIcon
                icon={icons.profile}
                color={color}
                focused={focused}
                name={"Profile"}
              />
            ),
          }}
        />
      </Tabs>
    </>
  );
};

export default TabsLayout;
