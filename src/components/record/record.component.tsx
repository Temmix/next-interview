import React from 'react';
// Styles
import { Wrapper, Container, Displayer, Image } from './record.styles';
import IRecord from '../../model/IRecord';

const RecordComponent: React.FC<IRecord> = (data: IRecord): JSX.Element => (
  <Wrapper>
    <Container>
      <Image
        src={data.artworkUrl100}
        alt={data.trackCensoredName}
        style={{ position: 'relative', paddingRight: '10px' }}
      />
      <div>
        <Displayer>Title: {data.trackCensoredName}</Displayer>
        <Displayer> Album: {data.collectionName} </Displayer>
      </div>
    </Container>
  </Wrapper>
);

export default RecordComponent;
