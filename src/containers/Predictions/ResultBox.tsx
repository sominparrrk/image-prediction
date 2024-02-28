import { IPrediction } from '../../types/prediction';
import { ResultText, TextContainer } from './Predictions.styles';

interface IResultBox {
  prediction: IPrediction;
}

export const ResultBox = ({ prediction }: IResultBox) => {
  return (
    <div
      style={{
        position: 'absolute',
        left: prediction.bbox.x1,
        top: prediction.bbox.y1,
        width: prediction.bbox.x2,
        height: prediction.bbox.y2,
        border: '1px solid blue',
        background: 'linear-gradient(rgba(0, 0, 255, 0.1), rgba(0, 0, 255, 0.1))',
      }}
    >
      <TextContainer>
        <ResultText>{prediction.label}</ResultText>
        <ResultText>{`(${(Number(prediction.score) * 100).toFixed(0)}%)`}</ResultText>
      </TextContainer>
    </div>
  );
};
