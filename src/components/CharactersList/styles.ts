import styled from 'styled-components'
import Modal from "react-modal";

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  width: 150px;
  height: 170px;
  background: #1B1B1B;
  border: 2px solid #606060;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 5px;
`

export const CardImg = styled.img`
  width: 146px;
  height: 169px;
  border-radius: 6px;
  filter: grayscale(100%);
  :hover {
    filter: grayscale(0%);
  }
`;

export const CardName = styled.span`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
`

export const CardDescription = styled.span`
  font-size: 12px;
  color: #fff;
  margin-bottom: 30px;
`;

export const CardNameDiv = styled.div`
  display: flex;
  flex-direction: column;
  background: rgba(0, 0, 0, 0.65);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-bottom-left-radius: 8px;
  border-bottom-right-radius: 8px;
  margin-top: -30px;
  height: 30px;
  padding: 3px;
`

export const ModalCard = styled(Modal).attrs({
  animationType: "fade",
  transparent: true,
  ariaHideApp: false,
  contentLabel: "Modal",
  closeTimeoutMS: 0,
  shouldCloseOnOverlayClick: true,
  style: {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      alignSelf: "center",
      overflow: "hidden",
    },
  },
})`
  display: flex;
  height: 100vh;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const ButtonClose = styled.button`
  height: 30px;
  width: 70px;
  background: #1b1b1b;
  border: 2px solid #606060;
  box-sizing: border-box;
  border-radius: 8px;
  margin: 5px;
  color: #fff;
`;