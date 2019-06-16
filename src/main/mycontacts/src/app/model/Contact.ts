import Address from "./Address";

export default class Contact {

  private _userId: number;
  private _fullName: string;
  private _email: string;
  private _phoneNumbers: [];
  private _addresses: Address[];

  constructor(userId: number, fullName: string, email: string, phoneNumbers: [], addresses: []) {
    this._userId = userId;
    this._fullName = fullName;
    this._email = email;
    this._phoneNumbers = phoneNumbers;
    this._addresses = addresses;
  }

  get userId(): number {
    return this._userId;
  }

  set userId(value: number) {
    this._userId = value;
  }

  get fullName(): string {
    return this._fullName;
  }

  set fullName(value: string) {
    this._fullName = value;
  }

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get phoneNumbers(): [] {
    return this._phoneNumbers;
  }

  set phoneNumbers(value: []) {
    this._phoneNumbers = value;
  }

  get addresses(): Address[] {
    return this._addresses;
  }

  set addresses(value: Address[]) {
    this._addresses = value;
  }
}
