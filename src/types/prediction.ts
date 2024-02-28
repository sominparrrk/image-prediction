interface IPredictionBoundingBox {
  x1: number;
  x2: number;
  y1: number;
  y2: number;
}

export interface IPrediction {
  bbox: IPredictionBoundingBox;
  label: string;
  score: string;
}

export interface IImagePrediction {
  description: string;
  predictions: IPrediction[];
}

export interface IImageData {
  id: string;
  title: string;
  description: string;
  timeOfPrediction: number;
  prediction: IImagePrediction;
}
