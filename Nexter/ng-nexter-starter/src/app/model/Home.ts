export class Home {
  name: string;
  rooms: number;
  area: number;
  price: number;
  location: string;

  constructor(name: string, rooms: number, area: number, price: number, location: string) {
    this.name = name;
    this.rooms = rooms;
    this.area = area;
    this.price = price;
    this.location = location;
  }
}
