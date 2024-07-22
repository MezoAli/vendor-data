export interface Geotag {
  id: string;
  name: string;
  place_type: string;
  full_name: string;
  country: string;
  country_code: string;
  coordinates: {
    lat: number;
    long: number;
  };
}

export interface Tweet {
  id: string;
  userId: string;
  userName: string;
  text: string;
  date: string;
  geo: Geotag;
}

export interface Vendor {
  name: string;
  description: string;
  created: number;
  updated: number;
  twitterId: string;
  image: string;
  tweets: Tweet[];
}
