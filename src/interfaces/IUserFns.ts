export default interface IUserFns {
  getId(): number;
  getFirstName(): string;
  getLastName(): string;
  getFullName(): string;
  getEmail(): string;
  getProfilePhoto(): string;
}