export default class Address {
  private _country: string;
  private _city: string;
  private _street: string;
  private _houseNumber: string;
  private _apartment: number;

  constructor(country: string, city: string, street: string, houseNumber: string, apartment: number) {
    this._country = country;
    this._city = city;
    this._street = street;
    this._houseNumber = houseNumber;
    this._apartment = apartment;
  }

  get country(): string {
    return this._country;
  }

  set country(value: string) {
    this._country = value;
  }

  get city(): string {
    return this._city;
  }

  set city(value: string) {
    this._city = value;
  }

  get street(): string {
    return this._street;
  }

  set street(value: string) {
    this._street = value;
  }

  get houseNumber(): string {
    return this._houseNumber;
  }

  set houseNumber(value: string) {
    this._houseNumber = value;
  }

  get apartment(): number {
    return this._apartment;
  }

  set apartment(value: number) {
    this._apartment = value;
  }
}
