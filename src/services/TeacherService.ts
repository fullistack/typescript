import Teacher from "../models/Teacher";
import { isJPGImage, isValidEmail } from "./HelperService";

class TeacherService {
  find(id: number): Teacher {
    return new Teacher({
      id: id,
      firstName: 'Test',
      lastName: 'Teacher',
      email: 'test.teacher@gmail.com',
      salutation: 'Mr.'
    });
  }

  save(teacher: Teacher): boolean {
    if(isValidEmail(teacher.getEmail()) && isJPGImage(teacher.getProfilePhoto())) {
      return true;
    }
    return false;
  }
}

export default new TeacherService();