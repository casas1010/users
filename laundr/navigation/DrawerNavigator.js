import React from "react";

import { createDrawerNavigator } from "@react-navigation/drawer";

import HomeScreen from "../screens/DrawerScreens/HomeScreen";
import AccountScreen from "../screens/DrawerScreens/AccountScreen";
import HistoryScreen from "../screens/DrawerScreens/HistoryScreen";
import NotificationsScreen from "../screens/DrawerScreens/NotificationsScreen";
import ReferralScreen from "../screens/DrawerScreens/ReferralScreen";
import PaymentScreen from "../screens/DrawerScreens/PaymentScreen";
import { DrawerContent } from "../screens/DrawerScreens/DrawerContent";

const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={(props) => <DrawerContent {...props} />}>
      <Drawer.Screen name="home" component={HomeScreen} />
      <Drawer.Screen name="Account" component={AccountScreen} />
      <Drawer.Screen name="History" component={HistoryScreen} />
      <Drawer.Screen name="Notifications" component={NotificationsScreen} />
      <Drawer.Screen name="Referrals" component={ReferralScreen} />
      <Drawer.Screen name="Payment" component={PaymentScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
