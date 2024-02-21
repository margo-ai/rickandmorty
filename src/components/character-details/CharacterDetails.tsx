import React from 'react';

type Props = {
  data: { id?: string; name: string; species: string; gender: string; image: string };
  onClose: () => void;
};

export const CharacterDetails = ({ data, onClose }: Props) => {
  const { name, gender, image, species } = data;
  console.log(data);

  return (
    <>
      <div>{name}</div>
      <button onClick={onClose}>Close</button>
    </>
  );
};
