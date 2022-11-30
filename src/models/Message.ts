import IMessageFns from "src/interfaces/IMessageFns";
import IMessageProps, { MessageType, MessageUser } from "../interfaces/IMessageProps";

export default class Message implements IMessageFns {  
  private sender: MessageUser;
  private receiver: MessageUser;
  private message: string;
  private createdAt: Date;
  private type: MessageType;

  constructor(params: IMessageProps) {
    this.sender = params.sender;
    this.receiver = params.receiver;
    this.message = params.message;
    this.createdAt = params.createdAt;
    this.type = params.type;
  }

  getSender(): MessageUser {
    return this.sender;
  }
  
  getReceiver(): MessageUser {
    return this.receiver;
  }

  getMessage(): string {
    return this.message;
  }

  getCreatedAt(): string {
    return this.createdAt.toDateString();
  }

  getType(): MessageType {
    return this.type;
  }

  isSystemMessage(): boolean {
    return this.getType() === MessageType.System;
  }

  isManualMessage(): boolean {
    return this.getType() === MessageType.Manual;
  }
}