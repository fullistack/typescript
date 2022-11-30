import Parent from "src/models/Parent";
import Student from "src/models/Student";
import Teacher from "src/models/Teacher";

export type MessageUser = Teacher | Student | Parent;
export enum MessageType {
  Manual = 'Manual',
  System = 'System'
}

export default interface IMessageProps {
  sender: MessageUser;
  receiver: MessageUser;
  message: string;
  createdAt: Date;
  type: MessageType;
}