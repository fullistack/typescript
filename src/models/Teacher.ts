import IUserGetSalutation from "src/interfaces/IUserGetSalutation";
import IUserWithSalutationProps from "src/interfaces/IUserWithSalutationProps";
import Message from "./Message";
import User from "./User";

export default class Teacher extends User implements IUserGetSalutation {
  private salutation: string;

  constructor(params: IUserWithSalutationProps) {
    super(params);
    
    this.salutation = params.salutation;
  }

  getSalutation(): string {
    return this.salutation;
  }

  getFullName(): string {
    return `${this.getSalutation()} ${this.getFirstName()} ${this.getLastName()}`;
  }

  canSend(message: Message): boolean {
    return message.isSystemMessage() || message.isManualMessage();
  }
  
  canRecieve(message: Message): boolean {
    return message.isManualMessage();
  }
}