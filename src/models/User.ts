import IUserFns from "src/interfaces/IUserFns";
import IUserProps from "src/interfaces/IUserProps";
import Message from "./Message";

export default abstract class User implements IUserFns {
  private id: number;
  private firstName: string;
  private lastName: string;
  private email: string;
  private profilePhoto?: string;

  constructor(params: IUserProps) {
    this.id = params.id;
    this.firstName = params.firstName;
    this.lastName = params.lastName;
    this.email = params.email;
    this.profilePhoto = params.profilePhoto || `https://ui-avatars.com/api/?name=${params.firstName}+${params.lastName}.jpg`;
  }

  getId(): number {
    return this.id;
  }
  
  getFirstName(): string {
    return this.firstName;
  }

  getLastName(): string {
    return this.lastName;
  }

  getEmail(): string {
    return this.email;
  }

  getProfilePhoto(): string {
    return this.profilePhoto || `https://ui-avatars.com/api/?name=${encodeURI(this.getFullName())}`;
  }

  abstract getFullName(): string;

  abstract canSend(message: Message): boolean;

  abstract canRecieve(message: Message): boolean;
}