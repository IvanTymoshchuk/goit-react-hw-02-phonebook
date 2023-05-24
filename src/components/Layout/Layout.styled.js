import styled from '@emotion/styled';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${p => p.theme.space[4]}px;
  padding: ${p => p.theme.space[4]}px;
`;

export const Title = styled.h1`
  display: block;
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
  font-size: ${(p) => p.theme.fontSize.xl};
  color: ${(p) => p.theme.colors.white};
`;