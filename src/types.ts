import { JwtPayload } from "jsonwebtoken";

// FRONT END TYPES

export interface UserCredentials {
  username: string;
  email: string;
  password: string;
}

export interface UseUserStructure {
  loginUser: (userCredentials: UserCredentials) => Promise<void>;
}

export interface User {
  id: string;
  username: string;
  token: string;
}

export interface UserState extends User {
  isLogged: boolean;
}

export interface BackLoginResponse {
  token: string;
}

export interface TokenPayload extends JwtPayload {
  id: string;
  username: string;
}

// BACK END TYPES

export interface CustomTokenPayload extends JwtPayload {
  id: string;
  username: string;
}

export interface EventStructure {
  id: number;
  eventName: string;
  description: string;
  eventDay: string;
  simulator: string;
  track: string;
  car: string;
  category: string;
  community: string;
  owner: string;
  price: number;
  image: string;
  slots: number;
}

export type Events = EventStructure[];

export interface Community {
  id: number;
  name: string;
  description: string;
  discord: string;
  website: string;
}

export type Communities = Community[];
