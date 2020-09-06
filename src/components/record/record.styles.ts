import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: 800;
  color: white;
  height: 100px;
  width: 850px;
  margin: 10px;
  border-radius: 10px;
  background: rgb(238, 174, 202);
  background: radial-gradient(
    circle,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

export const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  width: 900px;
  height: 800px;
  margin-bottom: 25px;
  margin: 0 auto;
  overflow: auto;
`;

export const Container = styled.div`
  display: flex;
`;

export const Displayer = styled.p`
  position: relative;
  display: flex;
`;

export const Image = styled.img`
  position: relative;
  padding-right: 10px;
`;
