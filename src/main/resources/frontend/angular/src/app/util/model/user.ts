import { Car } from './car';

export interface User {
  id: number;
  firstName?:string;
  lastName?: string;
  emailw:string;
  birthday?: Date;
  login?:string;
  password?: string;
  phone?:string;
  cars?: Car[];
}
