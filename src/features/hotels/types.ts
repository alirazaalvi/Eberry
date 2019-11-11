export interface Hotel {
  name: string;
  propertyCode: string;
  orgNumber: string | null;
  brandCode: string;
  brandName: string;
  regionCode: string | null;
  regionName: string | null;
  destinationCode: string | null;
  destinationName: string | null;
  address: Address;
  contactDetails: ContactDetails;
  location: Location;
  manager: Manager;
  roomCapacity: number | null;
  statusCode: string;
  statusLevel: string;
  openingDate: string | null;
  closingDate: string | null;
  currency: string;
  isFavourite?: boolean;
}

export interface Address {
  streetAddress: string | null;
  postalCode: string | null;
  city: string | null;
  country: string | null;
  countryCode: string | null;
}

export interface ContactDetails {
  phoneNumber: string | null;
  frontDeskEmailId: string | null;
}

export interface Location {
  latitude: number | null;
  longitude: number | null;
}

export interface Manager {
  name: string | null;
  phoneNumber: string | null;
  emailAddress: string | null;
}
export interface SearchInput {
  location: string;
}