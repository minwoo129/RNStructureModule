import {RouteProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';

// =============================== RootStackNavigator ===============================
export interface RootStackNavigatorProps {}

export type RootStackPageParams = {
  MainStackNavigator: undefined;
  AuthStackNavigator: undefined;
};

export type RootStackNavigation = StackNavigationProp<RootStackPageParams>;

export type RootStackPages = keyof RootStackPageParams;

export type RootStackPageProps<T extends RootStackPages> = RouteProp<
  RootStackPageParams,
  T
>;
// =============================== AuthStackNavigator ===============================
export interface AuthStackNavigatorProps {}

// =============================== MainStackNavigator ===============================
export interface MainStackNavigatorProps {}

export type MainStackPageParams = {
  MainTabNavigator: undefined;
};

// =============================== MainTabNavigator ===============================
export interface MainTabNavigatorProps {}

export type MainTabPageParams = {
  TabPage1Container: undefined;
  TabPage2Container: undefined;
  TabPage3Container: undefined;
  TabPage4Container: undefined;
};

export type MainTabNavigation = StackNavigationProp<MainTabPageParams>;

export type MainTabPages = keyof MainTabPageParams;

export type MainTabPageProps<T extends MainTabPages> = RouteProp<
  MainTabPageParams,
  T
>;
