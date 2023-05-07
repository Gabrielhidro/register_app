import { useEffect, useState } from 'react';
import { ImagePreviewContainer, ImagePreviewContent } from './styled';
import { BiImageAdd } from 'react-icons/bi';

interface ImagePreviewProps {
  file: any;
}

export function ImagePreview({ file }: ImagePreviewProps) {
  const [image, setImage] = useState({ path: '', name: '' })

  if (!!file) {
    const reader = new FileReader();
    reader.onload = () => {
      const arrayBuffer = reader.result as ArrayBuffer;
      const blob = new Blob([arrayBuffer], { type: file.type });
      setImage(() => ({ path: URL.createObjectURL(blob), name: file.name }));
    };
    reader.readAsArrayBuffer(file);
  }

  useEffect(() => URL.revokeObjectURL(image.path), [])


  return (
    <ImagePreviewContainer>
      <ImagePreviewContent>
      {file ? (
        <img alt={image.name} src={image.path} />
      ) : (
        <BiImageAdd size={'40%'} style={{color: '#b8b8b8'}} />
      )}
      </ImagePreviewContent>
    </ImagePreviewContainer>
  )
}

export default ImagePreview;
