import styled from 'styled-components';

export const OuterDiv = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  flex-grow: 1;
  min-height: calc(100vh - 50px);
  align-items: center;
  justify-content: center;
`;

export const NormalLoader = styled(OuterDiv)`
  min-height: unset;
  padding: 1em opx;
`;
