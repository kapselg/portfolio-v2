export interface Info{
  name: string;
  description: string;
  thumbnail: Image;
  started?: Date;
  ended?: Date | string;
  buttons?: Button[];
}

export interface Button {
  label: string;
  url: string;
}

export interface Image {
  alt: string;
  url: string;
}
