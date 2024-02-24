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

export type AuthStackPageParams = {
  Login: undefined;
  Join: undefined;
};

export type AuthStackNavigation = StackNavigationProp<AuthStackPageParams>;

export type AuthStackPages = keyof AuthStackPageParams;

export type AuthStackPageProps<T extends AuthStackPages> = RouteProp<
  AuthStackPageParams,
  T
>;

// =============================== MainStackNavigator ===============================
export interface MainStackNavigatorProps {}

export type MainStackPageParams = {
  MainTabNavigator: undefined;
  MainStackPage1: undefined;
  MainStackPage2: undefined;
};

export type MainStackNavigation = StackNavigationProp<MainStackPageParams>;

export type MainStackPages = keyof MainStackPageParams;

export type MainStackPageProps<T extends MainStackPages> = RouteProp<
  MainStackPageParams,
  T
>;

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
