import { MessageType, MessageUser } from "./IMessageProps";

export default interface IMessageFns {
  getSender(): MessageUser;
  getReceiver(): MessageUser;
  getMessage(): string;
  getCreatedAt(): string;
  getType(): MessageType;
}