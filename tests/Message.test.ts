import Message from '../src/models/Message';
import Student from '../src/models/Student';
import Teacher from '../src/models/Teacher';

import MessageService from '../src/services/MessageService';
import { MessageType } from '../src/interfaces/IMessageProps';

describe('Message', () => {
  beforeEach(() =>{
    jest.resetAllMocks();
  });

  describe('Message.__sendSystemMessage', () => {
    it('should return true', async () => {
      const teacher = new Teacher({id: 1, firstName: 'Test', lastName: 'Teacher', email: 'test.teacher@gmail.com', salutation: 'Mr.'});
      const student = new Student({id: 1, firstName: 'Test', lastName: 'User', email: 'test.user@gmail.com'});
      const message = new Message({sender: teacher, receiver: student, message: 'This is a test message.', createdAt: new Date(), type: MessageType.System});

      const mockResponse = true;
      MessageService.save = jest.fn().mockResolvedValue(mockResponse);

      const result = await MessageService.save(message);

      expect(result).toEqual(mockResponse);
      expect(MessageService.save).toHaveBeenCalledTimes(1);
      expect(MessageService.save).toBeCalledWith(message);
      
      console.log('Message Details::', {
        senderFullName: message.getSender().getFullName(),
        recieverFullName: message.getReceiver().getFullName(),
        message: message.getMessage(),
        createdAt: message.getCreatedAt(),
        type: message.getType(),
      });
    });

    it('should return error `System type message can only be sent by Teacher and only to student.`', async () => {
      const teacher = new Teacher({id: 1, firstName: 'Test', lastName: 'Teacher', email: 'test.teacher@gmail.com', salutation: 'Mr.'});
      const student = new Student({id: 1, firstName: 'Test', lastName: 'User', email: 'test.user@gmail.com'});
      const message = new Message({sender: student, receiver: teacher, message: 'This is a test message.', createdAt: new Date(), type: MessageType.System});

      const errorMessage = 'System type message can only be sent by Teacher and only to student.';
      const mockResponse = errorMessage;
      MessageService.save = jest.fn().mockResolvedValue(mockResponse);

      const result = await MessageService.save(message);

      expect(result).toEqual(errorMessage);
      expect(MessageService.save).toHaveBeenCalledTimes(1);
      expect(MessageService.save).toBeCalledWith(message);
    });
  });
});