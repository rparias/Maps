export interface Mappable {
  location: {
    lat: number;
    lon: number;
  }

  markerContent(): string;
}