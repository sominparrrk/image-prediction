import { camelToSentence } from '../../utils/camelToSentence';
import { Table, TableData, TableTitle } from './Images.styles';
import { Predict } from './Predict';
import { IImage } from './types/image';

interface IResult {
  imageArray: IImage[];
}

export const Result = ({ imageArray }: IResult) => {
  const headers = Object.keys(imageArray[0])
    .map((key) => ({
      value: key,
      title: camelToSentence(key),
    }))
    .filter((header) => header.value !== 'id');

  return (
    <Table>
      <thead>
        <tr>
          {headers.map((header) => (
            <TableTitle key={header.value}>{header.title}</TableTitle>
          ))}
          <th>Predict</th>
        </tr>
      </thead>
      <tbody>
        {imageArray.map((image, rowIndex) => {
          return (
            <tr key={rowIndex}>
              {headers.map((header, colIndex) => (
                <TableData key={colIndex}>{image[header.value as keyof IImage]}</TableData>
              ))}
              <TableData>
                <Predict image={image} />
              </TableData>
            </tr>
          );
        })}
      </tbody>
    </Table>
  );
};
