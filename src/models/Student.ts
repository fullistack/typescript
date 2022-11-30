import IUserProps from "src/interfaces/IUserProps";
import Message from "./Message";
import User from "./User";

export default class Student extends User {
  constructor(params: IUserProps) {
    super(params);
  }

  getFullName(): string {
    return `${this.getFirstName()} ${this.getLastName()}`;
  }

  canSend(message: Message): boolean {
    return message.isManualMessage();
  }
  
  canRecieve(message: Message): boolean {
    return message.isSystemMessage() || message.isManualMessage();
  }
}