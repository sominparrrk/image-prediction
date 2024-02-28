import { FileInput } from '../../components/Input/FileInput';
import { Container } from './Images.styles';
import { formatSize } from '../../utils/formatSize';
import { formatTime } from '../../utils/formatTime';
import { Result } from './Result';
import { useSelectedImages } from '../../context/SelectedImagesContext';

export const Images = () => {
  const { selectedImages, setSelectedImages } = useSelectedImages();

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files?.length) {
      const newImages = Array.from(event.target.files).map((image) => ({
        id: `${image.name}-${Date.now()}`,
        name: image.name,
        size: formatSize(image.size),
        uploadTime: formatTime(Date.now()),
      }));

      setSelectedImages((prevImages) => [...prevImages, ...newImages]);
    }
  };

  return (
    <Container>
      <FileInput htmlFor='fileInput' name='fileUpload' accept='image/*' onChange={onChange}>
        Choose image
      </FileInput>
      {selectedImages.length > 0 && <Result imageArray={selectedImages} />}
    </Container>
  );
};
