import Teacher from '../src/models/Teacher';
import Student from '../src/models/Student';
import Parent from '../src/models/Parent';

import TeacherService from '../src/services/TeacherService';

describe('Teacher', () => {
  beforeEach(() =>{
    jest.resetAllMocks();
  });

  describe('Teacher.__getTeacherDetail', () => {
    it('should return teacher detail', async () => {
      const id = 1;
      const mockResponse = new Teacher({
        id: 1,
        firstName: 'Test',
        lastName: 'Teacher',
        email: 'test.teacher@gmail.com',
        salutation: 'Mr.'
      });

      TeacherService.find = jest.fn().mockResolvedValue(mockResponse);

      const result = await TeacherService.find(id);

      expect(result).toEqual(mockResponse);
      expect(TeacherService.find).toHaveBeenCalledTimes(1);
      expect(TeacherService.find).toBeCalledWith(id);
      
      expect(result.getId()).toEqual(1);
      expect(result.getEmail()).toEqual('test.teacher@gmail.com');
      expect(result.getFullName()).toEqual('Mr. Test Teacher');
      
      console.log('Teacher Details::', {
        id: result.getId(),
        firstName: result.getFirstName(),
        lastname: result.getLastName(),
        fullName: result.getFullName(),
        email: result.getEmail(),
        profilePhoto: result.getProfilePhoto(),
        salutation: result.getSalutation(),
      });
    });
  });

  describe('Teacher.__saveTeacher', () => {
    it('should return true save teacher', async () => {
      const teacher = new Teacher({
        id: 1,
        firstName: 'Test',
        lastName: 'Teacher',
        email: 'test.teacher@gmail.com',
        salutation: 'Mr.'
      });

      const mockResponse = true;
      TeacherService.save = jest.fn().mockResolvedValue(mockResponse);

      const result = await TeacherService.save(teacher);

      expect(result).toEqual(mockResponse);
      expect(TeacherService.save).toHaveBeenCalledTimes(1);
      expect(TeacherService.save).toBeCalledWith(teacher);
    });
  });
});