import { useEffect, useRef, useState } from 'react';
import OrangeImage from '../../assets/orange.jpg';
import { IPrediction } from '../../types/prediction';
import { Image, ResultContainer } from './Predictions.styles';
import { ResultBox } from './ResultBox';

interface IResult {
  predictions: IPrediction[];
}

export const Result = ({ predictions }: IResult) => {
  const ref = useRef<HTMLImageElement>(null);
  const [predictionsByScreenSize, setPredictionByScreenSize] = useState<IPrediction[]>([]);

  const resizePrediction = () => {
    if (ref.current && ref.current.naturalWidth && ref.current.naturalHeight) {
      const newPredictions = predictions.map((prediction) => {
        const { bbox } = prediction;

        const previousX = bbox.x1;
        const previousY = bbox.y1;
        const previousWidth = bbox.x2 - bbox.x1;
        const previousHeight = bbox.y2 - bbox.y1;

        const currentX = (previousX * (ref.current?.width ?? 1)) / (ref.current?.naturalWidth ?? 1);
        const currentY = (previousY * (ref.current?.height ?? 1)) / (ref.current?.naturalHeight ?? 1);
        const currentWidth = (previousWidth * (ref.current?.width ?? 1)) / (ref.current?.naturalWidth ?? 1);
        const currentHeight = (previousHeight * (ref.current?.height ?? 1)) / (ref.current?.naturalHeight ?? 1);

        return { ...prediction, bbox: { x1: currentX, y1: currentY, x2: currentWidth, y2: currentHeight } };
      });
      setPredictionByScreenSize(newPredictions);
    }
  };

  const handleImageLoad = () => {
    resizePrediction();
  };

  useEffect(() => {
    resizePrediction();
    window.addEventListener('resize', resizePrediction);

    return () => {
      window.removeEventListener('resize', resizePrediction);
    };
  }, []);

  return (
    <ResultContainer>
      <Image src={OrangeImage} alt='Orange' ref={ref} onLoad={handleImageLoad} />
      {predictionsByScreenSize.length > 0 &&
        predictionsByScreenSize.map((prediction, index) => {
          return <ResultBox key={index} prediction={prediction} />;
        })}
    </ResultContainer>
  );
};
