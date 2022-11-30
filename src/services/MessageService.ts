import Message from "..//models/Message";

class MessageService {
  save(message: Message): boolean {
    const canBeSent = message.getSender().canSend(message);
    const canBeRecieved = message.getReceiver().canRecieve(message);
    if(!canBeSent || !canBeRecieved) {
      if(message.isSystemMessage()) {
        throw new Error("System type message can only be sent by Teacher and only to student.");
      } else {
        throw new Error("Message couldn't be sent.");
      }
    }
    return true;
  }
}

export default new MessageService();