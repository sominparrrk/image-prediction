import { usePrediction } from '../../context/PredictionContext';
import { IImageData } from '../../types/prediction';
import { camelToSentence } from '../../utils/camelToSentence';
import { formatTime } from '../../utils/formatTime';
import { Table, TableData, TableTitle, WarningText } from './Predictions.styles';
import { View } from './View';

export const Predictions = () => {
  const { predictionResult } = usePrediction();
  const headers =
    predictionResult.length > 0
      ? Object.keys(predictionResult[0])
          .map((key) => ({
            value: key,
            title: camelToSentence(key),
          }))
          .filter((header) => header.value !== 'id' && header.value !== 'prediction')
      : [];

  const newPredictions = predictionResult.map((prediction) => ({
    id: prediction.id,
    title: prediction.title,
    description: prediction.description,
    timeOfPrediction: formatTime(prediction.timeOfPrediction),
    prediction: prediction.prediction,
  }));

  return predictionResult.length > 0 ? (
    <Table>
      <thead>
        <tr>
          {headers.map((header) => (
            <TableTitle key={header.value}>{header.title}</TableTitle>
          ))}
          <th>View</th>
        </tr>
      </thead>
      <tbody>
        {newPredictions.map((result, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <TableData key={colIndex}>{String(result[header.value as keyof IImageData])}</TableData>
              ))}
              <TableData>
                <View prediction={result.prediction} />
              </TableData>
            </tr>
          );
        })}
      </tbody>
    </Table>
  ) : (
    <WarningText>No predictions yet</WarningText>
  );
};
