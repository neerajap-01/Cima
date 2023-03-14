import styled from 'styled-components';

export const Container = styled.div`
  width  : 100%;
  height : 100%;
`;

export const Main = styled.div`
  display           : flex;
  flex-direction     : column;
  align-items       : center;
  justify-content   : flex-start;
  width             : 100%;
`;

export const TitleText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: ${(props) => props.fontWeight};
  font-size: ${(props) => props.fontSize};
  line-height: 180%;
  color: ${(props) => props.color ? props.color : '#001564'};
  margin: ${(props) => props.margin ? props.margin : '0'};
`;

export const SubtitleText = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 400;
  font-size: 24px;
  text-align: center;
  color: #2C2D32;
`;

export const AddBox = styled.div`
  background: rgba(255, 104, 9, 0.14); 
  border-radius: 10px; 
  height: 430px; 
  width: 612px;
  margin: 2em;
  cursor: pointer;
`;

export const InfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;